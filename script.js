const RSVP_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwa2LX1ROdrqF4tt3pnFW4kq4OLiEK30GBn5kYAtOLtRQePfmLGWkvkD42YwKONlwi3/exec";

const state = {
  lang: localStorage.getItem("gg-lang") || "fr",
  theme:
    localStorage.getItem("gg-theme-v2-user-set") === "true"
      ? localStorage.getItem("gg-theme") || "light"
      : "light",
  galleryFilter: "all",
  testimonialIndex: 0,
  mobileNavOpen: false,
  lastCountdownAnnouncement: "",
  lastFocusedElement: null,
  enabledSections: {
    gifts: true,
  },
};

// Add real photo paths here when supplied. Reference images are illustrative.
const PHOTO_OVERRIDES = {
  hero: "assets/reference/hero.jpg",
  gallery: {},
};
const referencePhotos = [
  "assets/reference/0116397ed30dfe68.jpg",
  "assets/reference/d159134086cc67ec.jpg",
  "assets/reference/80d7b6c5117a1ecd.jpg",
  "assets/reference/81ec39975d01e6a7.jpg",
  "assets/reference/47f3c0a4f470dd49.jpg",
  "assets/reference/97a1ec4fa699bbb4.jpg",
];

const copy = {
  fr: {
    brandSubtitle: "21 Novembre 2026 • Douala",
    navHome: "Accueil",
    navStory: "Notre histoire",
    navProgram: "Programme",
    navDress: "Dress code",
    navGallery: "Galerie",
    navInfo: "Infos",
    navRsvp: "RSVP",
    navContacts: "Contacts",
    menuLabel: "Menu",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    ctaRsvp: "Confirmer ma présence",
    ctaProgram: "Voir le programme",
    whatsappFloating: "Assistance WhatsApp",
    floatingRsvp: "RSVP",
    themeToggle: "Activer le mode sombre",
    heroKicker: "Mariage chrétien",
    heroSubtitle: "Nous célébrons notre union devant Dieu, nos familles et nos amis.",
    heroDate: "21 Novembre 2026 — Douala, Cameroun",
    heroMood: "Foi • Famille • Joie",
    heroVerse: "“L’amour est patient, il est plein de bonté.”",
    heroVerseRef: "1 Corinthiens 13:4",
    countdownEyebrow: "Compte à rebours",
    countdownTitle: "Chaque jour nous rapproche de cette alliance",
    countdownDays: "Jours",
    countdownHours: "Heures",
    countdownMinutes: "Minutes",
    countdownSeconds: "Secondes",
    heroPortraitTag: "Photo du couple",
    heroPortraitTitle: "Une journée de grâce et de reconnaissance",
    heroPortraitText:
      "Remplacez cette zone par votre plus belle photo de fiançailles ou un portrait officiel.",
    heroNoteOneLabel: "Bénédiction",
    heroNoteOneValue: "Cérémonie religieuse",
    heroNoteTwoLabel: "Réception",
    heroNoteTwoValue: "Cocktail de célébration",
    storyEyebrow: "Notre histoire",
    storyTitle: "Notre histoire",
    storyIntro:
      "C’est avec joie et reconnaissance envers Dieu que nous partageons notre chemin.",
    storyPlaceholder: "Texte modifiable : ajoutez ici votre récit, les détails marquants ou une anecdote mémorable.",
    storyEditable: "Zone éditable",
    programEyebrow: "Programme officiel",
    programTitle: "Programme officiel",
    programIntro:
      "Trois moments pour célébrer ensemble.",
    calendarButton: "Ajouter au calendrier",
    programMap: "Voir sur Google Maps",
    programStatus: "À compléter",
    faqEyebrow: "Informations importantes",
    faqTitle: "Informations importantes",
    faqIntro:
      "Tout ce qu’il faut savoir.",
    dressEyebrow: "Dress code",
    dressTitle: "Dress code",
    dressIntro:
      "Nous vous invitons à vous habiller avec élégance dans des tons doux et chaleureux, en harmonie avec notre thème.",
    dressSky: "Bleu ciel",
    dressBurnt: "Orange brûlé",
    dressIvory: "Blanc cassé",
    dressNeutral: "Beige et tons neutres",
    rsvpEyebrow: "RSVP",
    rsvpTitle: "Confirmer ma présence",
    rsvpIntro:
      "Nous avons hâte de partager cette journée avec vous.",
    rsvpFeatureOneTitle: "Pensé pour l’administration",
    rsvpFeatureOneText: "Stockage en base, export CSV/Excel et suivi des invités par foyer.",
    rsvpFeatureTwoTitle: "Parcours mobile fluide",
    rsvpFeatureTwoText:
      "Grandes zones de saisie, confirmation claire et lecture facile sur smartphone.",
    formName: "Nom complet",
    formPhone: "Téléphone",
    formEmail: "Email",
    formGuests: "Nombre d’accompagnants",
    formAttendance: "Serez-vous présent(e) ?",
    formDiet: "Restrictions alimentaires",
    formMessage: "Message aux mariés",
    formNamePlaceholder: "Nom complet *",
    formPhonePlaceholder: "Téléphone *",
    formEmailPlaceholder: "Email (facultatif)",
    formDietPlaceholder: "Restrictions alimentaires",
    formMessagePlaceholder: "Message aux mariés",
    attendanceYes: "Oui, avec joie",
    attendanceMaybe: "Je confirme bientôt",
    attendanceNo: "Malheureusement non",
    formSubmit: "Envoyer ma confirmation",
    formSuccess: "Merci pour votre confirmation. Nous avons hâte de célébrer ce moment avec vous.",
    galleryEyebrow: "Galerie photos",
    galleryTitle: "Galerie photos",
    galleryIntro:
      "Quelques instants de notre histoire.",
    filterAll: "Tout voir",
    testimonialsEyebrow: "Témoignages",
    testimonialsTitle: "Témoignages",
    testimonialsIntro:
      "Les mots de ceux qui nous sont chers.",
    testimonialPrev: "Témoignage précédent",
    testimonialNext: "Témoignage suivant",
    giftEyebrow: "Cadeaux et soutien",
    giftTitle: "Cadeaux & soutien",
    giftIntro:
      "Votre présence est le plus beau des cadeaux.",
    giftOptionOneTag: "Option 1",
    giftOptionOneTitle: "Liste de mariage",
    giftOptionOneText:
      "Détails à venir.",
    giftOptionTwoTag: "Option 2",
    giftOptionTwoTitle: "Voyage de noces",
    giftMobileTitle: "Mobile Money",
    giftBankTitle: "Coordonnées bancaires",
    giftPending: "Modalités à confirmer.",
    giftOptionTwoText:
      "Les modalités seront communiquées prochainement.",
    travelEyebrow: "Hébergement & voyage",
    travelTitle: "Hébergement & voyage",
    travelIntro:
      "Pour nos invités venant de l’extérieur.",
    travelMapTag: "Carte interactive",
    travelMapTitle: "Lieu des célébrations",
    travelMapText:
      "Maison OMAJ, Boulevard Fadil, Douala, Cameroun.",
    travelMapButton: "Voir Maison OMAJ sur Google Maps",
    travelTipsTitle: "Conseils transport",
    travelWhatsappButton: "Demander de l’aide sur WhatsApp",
    contactsEyebrow: "Contacts utiles",
    contactsTitle: "Contacts utiles",
    contactsIntro:
      "Une question le jour J ? Contactez-nous.",
    emergencyTitle: "Urgence jour J",
    emergencyText: "WhatsApp : +237 696 475 797",
    emergencyButton: "Contacter sur WhatsApp",
    footerEyebrow: "Verset biblique",
    footerVerse: "“Ce que Dieu a uni, que l’homme ne le sépare pas.”",
    footerVerseRef: "Marc 10:9",
    footerHome: "Accueil",
    footerProgram: "Programme",
    footerRsvp: "RSVP",
    footerContacts: "Contacts",
    footerThanks: "Nous remercions Dieu pour cette merveilleuse étape de notre vie.",
    footerLegal: "Mentions légales",
    modeDarkLabel: "Mode sombre",
    modeLightLabel: "Mode clair",
    calendarDownloaded: "Le fichier calendrier de la journée complète a été généré.",
    headerConfirm: "Confirmer",
    paletteTitle: "Couleurs recommandées",
    photoPreview: "Photo d’illustration — vos photos bientôt",
    galleryPreview: "Visuels d’illustration du modèle, en attendant nos photos.",
    testimonialPending: "Message à venir — les mots de nos proches seront partagés ici.",
    pendingName: "À compléter",
    dayCalendar: "Calendrier de la journée",
  },
  en: {
    brandSubtitle: "November 21, 2026 • Douala",
    navHome: "Home",
    navStory: "Our story",
    navProgram: "Schedule",
    navDress: "Dress code",
    navGallery: "Gallery",
    navInfo: "Info",
    navRsvp: "RSVP",
    navContacts: "Contacts",
    menuLabel: "Menu",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    ctaRsvp: "Confirm attendance",
    ctaProgram: "View schedule",
    whatsappFloating: "WhatsApp help",
    floatingRsvp: "RSVP",
    themeToggle: "Enable dark mode",
    heroKicker: "Christian wedding",
    heroSubtitle: "We celebrate our union before God, our families, and our friends.",
    heroDate: "November 21, 2026 — Douala, Cameroon",
    heroMood: "Faith • Family • Joy",
    heroVerse: "“Love is patient, love is kind.”",
    heroVerseRef: "1 Corinthians 13:4",
    countdownEyebrow: "Countdown",
    countdownTitle: "Each day brings us closer to this covenant",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",
    heroPortraitTag: "Couple photo",
    heroPortraitTitle: "A day of grace and gratitude",
    heroPortraitText:
      "Replace this area with your favorite engagement photo or official portrait.",
    heroNoteOneLabel: "Blessing",
    heroNoteOneValue: "Religious ceremony",
    heroNoteTwoLabel: "Reception",
    heroNoteTwoValue: "Celebration cocktail",
    storyEyebrow: "Our story",
    storyTitle: "Our story",
    storyIntro:
      "With joy and gratitude to God, we share our journey.",
    storyPlaceholder: "Editable text: add your story, meaningful details, or a memorable anecdote here.",
    storyEditable: "Editable copy",
    programEyebrow: "Official schedule",
    programTitle: "Official schedule",
    programIntro:
      "Three moments to celebrate together.",
    calendarButton: "Add to calendar",
    programMap: "Open in Google Maps",
    programStatus: "To be confirmed",
    faqEyebrow: "Important information",
    faqTitle: "Important information",
    faqIntro:
      "Everything you need to know.",
    dressEyebrow: "Dress code",
    dressTitle: "Dress code",
    dressIntro:
      "We invite you to dress elegantly in soft, warm tones that match our wedding theme.",
    dressSky: "Sky blue",
    dressBurnt: "Burnt orange",
    dressIvory: "Off-white",
    dressNeutral: "Beige and neutral tones",
    rsvpEyebrow: "RSVP",
    rsvpTitle: "Confirm attendance",
    rsvpIntro:
      "We look forward to sharing this day with you.",
    rsvpFeatureOneTitle: "Built for administration",
    rsvpFeatureOneText: "Database storage, CSV/Excel export, and guest management by household.",
    rsvpFeatureTwoTitle: "Smooth mobile flow",
    rsvpFeatureTwoText:
      "Large input zones, clear confirmation, and comfortable reading on smartphones.",
    formName: "Full name",
    formPhone: "Phone number",
    formEmail: "Email",
    formGuests: "Number of guests",
    formAttendance: "Will you be attending?",
    formDiet: "Dietary restrictions",
    formMessage: "Message to the couple",
    formNamePlaceholder: "Full name *",
    formPhonePlaceholder: "Phone *",
    formEmailPlaceholder: "Email (optional)",
    formDietPlaceholder: "Dietary restrictions",
    formMessagePlaceholder: "Message to the couple",
    attendanceYes: "Yes, joyfully",
    attendanceMaybe: "I will confirm soon",
    attendanceNo: "Unfortunately not",
    formSubmit: "Send my RSVP",
    formSuccess: "Thank you for your confirmation. We look forward to celebrating with you.",
    galleryEyebrow: "Photo gallery",
    galleryTitle: "Photo gallery",
    galleryIntro:
      "A few moments from our story.",
    filterAll: "View all",
    testimonialsEyebrow: "Testimonials",
    testimonialsTitle: "Testimonials",
    testimonialsIntro:
      "Words from those dear to us.",
    testimonialPrev: "Previous testimonial",
    testimonialNext: "Next testimonial",
    giftEyebrow: "Gifts and support",
    giftTitle: "Gifts & support",
    giftIntro:
      "Your presence is the greatest gift.",
    giftOptionOneTag: "Option 1",
    giftOptionOneTitle: "Wedding registry",
    giftOptionOneText:
      "Details coming soon.",
    giftOptionTwoTag: "Option 2",
    giftOptionTwoTitle: "Honeymoon",
    giftMobileTitle: "Mobile Money",
    giftBankTitle: "Bank details",
    giftPending: "Details to be confirmed.",
    giftOptionTwoText:
      "Details will be shared soon.",
    travelEyebrow: "Travel & stay",
    travelTitle: "Travel & stay",
    travelIntro:
      "For our guests travelling from afar.",
    travelMapTag: "Interactive map",
    travelMapTitle: "Celebration venue",
    travelMapText:
      "Maison OMAJ, Boulevard Fadil, Douala, Cameroon.",
    travelMapButton: "View Maison OMAJ on Google Maps",
    travelTipsTitle: "Transport tips",
    travelWhatsappButton: "Ask for help on WhatsApp",
    contactsEyebrow: "Helpful contacts",
    contactsTitle: "Helpful contacts",
    contactsIntro:
      "A question on the day? Get in touch.",
    emergencyTitle: "Wedding day emergency",
    emergencyText: "WhatsApp: +237 696 475 797",
    emergencyButton: "Reach out on WhatsApp",
    footerEyebrow: "Bible verse",
    footerVerse: "“What God has joined together, let no one separate.”",
    footerVerseRef: "Mark 10:9",
    footerHome: "Home",
    footerProgram: "Schedule",
    footerRsvp: "RSVP",
    footerContacts: "Contacts",
    footerThanks: "We thank God for this wonderful step in our lives.",
    footerLegal: "Legal notice",
    modeDarkLabel: "Dark mode",
    modeLightLabel: "Light mode",
    calendarDownloaded: "The calendar file for the full wedding day has been generated.",
    headerConfirm: "Confirm",
    paletteTitle: "Recommended colours",
    photoPreview: "Illustrative photo — our photos coming soon",
    galleryPreview: "Illustrative reference images, until our photos are available.",
    testimonialPending: "Message coming soon — words from our loved ones will appear here.",
    pendingName: "To be confirmed",
    dayCalendar: "Full-day calendar",
  },
};

const storyItems = [
  { year: "Rencontre", title: { fr: "Notre rencontre", en: "How we met" } },
  { year: "Relation", title: { fr: "Le début de notre relation", en: "The beginning of our relationship" } },
  { year: "Moments", title: { fr: "Les moments marquants", en: "Meaningful milestones" } },
  { year: "Fiançailles", title: { fr: "Les fiançailles", en: "The engagement" } },
  { year: "Alliance", title: { fr: "Le chemin vers le mariage", en: "The journey to marriage" } },
];

const events = [
  {
    title: { fr: "Mariage civil", en: "Civil wedding" },
    date: { fr: "Date : 21 Novembre 2026", en: "Date: November 21, 2026" },
    time: { fr: "Heure : 11h30", en: "Time: 11:30 a.m." },
    venue: { fr: "Lieu : Maison OMAJ", en: "Venue: Maison OMAJ" },
    address: { fr: "Adresse : Boulevard Fadil, Douala, Cameroun", en: "Address: Boulevard Fadil, Douala, Cameroon" },
    showAddress: true,
    notes: {
      fr: "Première étape officielle de notre engagement civil, dans la joie et la simplicité.",
      en: "The official civil step of our union, celebrated with joy and simplicity.",
    },
    maps: "https://maps.app.goo.gl/b6bGTdXK2MFqE2Df6",
  },
  {
    title: { fr: "Bénédiction nuptiale", en: "Nuptial blessing" },
    date: { fr: "Date : 21 Novembre 2026", en: "Date: November 21, 2026" },
    time: { fr: "Heure : 16h30", en: "Time: 4:30 p.m." },
    venue: { fr: "Lieu : Maison OMAJ", en: "Venue: Maison OMAJ" },
    address: { fr: "Adresse : Boulevard Fadil, Douala, Cameroun", en: "Address: Boulevard Fadil, Douala, Cameroon" },
    showAddress: true,
    notes: {
      fr: "Le cœur spirituel de cette journée, vécu dans la reconnaissance envers Dieu.",
      en: "The spiritual heart of the day, lived in gratitude before God.",
    },
    maps: "https://maps.app.goo.gl/b6bGTdXK2MFqE2Df6",
  },
  {
    title: { fr: "Cocktail de célébration", en: "Celebration cocktail" },
    date: { fr: "Date : 21 Novembre 2026", en: "Date: November 21, 2026" },
    time: { fr: "Heure : après la bénédiction nuptiale", en: "Time: after the nuptial blessing" },
    venue: { fr: "Lieu : Maison OMAJ", en: "Venue: Maison OMAJ" },
    address: { fr: "Adresse : Boulevard Fadil, Douala, Cameroun", en: "Address: Boulevard Fadil, Douala, Cameroon" },
    showAddress: true,
    notes: {
      fr: "Un temps convivial pour partager un repas, des sourires et de belles photos en famille.",
      en: "A warm gathering to share food, smiles, and joyful family memories.",
    },
    maps: "https://maps.app.goo.gl/b6bGTdXK2MFqE2Df6",
  },
];

const faqs = [
  {
    q: {
      fr: "Comment se rendre sur place ?",
      en: "How do I get there?",
    },
    a: {
      fr: "Les trois célébrations ont lieu à Maison OMAJ, Boulevard Fadil, Douala. Utilisez le lien Google Maps dans le programme pour préparer votre trajet.",
      en: "All three celebrations take place at Maison OMAJ, Boulevard Fadil, Douala. Use the Google Maps link in the schedule to plan your journey.",
    },
  },
  {
    q: {
      fr: "Où stationner ?",
      en: "Where can I park?",
    },
    a: {
      fr: "Précisez les parkings sécurisés, les zones de dépose-minute et les consignes liées au lieu de cérémonie.",
      en: "Specify secure parking, drop-off zones, and any ceremony venue guidance.",
    },
  },
  {
    q: {
      fr: "Y a-t-il un dress code ?",
      en: "Is there a dress code?",
    },
    a: {
      fr: "Oui, une élégance familiale dans les tons bleu ciel, orange brûlé, blanc cassé, beige ou neutres est recommandée.",
      en: "Yes. Family elegance in sky blue, burnt orange, off-white, beige, or neutral tones is recommended.",
    },
  },
  {
    q: {
      fr: "Les enfants sont-ils admis ?",
      en: "Are children welcome?",
    },
    a: {
      fr: "Cette réponse est facilement modifiable selon votre organisation. Vous pouvez préciser les modalités par événement.",
      en: "This answer can easily be adjusted to your plans. You may specify rules for each event separately.",
    },
  },
  {
    q: {
      fr: "À quelle heure arriver ?",
      en: "What time should we arrive?",
    },
    a: {
      fr: "Recommandez ici une arrivée 20 à 30 minutes avant la cérémonie pour un accueil serein et un bon placement.",
      en: "Recommend arriving 20 to 30 minutes before the ceremony for a smooth welcome and seating.",
    },
  },
  {
    q: {
      fr: "Que faire en cas de retard ?",
      en: "What should I do if I am late?",
    },
    a: {
      fr: "Invitez les personnes à prévenir le responsable accueil ou transport via téléphone ou WhatsApp.",
      en: "Ask guests to notify the welcome or transport coordinator by phone or WhatsApp.",
    },
  },
  {
    q: {
      fr: "Qui contacter le jour J ?",
      en: "Who should I contact on the wedding day?",
    },
    a: {
      fr: "Les coordonnées clés sont regroupées dans la section Contacts utiles pour gagner du temps.",
      en: "Key contact details are grouped in the Helpful Contacts section for quick access.",
    },
  },
];

const inspirationCards = [
  {
    kind: "women",
    title: { fr: "Inspiration femme", en: "Women's inspiration" },
    text: {
      fr: "Robes fluides, bijoux délicats, coiffures élégantes et tissus légers pour une allure raffinée.",
      en: "Flowing dresses, delicate jewelry, elegant hairstyles, and light fabrics for a refined look.",
    },
    tags: ["Bleu ciel", "Orange brûlé", "Blanc cassé"],
  },
  {
    kind: "men",
    title: { fr: "Inspiration homme", en: "Men's inspiration" },
    text: {
      fr: "Costumes bleu moyen, veste beige, chemise claire et accessoires chaleureux pour une présence soignée.",
      en: "Mid-blue suits, beige jackets, light shirts, and warm accessories for a polished presence.",
    },
    tags: ["Bleu doux", "Beige", "Cuir brun"],
  },
  {
    kind: "family",
    title: { fr: "Inspiration famille", en: "Family inspiration" },
    text: {
      fr: "Coordonner subtilement les nuances sans uniformiser, afin de garder un rendu harmonieux sur les photos.",
      en: "Coordinate tones subtly without overmatching, so family photos feel harmonious and natural.",
    },
    tags: ["Neutres", "Ivoire", "Accents chauds"],
  },
  {
    kind: "avoid",
    title: { fr: "Tenues à éviter", en: "Looks to avoid" },
    text: {
      fr: "Évitez les couleurs trop criardes, les motifs agressifs ou un total look noir si possible.",
      en: "Avoid overly bright colors, aggressive patterns, or an all-black look whenever possible.",
    },
    tags: ["Fluo", "Motifs très chargés", "Contrastes durs"],
  },
];

const galleryCategories = [
  { key: "all", label: { fr: "Tout voir", en: "View all" } },
  { key: "meeting", label: { fr: "Rencontre", en: "Meeting" } },
  { key: "engagement", label: { fr: "Fiançailles", en: "Engagement" } },
  { key: "preparation", label: { fr: "Préparatifs", en: "Preparations" } },
  { key: "couple", label: { fr: "Photos du couple", en: "Couple portraits" } },
];

const galleryItems = [
  {
    category: "meeting",
    image: "assets/photos/gallery-meeting-01.jpg",
    title: { fr: "Premiers regards", en: "First glances" },
    description: {
      fr: "Une vignette idéale pour raconter le tout premier chapitre de votre rencontre.",
      en: "A perfect tile to tell the very first chapter of your meeting.",
    },
    colors: ["#A7D8F0", "#F6F0E8", "#C96A3A"],
  },
  {
    category: "meeting",
    image: "assets/photos/gallery-meeting-02.jpg",
    title: { fr: "Souvenir fondateur", en: "Foundational memory" },
    description: {
      fr: "Utilisez cet emplacement pour une photo prise au début de l’amitié ou de la relation.",
      en: "Use this slot for a photo from the beginning of the friendship or relationship.",
    },
    colors: ["#C96A3A", "#EACAB8", "#A7D8F0"],
  },
  {
    category: "engagement",
    image: "assets/photos/gallery-engagement-01.jpg",
    title: { fr: "La promesse", en: "The promise" },
    description: {
      fr: "Une image des fiançailles, de la bague ou d’un moment de prière en couple.",
      en: "An engagement image, ring detail, or a shared prayer moment.",
    },
    colors: ["#D8C7B8", "#A7D8F0", "#C96A3A"],
  },
  {
    category: "engagement",
    image: "assets/photos/gallery-engagement-02.jpg",
    title: { fr: "Joie partagée", en: "Shared joy" },
    description: {
      fr: "Mettez ici un souvenir entouré de proches ou un cliché officiel des fiançailles.",
      en: "Place a family moment or an official engagement portrait here.",
    },
    colors: ["#F6F0E8", "#C96A3A", "#A7D8F0"],
  },
  {
    category: "preparation",
    image: "assets/photos/gallery-preparation-01.jpg",
    title: { fr: "Préparatifs doux", en: "Gentle preparations" },
    description: {
      fr: "Ajoutez les coulisses : essais, décor, papeterie, répétitions ou rendez-vous clés.",
      en: "Add backstage moments: fittings, decor, stationery, rehearsals, or key appointments.",
    },
    colors: ["#A7D8F0", "#D8C7B8", "#FFFFFF"],
  },
  {
    category: "preparation",
    image: "assets/photos/gallery-preparation-02.jpg",
    title: { fr: "Détails du jour J", en: "Wedding day details" },
    description: {
      fr: "Parfait pour montrer des accessoires, bouquets, tenues ou éléments liturgiques.",
      en: "Perfect for accessories, bouquets, outfits, or liturgical details.",
    },
    colors: ["#C96A3A", "#FFF3E8", "#E6F4FB"],
  },
  {
    category: "couple",
    image: "assets/photos/gallery-couple-01.jpg",
    title: { fr: "Portrait officiel", en: "Official portrait" },
    description: {
      fr: "Une grande photo du couple pour porter l’identité visuelle du site.",
      en: "A strong portrait of the couple to anchor the site's visual identity.",
    },
    colors: ["#A7D8F0", "#E8B9A3", "#FFF7F2"],
  },
  {
    category: "couple",
    image: "assets/photos/gallery-couple-02.jpg",
    title: { fr: "Tendresse et lumière", en: "Tenderness and light" },
    description: {
      fr: "Une photo pleine de douceur pour conclure la galerie avec chaleur.",
      en: "A soft, warm image to close the gallery beautifully.",
    },
    colors: ["#F6F0E8", "#A7D8F0", "#C96A3A"],
  },
];

const testimonials = [
  {
    initials: "PN",
    name: { fr: "Parents", en: "Parents" },
    role: { fr: "Famille", en: "Family" },
    message: {
      fr: "Nous rendons grâce à Dieu pour ce couple et pour la paix qui entoure leur engagement. Que leur foyer soit un témoignage d’amour fidèle.",
      en: "We give thanks to God for this couple and the peace surrounding their commitment. May their home become a testimony of faithful love.",
    },
  },
  {
    initials: "TM",
    name: { fr: "Témoins", en: "Witnesses" },
    role: { fr: "Compagnons de route", en: "Companions on the journey" },
    message: {
      fr: "Votre histoire nous inspire par sa sincérité, sa patience et la place que vous laissez à Dieu dans chaque décision.",
      en: "Your story inspires us through its sincerity, patience, and the place you give to God in every decision.",
    },
  },
  {
    initials: "AP",
    name: { fr: "Amis proches", en: "Close friends" },
    role: { fr: "Amitié", en: "Friendship" },
    message: {
      fr: "Nous sommes heureux de voir votre amitié devenir alliance. Que votre joie rayonne bien au-delà de cette journée.",
      en: "We are joyful to see your friendship become a covenant. May your joy shine far beyond this day.",
    },
  },
  {
    initials: "PS",
    name: { fr: "Pasteur", en: "Pastor" },
    role: { fr: "Accompagnement spirituel", en: "Spiritual guidance" },
    message: {
      fr: "Que le Seigneur vous garde dans l’unité, la prière et la bienveillance mutuelle tout au long de votre vie commune.",
      en: "May the Lord keep you in unity, prayer, and mutual kindness throughout your shared life.",
    },
  },
];

const hotels = [
  {
    title: { fr: "Hôtel recommandé 01", en: "Recommended hotel 01" },
    distance: { fr: "Distance : 12 min en voiture", en: "Distance: 12 min by car" },
    contact: { fr: "Contact : à compléter", en: "Contact: to be completed" },
    note: {
      fr: "Idéal pour les familles ou les invités arrivant la veille.",
      en: "Ideal for families or guests arriving the day before.",
    },
  },
  {
    title: { fr: "Hôtel recommandé 02", en: "Recommended hotel 02" },
    distance: { fr: "Distance : 18 min en voiture", en: "Distance: 18 min by car" },
    contact: { fr: "Contact : à compléter", en: "Contact: to be completed" },
    note: {
      fr: "Option confortable avec accès facile vers les lieux de cérémonie.",
      en: "A comfortable option with easy access to ceremony venues.",
    },
  },
  {
    title: { fr: "Hôtel recommandé 03", en: "Recommended hotel 03" },
    distance: { fr: "Distance : 22 min en voiture", en: "Distance: 22 min by car" },
    contact: { fr: "Contact : à compléter", en: "Contact: to be completed" },
    note: {
      fr: "Convient aux invités venant de l’extérieur et séjournant tout le week-end.",
      en: "Suitable for out-of-town guests staying for the weekend.",
    },
  },
];

const travelTips = {
  fr: [
    "Privilégier les déplacements groupés ou les navettes selon l’organisation finale.",
    "Prévoir une marge de temps supplémentaire pour le trafic à Douala.",
    "Partager sa localisation au responsable transport en cas d’imprévu.",
  ],
  en: [
    "Prefer group transport or shuttles depending on the final organization.",
    "Plan extra time for traffic in Douala.",
    "Share your location with the transport coordinator if anything changes.",
  ],
};

const contacts = [
  {
    title: { fr: "Contact principal", en: "Main contact" },
    name: { fr: "WhatsApp", en: "WhatsApp" },
    phone: { fr: "+237 696 475 797", en: "+237 696 475 797" },
    whatsapp: "237696475797",
  },
  {
    title: { fr: "Responsable accueil", en: "Welcome coordinator" },
    name: { fr: "WhatsApp", en: "WhatsApp" },
    phone: { fr: "+237 696 475 797", en: "+237 696 475 797" },
    whatsapp: "237696475797",
  },
  {
    title: { fr: "Responsable transport", en: "Transport coordinator" },
    name: { fr: "WhatsApp", en: "WhatsApp" },
    phone: { fr: "+237 698 495 751", en: "+237 698 495 751" },
    whatsapp: "237698495751",
  },
  {
    title: { fr: "Urgence jour J", en: "Wedding day emergency" },
    name: { fr: "WhatsApp", en: "WhatsApp" },
    phone: { fr: "+237 696 475 797", en: "+237 696 475 797" },
    whatsapp: "237696475797",
  },
];

function t(key) {
  return copy[state.lang][key] ?? copy.fr[key] ?? key;
}

function localized(value) {
  if (typeof value === "string") return value;
  return value?.[state.lang] ?? value?.fr ?? "";
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("gg-theme", theme);
  localStorage.setItem("gg-theme-v2-user-set", "true");
  const nextActionLabel = theme === "dark" ? t("modeLightLabel") : t("modeDarkLabel");
  document.getElementById("theme-toggle-label").textContent = nextActionLabel;
  document.getElementById("theme-toggle").setAttribute("aria-label", nextActionLabel);
}

function setMobileMenu(open) {
  state.mobileNavOpen = open;
  const menu = document.getElementById("mobile-nav");
  const toggle = document.getElementById("mobile-menu-toggle");
  if (!menu || !toggle) return;

  menu.hidden = !open;
  menu.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", t(open ? "menuClose" : "menuOpen"));
}

function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.getElementById("language-toggle").textContent = state.lang === "fr" ? "EN" : "FR";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  if (state.mobileNavOpen) {
    setMobileMenu(true);
  }

  renderStory();
  renderProgram();
  renderFaq();
  renderDressInspiration();
  renderGalleryFilters();
  renderGallery();
  renderTestimonial();
  renderHotels();
  renderTravelTips();
  renderContacts();
}

function renderStory() {
  const root = document.getElementById("story-timeline");
  root.innerHTML = storyItems
    .map(
      (item) => `
        <article class="timeline-card">
          <div class="timeline-topline">
            <span class="card-tag">${item.year}</span>
            <small>${t("storyEditable")}</small>
          </div>
          <h3>${localized(item.title)}</h3>
          <p>${state.lang === "fr" ? "Notre récit sera partagé prochainement." : "Our story will be shared soon."}</p>
        </article>
      `,
    )
    .join("");
}

function renderProgram() {
  const root = document.getElementById("program-grid");
  root.innerHTML = events
    .map(
      (event, index) => `
        <article class="program-card">
          <span class="program-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
          <h3>${localized(event.title)}</h3>
          <dl class="program-meta">
            ${[event.date, event.time, event.venue, ...(event.showAddress ? [event.address] : [])].map(value => {
              const [label, ...parts] = localized(value).split(":");
              return `<div><dt>${label.trim()}</dt><dd>${parts.join(":").trim()}</dd></div>`;
            }).join("")}
          </dl>
          <div class="program-actions">
            <a class="button button-secondary" href="${event.maps}" target="_blank" rel="noreferrer">${t("programMap")}</a>
            <button class="button calendar-card-button" type="button" data-calendar-day>${t("dayCalendar")}</button>
          </div>
        </article>
      `,
    )
    .join("");
  root.querySelectorAll("[data-calendar-day]").forEach(button => {
    button.addEventListener("click", () => {
      createCalendarFile();
      document.getElementById("calendar-status").textContent = t("calendarDownloaded");
    });
  });
}

function renderFaq() {
  const root = document.getElementById("faq-list");
  root.innerHTML = faqs
    .map(
      (item, index) => `
        <details class="faq-item">
          <summary>${localized(item.q)}</summary>
          <p>${localized(item.a)}</p>
        </details>
      `,
    )
    .join("");
}

function renderDressInspiration() {
  const root = document.getElementById("dress-inspiration");
  root.innerHTML = inspirationCards
    .map(
      (card) => `
        <article class="inspiration-card ${card.kind}">
          <div class="inspiration-visual"></div>
          <div>
            <h3>${localized(card.title)}</h3>
            <p>${localized(card.text)}</p>
          </div>
          <div class="inspiration-tags">
            ${card.tags.map((tag) => `<span class="tag-dot">${tag}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderGalleryFilters() {
  const root = document.getElementById("gallery-filters");
  root.innerHTML = galleryCategories
    .map(
      (category) => `
        <button class="filter-chip ${category.key === state.galleryFilter ? "active" : ""}" aria-pressed="${category.key === state.galleryFilter}" type="button" data-filter="${category.key}">
          ${localized(category.label)}
        </button>
      `,
    )
    .join("");

  root.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.galleryFilter = button.dataset.filter;
      renderGalleryFilters();
      renderGallery();
    });
  });
}

function gradientFrom(colors) {
  return `linear-gradient(145deg, ${colors[0]}, ${colors[1]} 55%, ${colors[2]})`;
}

function renderGallery() {
  const root = document.getElementById("gallery-grid");
  const visibleItems = galleryItems.filter((_, index) => index !== 1 && index !== 3);
  const items =
    state.galleryFilter === "all"
      ? visibleItems
      : visibleItems.filter((item) => item.category === state.galleryFilter);

  root.innerHTML = items
    .map((item, index) => {
      const categoryLabel = localized(
        galleryCategories.find((category) => category.key === item.category)?.label,
      );

      return `
        <button
          class="gallery-card"
          type="button"
          data-gallery-index="${index}"
          data-category="${categoryLabel}"
          aria-label="${localized(item.title)}"
        >
          <img class="gallery-preview" src="${galleryPhoto(item)}" alt="${PHOTO_OVERRIDES.gallery[item.image] ? localized(item.title) : t("photoPreview")}" loading="lazy" width="600" height="600" />
        </button>
      `;
    })
    .join("");
  let note = document.getElementById("gallery-preview-note");
  if (!note) {
    note = document.createElement("small");
    note.id = "gallery-preview-note";
    note.className = "gallery-note";
    root.after(note);
  }
  note.textContent = t("galleryPreview");
  note.hidden = visibleItems.every(item => PHOTO_OVERRIDES.gallery[item.image]);

  root.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      openLightbox(items[Number(button.dataset.galleryIndex)]);
    });
  });
}

function galleryPhoto(item) {
  const visibleItems = galleryItems.filter((_, index) => index !== 1 && index !== 3);
  return PHOTO_OVERRIDES.gallery[item.image] || referencePhotos[visibleItems.indexOf(item)];
}

function renderTestimonial() {
  const root = document.getElementById("testimonial-card");
  root.innerHTML = testimonials.map(testimonial => `
    <article class="quote-card">
      <span class="quote-mark" aria-hidden="true">“</span>
      <p>${t("testimonialPending")}</p>
      <div class="quote-person"><img src="assets/reference/81ec39975d01e6a7.jpg" alt="" loading="lazy" width="44" height="44" /><div><strong>${t("pendingName")}</strong><small>${localized(testimonial.name)}</small></div></div>
    </article>
  `).join("");
}

function renderHotels() {
  const root = document.getElementById("hotel-grid");
  root.innerHTML = hotels.slice(0, 2)
    .map(
      (hotel) => `
        <article class="hotel-card">
          <span class="card-tag">Stay</span>
          <h3>${localized(hotel.title)}</h3>
          <div class="hotel-meta">
            <span>${state.lang === "fr" ? "Distance : à confirmer" : "Distance: to be confirmed"}</span>
            <span>${localized(hotel.contact)}</span>
          </div>
          <p>${localized(hotel.note)}</p>
        </article>
      `,
    )
    .join("");
}

function renderTravelTips() {
  const root = document.getElementById("travel-tips");
  root.innerHTML = travelTips[state.lang]
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderContacts() {
  const root = document.getElementById("contacts-grid");
  root.innerHTML = contacts
    .map(
      (contact) => `
        <article class="contact-card">
          <svg class="contact-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L9 11a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></svg>
          <div class="contact-copy"><h3>${localized(contact.title)}</h3>
          <div class="contact-meta">
            <span>${localized(contact.name)}</span>
            <span>${localized(contact.phone)}</span>
          </div>
          <a href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function updateCountdown() {
  const weddingDate = new Date("2026-11-21T10:00:00+01:00").getTime();
  const now = Date.now();
  const diff = Math.max(weddingDate - now, 0);

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / hour);
  const minutes = Math.floor((diff % hour) / minute);
  const seconds = Math.floor((diff % minute) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

  const liveStatus = document.getElementById("countdown-live-status");
  const announcement =
    state.lang === "fr"
      ? `${days} jours, ${hours} heures et ${minutes} minutes avant le mariage.`
      : `${days} days, ${hours} hours, and ${minutes} minutes until the wedding.`;
  if (liveStatus && announcement !== state.lastCountdownAnnouncement) {
    liveStatus.textContent = announcement;
    state.lastCountdownAnnouncement = announcement;
  }
}

function formatIcsTimestamp(date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function createCalendarFile() {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Carole Guy Landry//Mariage//FR",
    "BEGIN:VEVENT",
    "UID:carole-guy-landry-20261121@example.com",
    `DTSTAMP:${formatIcsTimestamp(new Date())}`,
    "DTSTART;TZID=Africa/Douala:20261121T113000",
    "DTEND;TZID=Africa/Douala:20261121T235900",
    "SUMMARY:Mariage de Carole & Guy Landry",
    "LOCATION:Maison OMAJ\\, Boulevard Fadil\\, Douala\\, Cameroun",
    "DESCRIPTION:Mariage civil à 11 h 30 et bénédiction nuptiale à 16 h 30\\, suivie du cocktail de célébration. Tous les moments ont lieu à Maison OMAJ.",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "carole-guy-landry-mariage.ics";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function openLightbox(item) {
  const lightbox = document.getElementById("lightbox");
  state.lastFocusedElement = document.activeElement;
  const media = document.getElementById("lightbox-media");
  media.style.backgroundImage = `url('${galleryPhoto(item)}')`;
  media.style.backgroundSize = "cover";
  media.style.backgroundPosition = "center";
  document.getElementById("lightbox-category").textContent = localized(
    galleryCategories.find((category) => category.key === item.category)?.label,
  );
  document.getElementById("lightbox-title").textContent = localized(item.title);
  document.getElementById("lightbox-description").textContent = PHOTO_OVERRIDES.gallery[item.image] ? localized(item.description) : t("galleryPreview");
  lightbox.hidden = false;
  document.body.classList.add("modal-open");
  document.getElementById("lightbox-dismiss").focus();
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox.hidden) return;
  lightbox.hidden = true;
  document.body.classList.remove("modal-open");
  if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
    state.lastFocusedElement.focus({ preventScroll: true });
  }
  state.lastFocusedElement = null;
}

function applyFeatureFlags() {
  document.querySelectorAll("[data-feature]").forEach((section) => {
    section.hidden = !state.enabledSections[section.dataset.feature];
  });
}

function bindEvents() {
  document.getElementById("language-toggle").addEventListener("click", () => {
    state.lang = state.lang === "fr" ? "en" : "fr";
    localStorage.setItem("gg-lang", state.lang);
    applyTranslations();
    setTheme(state.theme);
  });

  document.getElementById("theme-toggle").addEventListener("click", () => {
    setTheme(state.theme === "dark" ? "light" : "dark");
  });

  document.getElementById("mobile-menu-toggle").addEventListener("click", () => {
    setMobileMenu(!state.mobileNavOpen);
  });

  document.querySelectorAll("#mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => setMobileMenu(false));
  });

  document.getElementById("calendar-download").addEventListener("click", () => {
    createCalendarFile();
    document.getElementById("calendar-status").textContent = t("calendarDownloaded");
  });

  document.getElementById("testimonial-prev").addEventListener("click", () => {
    state.testimonialIndex =
      (state.testimonialIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial();
  });

  document.getElementById("testimonial-next").addEventListener("click", () => {
    state.testimonialIndex = (state.testimonialIndex + 1) % testimonials.length;
    renderTestimonial();
  });

  document.getElementById("rsvp-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());
    const payload = {
      ...formData,
      submittedAt: new Date().toISOString(),
      language: state.lang,
    };

    if (!RSVP_ENDPOINT) {
      const existing = JSON.parse(localStorage.getItem("gg-rsvp-demo") || "[]");
      existing.push(payload);
      localStorage.setItem("gg-rsvp-demo", JSON.stringify(existing));
      form.reset();
      form.querySelector('input[name="guests"]').value = "0";
      document.getElementById("form-status").textContent = t("formSuccess");
      return;
    }

    fetch(RSVP_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: new URLSearchParams(payload),
    })
      .then(() => {
        form.reset();
        form.querySelector('input[name="guests"]').value = "0";
        document.getElementById("form-status").textContent = t("formSuccess");
      })
      .catch(() => {
        document.getElementById("form-status").textContent =
          state.lang === "fr"
            ? "La confirmation n a pas pu être envoyée. Réessayez dans un instant."
            : "Your RSVP could not be sent. Please try again in a moment.";
      });
  });

  document.getElementById("lightbox-dismiss").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (event) => {
    const lightbox = document.getElementById("lightbox");

    if (event.key === "Escape") {
      if (!lightbox.hidden) {
        closeLightbox();
      } else if (state.mobileNavOpen) {
        setMobileMenu(false);
        document.getElementById("mobile-menu-toggle").focus();
      }
      return;
    }

    if (!lightbox.hidden && event.key === "Tab") {
      const focusable = lightbox.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

function init() {
  if (PHOTO_OVERRIDES.hero) {
    document.getElementById("hero-photo").src = PHOTO_OVERRIDES.hero;
    document.querySelector(".hero-photo-note").hidden = true;
  }
  setTheme(state.theme);
  applyFeatureFlags();
  applyTranslations();
  bindEvents();
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

init();
