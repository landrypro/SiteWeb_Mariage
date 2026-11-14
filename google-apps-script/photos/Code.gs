// Déployer ce projet séparément du script RSVP, depuis guykongne@gmail.com.
const PHOTO_FOLDER_NAME = "Mariage Carole et Guy Landry - Photos invites 2026";
const PHOTO_FOLDER_ID_PROPERTY = "PHOTO_FOLDER_ID";
const PHOTO_UPLOADS_OPEN_PROPERTY = "PHOTO_UPLOADS_OPEN";
const MAX_PHOTO_BYTES = 10 * 1024 * 1024;

function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index")
    .setTitle("Partager vos photos - Carole et Guy Landry");
}

function getUploadStatus() {
  const properties = PropertiesService.getScriptProperties();
  return {
    open: properties.getProperty(PHOTO_UPLOADS_OPEN_PROPERTY) === "true" &&
      Boolean(properties.getProperty(PHOTO_FOLDER_ID_PROPERTY)),
    maxBytes: MAX_PHOTO_BYTES,
  };
}

function uploadPhoto(payload) {
  if (!getUploadStatus().open) {
    throw new Error("Le dépôt des photos est fermé pour le moment.");
  }
  if (!payload || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(payload.id || ""))) {
    throw new Error("Identifiant d'envoi invalide.");
  }
  const encoded = String(payload.data || "");
  if (!encoded || encoded.length > Math.ceil(MAX_PHOTO_BYTES / 3) * 4 + 4) {
    throw new Error("La photo dépasse la limite de 10 Mo.");
  }

  let bytes;
  try {
    bytes = Utilities.base64Decode(encoded);
  } catch (error) {
    throw new Error("Le fichier reçu est invalide.");
  }
  if (bytes.length === 0 || bytes.length > MAX_PHOTO_BYTES) {
    throw new Error("La photo est vide ou dépasse la limite de 10 Mo.");
  }
  const format = imageFormat_(bytes);
  if (!format) {
    throw new Error("Format non accepté. Utilisez JPEG, PNG, WebP, HEIC ou AVIF.");
  }

  const folderId = PropertiesService.getScriptProperties().getProperty(PHOTO_FOLDER_ID_PROPERTY);
  const folder = DriveApp.getFolderById(folderId);
  const name = String(payload.id).toLowerCase() + "." + format.extension;
  const existing = folder.getFilesByName(name);
  if (existing.hasNext()) {
    return { ok: true, duplicate: true };
  }

  const blob = Utilities.newBlob(bytes, format.mimeType, name);
  const saved = folder.createFile(blob);
  if (!saved.getId()) {
    throw new Error("La photo n'a pas pu être confirmée dans Drive.");
  }
  return { ok: true, duplicate: false };
}

// Exécuter une fois depuis l'éditeur Apps Script avec le compte de Guy.
// Le suffixe _ empêche l'appel de ces fonctions depuis la page publique.
function setupPhotoUploads_() {
  const email = Session.getEffectiveUser().getEmail().toLowerCase();
  if (email !== "guykongne@gmail.com") {
    throw new Error("Ouvrez ce projet avec le compte guykongne@gmail.com.");
  }
  const properties = PropertiesService.getScriptProperties();
  let folderId = properties.getProperty(PHOTO_FOLDER_ID_PROPERTY);
  if (!folderId) {
    const folder = DriveApp.createFolder(PHOTO_FOLDER_NAME);
    folderId = folder.getId();
    properties.setProperty(PHOTO_FOLDER_ID_PROPERTY, folderId);
  }
  properties.setProperty(PHOTO_UPLOADS_OPEN_PROPERTY, "false");
  console.log("Dossier photos : https://drive.google.com/drive/folders/" + folderId);
}

function openPhotoUploads_() {
  const properties = PropertiesService.getScriptProperties();
  if (!properties.getProperty(PHOTO_FOLDER_ID_PROPERTY)) {
    throw new Error("Exécutez setupPhotoUploads_ avant d'ouvrir les dépôts.");
  }
  properties.setProperty(PHOTO_UPLOADS_OPEN_PROPERTY, "true");
}

function closePhotoUploads_() {
  PropertiesService.getScriptProperties().setProperty(PHOTO_UPLOADS_OPEN_PROPERTY, "false");
}

function imageFormat_(bytes) {
  const value = (index) => bytes[index] & 255;
  const ascii = (start, length) => Array.from({ length }, (_, offset) =>
    String.fromCharCode(value(start + offset))).join("");
  if (bytes.length >= 3 && value(0) === 255 && value(1) === 216 && value(2) === 255) {
    return { mimeType: "image/jpeg", extension: "jpg" };
  }
  if (bytes.length >= 8 && [137, 80, 78, 71, 13, 10, 26, 10]
    .every((byte, index) => value(index) === byte)) {
    return { mimeType: "image/png", extension: "png" };
  }
  if (bytes.length >= 12 && ascii(0, 4) === "RIFF" && ascii(8, 4) === "WEBP") {
    return { mimeType: "image/webp", extension: "webp" };
  }
  if (bytes.length >= 12 && ascii(4, 4) === "ftyp") {
    const brand = ascii(8, 4);
    if (["heic", "heix", "hevc", "hevx"].includes(brand)) {
      return { mimeType: "image/heic", extension: "heic" };
    }
    if (brand === "avif") {
      return { mimeType: "image/avif", extension: "avif" };
    }
  }
  return null;
}
