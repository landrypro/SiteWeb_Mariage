const translations = {
  fr: {
    back: "Retour au site",
    eyebrow: "21 novembre 2026 · Maison OMAJ",
    title: "Partagez vos photos de cette journée",
    intro: "Vos souvenirs, vus à travers vos yeux, sont un cadeau précieux. Choisissez les photos que vous souhaitez transmettre à Carole et Guy Landry.",
    stepOne: "Choisissez jusqu’à 5 photos à la fois.",
    stepTwo: "Suivez l’envoi de chaque photo.",
    stepThree: "Retrouvez une confirmation une fois les photos reçues.",
    button: "Déposer mes photos",
    pending: "Le dépôt des photos sera ouvert prochainement.",
    privacy: "Les photos sont envoyées dans un dossier privé des mariés. Elles ne sont pas publiées automatiquement sur le site.",
  },
  en: {
    back: "Back to the site",
    eyebrow: "November 21, 2026 · Maison OMAJ",
    title: "Share your photos from the day",
    intro: "Your memories, seen through your eyes, are a precious gift. Choose the photos you would like to send to Carole and Guy Landry.",
    stepOne: "Choose up to 5 photos at a time.",
    stepTwo: "Follow the progress of each photo.",
    stepThree: "Get confirmation once your photos are received.",
    button: "Upload my photos",
    pending: "Photo uploads will open soon.",
    privacy: "Photos are sent to the couple’s private folder. They are not published on the site automatically.",
  },
};

let language = localStorage.getItem("gg-lang") === "en" ? "en" : "fr";
const uploadLink = document.getElementById("upload-link");
const uploadUrl = window.PHOTO_UPLOAD_URL;
if (typeof uploadUrl === "string" && /^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(uploadUrl)) {
  uploadLink.href = uploadUrl;
  uploadLink.hidden = false;
  document.getElementById("setup-status").hidden = true;
}

function render() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  const toggle = document.getElementById("language-toggle");
  toggle.textContent = language === "fr" ? "EN" : "FR";
  toggle.setAttribute("aria-label", language === "fr" ? "Switch to English" : "Passer en français");
  localStorage.setItem("gg-lang", language);
}

document.getElementById("language-toggle").addEventListener("click", () => {
  language = language === "fr" ? "en" : "fr";
  render();
});
render();
