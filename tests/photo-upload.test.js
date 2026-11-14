const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "../google-apps-script/photos/Code.gs"), "utf8");
const id = "123e4567-e89b-42d3-a456-426614174000";
const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScL/nwAAAABJRU5ErkJggg==", "base64");

function createContext(open = true) {
  const values = new Map([
    ["PHOTO_FOLDER_ID", "private-folder"],
    ["PHOTO_UPLOADS_OPEN", String(open)],
  ]);
  const files = new Map();
  const folder = {
    getFilesByName(name) { return { hasNext: () => files.has(name) }; },
    createFile(blob) {
      files.set(blob.name, blob);
      return { getId: () => "saved-file" };
    },
  };
  const context = vm.createContext({
    PropertiesService: { getScriptProperties: () => ({ getProperty: (key) => values.get(key) }) },
    DriveApp: { getFolderById: (folderId) => {
      assert.equal(folderId, "private-folder");
      return folder;
    } },
    Utilities: {
      base64Decode: (data) => [...Buffer.from(data, "base64")],
      newBlob: (bytes, mimeType, name) => ({ bytes, mimeType, name }),
    },
  });
  vm.runInContext(source, context);
  return { context, files };
}

test("stores a valid image in the configured private folder and handles a retry", () => {
  const { context, files } = createContext();
  const payload = { id, data: png.toString("base64") };
  assert.equal(vm.runInContext("uploadPhoto", context)(payload).ok, true);
  assert.equal(files.size, 1);
  assert.equal(files.get(id + ".png").mimeType, "image/png");
  assert.equal(vm.runInContext("uploadPhoto", context)(payload).duplicate, true);
  assert.equal(files.size, 1);
});

test("rejects uploads while the collection is closed", () => {
  const { context } = createContext(false);
  assert.throws(() => vm.runInContext("uploadPhoto", context)({ id, data: png.toString("base64") }), /fermé/);
});

test("rejects a disguised non-image and an oversized file", () => {
  const { context } = createContext();
  const upload = vm.runInContext("uploadPhoto", context);
  assert.throws(() => upload({ id, data: Buffer.from("not an image").toString("base64") }), /Format non accepté/);
  assert.throws(() => upload({ id, data: "A".repeat(14_000_000) }), /10 Mo/);
});
