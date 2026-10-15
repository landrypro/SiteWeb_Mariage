const SHEET_NAME = "RSVP";
const HEADERS = [
  "Horodatage",
  "Nom complet",
  "Téléphone",
  "Email",
  "Accompagnants",
  "Présence",
  "Restrictions alimentaires",
  "Message",
  "Langue",
];

function doGet() {
  return jsonResponse_({ ok: true, service: "rsvp", version: 1 });
}

function doPost(event) {
  try {
    const data = event && event.parameter ? event.parameter : {};

    // Champ invisible rempli uniquement par les robots.
    if (String(data.website || "").trim()) {
      return jsonResponse_({ ok: true });
    }

    const fullName = clean_(data.fullName, 120);
    const phone = clean_(data.phone, 40);
    const email = clean_(data.email, 160);
    const guests = clean_(data.guests, 3);
    const attendance = clean_(data.attendance, 12);
    const diet = clean_(data.diet, 1000);
    const message = clean_(data.message, 1500);
    const language = clean_(data.language, 5);

    if (!fullName || !phone || !["yes", "maybe", "no"].includes(attendance)) {
      return jsonResponse_({ ok: false, error: "Champs obligatoires manquants." });
    }

    const sheet = getSheet_();
    sheet.appendRow([
      new Date(),
      fullName,
      phone,
      email,
      guests,
      attendance,
      diet,
      message,
      language || "fr",
    ]);

    notifyOrganizer_(fullName, attendance);
    return jsonResponse_({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse_({ ok: false, error: "Erreur interne." });
  }
}

function setup() {
  getSheet_();
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.autoResizeColumns(1, HEADERS.length);
  }

  return sheet;
}

function clean_(value, maxLength) {
  let text = String(value || "").trim().slice(0, maxLength);

  // Evite qu une saisie soit interprétée comme une formule dans Sheets.
  if (/^[=+\-@]/.test(text)) {
    text = "'" + text;
  }

  return text;
}

function notifyOrganizer_(fullName, attendance) {
  const recipient = PropertiesService.getScriptProperties().getProperty("NOTIFICATION_EMAIL");
  if (!recipient) return;

  MailApp.sendEmail({
    to: recipient,
    subject: "Nouveau RSVP - Carole et Guy Landry",
    body: `${fullName} vient d envoyer une réponse RSVP (${attendance}).`,
  });
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
