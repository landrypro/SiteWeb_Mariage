const state = {
  lang: localStorage.getItem("gg-lang") || "fr",
  theme:
    localStorage.getItem("gg-theme-user-set") === "true"
      ? localStorage.getItem("gg-theme") || "light"
      : "light",
  galleryFilter: "all",
  testimonialIndex: 0,
  enabledSections: {
    gifts: true,
  },
};

const copy = {
  fr: {
    brandSubtitle: "07 Novembre 2026 • Douala",
    navHome: "Accueil",
    navStory: "Notre histoire",
    navProgram: "Programme",
    navRsvp: "RSVP",
    navContacts: "Contacts",
    ctaRsvp: "Confirmer ma présence",
    ctaProgram: "Voir le programme",
    whatsappFloating: "Assistance WhatsApp",
    floatingRsvp: "RSVP",
    themeToggle: "Activer le mode sombre",
    heroKicker: "Mariage chrétien",
    heroSubtitle: "Nous célébrons notre union devant Dieu, nos familles et nos amis.",
    heroDate: "07 Novembre 2026 — Douala, Cameroun",
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
    storyTitle: "Un chemin de foi, d’amitié et d’amour",
    storyIntro:
      "Cette frise a été pensée pour accueillir vos souvenirs clés. Chaque bloc est facilement modifiable pour intégrer les vrais textes du couple.",
    storyPlaceholder: "Texte modifiable : ajoutez ici votre récit, les détails marquants ou une anecdote mémorable.",
    storyEditable: "Zone éditable",
    programEyebrow: "Programme officiel",
    programTitle: "Les temps forts de notre célébration",
    programIntro:
      "Les horaires et adresses peuvent être affinés au fur et à mesure. Les cartes ci-dessous sont prêtes pour les mises à jour finales.",
    calendarButton: "Ajouter au calendrier",
    programMap: "Voir sur Google Maps",
    programStatus: "À compléter",
    faqEyebrow: "Informations importantes",
    faqTitle: "Questions fréquentes",
    faqIntro:
      "Une FAQ claire aide les invités à trouver rapidement les réponses essentielles avant le jour J.",
    dressEyebrow: "Dress code",
    dressTitle: "Une élégance douce, lumineuse et harmonieuse",
    dressIntro:
      "Nous vous invitons à vous habiller avec élégance dans des tons doux et chaleureux, en harmonie avec notre thème.",
    dressSky: "Bleu ciel",
    dressBurnt: "Orange brûlé",
    dressIvory: "Blanc cassé",
    dressNeutral: "Beige et tons neutres",
    rsvpEyebrow: "RSVP",
    rsvpTitle: "Confirmez votre présence avec simplicité",
    rsvpIntro:
      "Ce formulaire est conçu pour une future connexion à Supabase ou Firebase. Dans cette démo, la soumission est simulée localement afin de valider l’expérience utilisateur.",
    rsvpFeatureOneTitle: "Pensé pour l’administration",
    rsvpFeatureOneText: "Stockage en base, export CSV/Excel et suivi des invités par foyer.",
    rsvpFeatureTwoTitle: "Parcours mobile fluide",
    rsvpFeatureTwoText:
      "Grandes zones de saisie, confirmation claire et lecture facile sur smartphone.",
    formName: "Nom complet",
    formPhone: "Téléphone",
    formEmail: "Email",
    formGuests: "Nombre d’accompagnants",
    formAttendance: "Confirmation de présence",
    formDiet: "Restrictions alimentaires",
    formMessage: "Message aux mariés",
    formNamePlaceholder: "Ex. Marie Ntone",
    formPhonePlaceholder: "Ex. +237 6 00 00 00 00",
    formEmailPlaceholder: "Ex. marie@example.com",
    formDietPlaceholder: "Allergies, régime particulier, préférences...",
    formMessagePlaceholder: "Laissez un mot d’encouragement ou de bénédiction...",
    attendanceYes: "Oui, avec joie",
    attendanceMaybe: "Je confirme bientôt",
    attendanceNo: "Je ne pourrai pas être présent",
    formSubmit: "Envoyer ma confirmation",
    formSuccess: "Merci pour votre confirmation. Nous avons hâte de célébrer ce moment avec vous.",
    galleryEyebrow: "Galerie photos",
    galleryTitle: "Souvenirs, préparatifs et moments précieux",
    galleryIntro:
      "La structure ci-dessous supporte des catégories, une grille responsive et une lightbox élégante pour la consultation des images.",
    filterAll: "Tout voir",
    testimonialsEyebrow: "Témoignages",
    testimonialsTitle: "Des paroles de bénédiction autour de nous",
    testimonialsIntro:
      "Parents, témoins, amis proches et pasteur peuvent partager ici leurs mots d’amour et de foi.",
    testimonialPrev: "Témoignage précédent",
    testimonialNext: "Témoignage suivant",
    giftEyebrow: "Cadeaux et soutien",
    giftTitle: "Votre présence est le plus beau des cadeaux",
    giftIntro:
      "Cette section peut être activée ou désactivée depuis l’administration selon les souhaits du couple.",
    giftOptionOneTag: "Option 1",
    giftOptionOneTitle: "Liste de mariage",
    giftOptionOneText:
      "Intégration d’une liste de cadeaux avec lien vers une plateforme dédiée ou une liste interne.",
    giftOptionTwoTag: "Option 2",
    giftOptionTwoTitle: "Soutien libre",
    giftOptionTwoText:
      "Possibilité d’ajouter un texte d’accompagnement, des coordonnées bancaires ou un QR code sécurisé.",
    travelEyebrow: "Hébergement & voyage",
    travelTitle: "Accueillir au mieux les invités venant de l’extérieur",
    travelIntro:
      "Hôtels, transports, carte et assistance WhatsApp peuvent être regroupés dans cette section pratique.",
    travelMapTag: "Carte interactive",
    travelMapTitle: "Repérer rapidement les lieux clés",
    travelMapText:
      "Ajoutez ici Google Maps ou une carte embarquée avec l’église, la mairie, le lieu du cocktail et les hôtels recommandés.",
    travelMapButton: "Ouvrir Google Maps",
    travelTipsTitle: "Conseils transport",
    travelWhatsappButton: "Demander de l’aide sur WhatsApp",
    contactsEyebrow: "Contacts utiles",
    contactsTitle: "Le bon contact au bon moment",
    contactsIntro:
      "Une présentation claire des responsables rassure les invités et fluidifie l’organisation le jour J.",
    emergencyTitle: "Urgence jour J",
    emergencyText: "Téléphone : à compléter",
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
    calendarDownloaded: "Le fichier calendrier a été généré.",
  },
  en: {
    brandSubtitle: "November 7, 2026 • Douala",
    navHome: "Home",
    navStory: "Our story",
    navProgram: "Schedule",
    navRsvp: "RSVP",
    navContacts: "Contacts",
    ctaRsvp: "Confirm attendance",
    ctaProgram: "View schedule",
    whatsappFloating: "WhatsApp help",
    floatingRsvp: "RSVP",
    themeToggle: "Enable dark mode",
    heroKicker: "Christian wedding",
    heroSubtitle: "We celebrate our union before God, our families, and our friends.",
    heroDate: "November 7, 2026 — Douala, Cameroon",
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
    storyTitle: "A journey of faith, friendship, and love",
    storyIntro:
      "This timeline is designed to host your key memories. Every block is easy to edit with the couple's real story.",
    storyPlaceholder: "Editable text: add your story, meaningful details, or a memorable anecdote here.",
    storyEditable: "Editable copy",
    programEyebrow: "Official schedule",
    programTitle: "Highlights of our celebration",
    programIntro:
      "Times and addresses can be refined over time. The cards below are ready for final updates.",
    calendarButton: "Add to calendar",
    programMap: "Open in Google Maps",
    programStatus: "To be confirmed",
    faqEyebrow: "Important information",
    faqTitle: "Frequently asked questions",
    faqIntro:
      "A clear FAQ helps guests find essential answers quickly before the wedding day.",
    dressEyebrow: "Dress code",
    dressTitle: "Soft, luminous, and harmonious elegance",
    dressIntro:
      "We invite you to dress elegantly in soft, warm tones that match our wedding theme.",
    dressSky: "Sky blue",
    dressBurnt: "Burnt orange",
    dressIvory: "Off-white",
    dressNeutral: "Beige and neutral tones",
    rsvpEyebrow: "RSVP",
    rsvpTitle: "Confirm your attendance with ease",
    rsvpIntro:
      "This form is designed for a future Supabase or Firebase connection. In this demo, submissions are simulated locally to validate the guest experience.",
    rsvpFeatureOneTitle: "Built for administration",
    rsvpFeatureOneText: "Database storage, CSV/Excel export, and guest management by household.",
    rsvpFeatureTwoTitle: "Smooth mobile flow",
    rsvpFeatureTwoText:
      "Large input zones, clear confirmation, and comfortable reading on smartphones.",
    formName: "Full name",
    formPhone: "Phone number",
    formEmail: "Email",
    formGuests: "Number of guests",
    formAttendance: "Attendance confirmation",
    formDiet: "Dietary restrictions",
    formMessage: "Message to the couple",
    formNamePlaceholder: "Example: Marie Ntone",
    formPhonePlaceholder: "Example: +237 6 00 00 00 00",
    formEmailPlaceholder: "Example: marie@example.com",
    formDietPlaceholder: "Allergies, special diet, preferences...",
    formMessagePlaceholder: "Leave a blessing or a heartfelt note...",
    attendanceYes: "Yes, joyfully",
    attendanceMaybe: "I will confirm soon",
    attendanceNo: "I will not be able to attend",
    formSubmit: "Send my RSVP",
    formSuccess: "Thank you for your confirmation. We look forward to celebrating with you.",
    galleryEyebrow: "Photo gallery",
    galleryTitle: "Memories, preparations, and cherished moments",
    galleryIntro:
      "The layout below supports categories, a responsive grid, and an elegant lightbox for browsing photos.",
    filterAll: "View all",
    testimonialsEyebrow: "Testimonials",
    testimonialsTitle: "Words of blessing around us",
    testimonialsIntro:
      "Parents, witnesses, close friends, and the pastor can share their words of love and faith here.",
    testimonialPrev: "Previous testimonial",
    testimonialNext: "Next testimonial",
    giftEyebrow: "Gifts and support",
    giftTitle: "Your presence is the greatest gift",
    giftIntro:
      "This section can be enabled or disabled from the admin area depending on the couple's wishes.",
    giftOptionOneTag: "Option 1",
    giftOptionOneTitle: "Wedding registry",
    giftOptionOneText:
      "Integrate a gift list linked to a dedicated platform or an internal registry page.",
    giftOptionTwoTag: "Option 2",
    giftOptionTwoTitle: "Free support",
    giftOptionTwoText:
      "You can add a support note, bank details, or a secure QR code if desired.",
    travelEyebrow: "Travel & stay",
    travelTitle: "Welcoming out-of-town guests with care",
    travelIntro:
      "Hotels, transport guidance, a map, and WhatsApp assistance can all live in this practical section.",
    travelMapTag: "Interactive map",
    travelMapTitle: "Quickly locate key places",
    travelMapText:
      "Add Google Maps or an embedded map with the church, city hall, cocktail venue, and recommended hotels.",
    travelMapButton: "Open Google Maps",
    travelTipsTitle: "Transport tips",
    travelWhatsappButton: "Ask for help on WhatsApp",
    contactsEyebrow: "Helpful contacts",
    contactsTitle: "The right contact at the right time",
    contactsIntro:
      "A clear presentation of key coordinators reassures guests and keeps the day running smoothly.",
    emergencyTitle: "Wedding day emergency",
    emergencyText: "Phone number: to be completed",
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
    calendarDownloaded: "The calendar file has been generated.",
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
    date: { fr: "Date : à compléter", en: "Date: to be completed" },
    time: { fr: "Heure : à compléter", en: "Time: to be completed" },
    venue: { fr: "Lieu : Mairie de Douala / à confirmer", en: "Venue: Douala City Hall / to be confirmed" },
    address: { fr: "Adresse : à compléter", en: "Address: to be completed" },
    notes: {
      fr: "Première étape officielle de notre engagement civil, dans la joie et la simplicité.",
      en: "The official civil step of our union, celebrated with joy and simplicity.",
    },
    maps: "https://maps.google.com/?q=Mairie+de+Douala",
  },
  {
    title: { fr: "Bénédiction religieuse", en: "Religious blessing" },
    date: { fr: "Date : 07 Novembre 2026", en: "Date: November 7, 2026" },
    time: { fr: "Heure : à compléter", en: "Time: to be completed" },
    venue: { fr: "Église : à compléter", en: "Church: to be completed" },
    address: { fr: "Adresse : à compléter", en: "Address: to be completed" },
    notes: {
      fr: "Le cœur spirituel de cette journée, vécu dans la reconnaissance envers Dieu.",
      en: "The spiritual heart of the day, lived in gratitude before God.",
    },
    maps: "https://maps.google.com/?q=Douala+Cameroun",
  },
  {
    title: { fr: "Cocktail de célébration", en: "Celebration cocktail" },
    date: { fr: "Date : 07 Novembre 2026", en: "Date: November 7, 2026" },
    time: { fr: "Heure : à compléter", en: "Time: to be completed" },
    venue: { fr: "Lieu : à compléter", en: "Venue: to be completed" },
    address: { fr: "Adresse : à compléter", en: "Address: to be completed" },
    notes: {
      fr: "Un temps convivial pour partager un repas, des sourires et de belles photos en famille.",
      en: "A warm gathering to share food, smiles, and joyful family memories.",
    },
    maps: "https://maps.google.com/?q=Douala+Cameroun",
  },
];

const faqs = [
  {
    q: {
      fr: "Comment se rendre sur place ?",
      en: "How do I get there?",
    },
    a: {
      fr: "Ajoutez ici les indications routières, les quartiers concernés et un lien direct vers Google Maps ou WhatsApp.",
      en: "Add driving directions, neighborhood details, and a direct Google Maps or WhatsApp link here.",
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
    title: { fr: "Premiers regards", en: "First glances" },
    description: {
      fr: "Une vignette idéale pour raconter le tout premier chapitre de votre rencontre.",
      en: "A perfect tile to tell the very first chapter of your meeting.",
    },
    colors: ["#A7D8F0", "#F6F0E8", "#C96A3A"],
  },
  {
    category: "meeting",
    title: { fr: "Souvenir fondateur", en: "Foundational memory" },
    description: {
      fr: "Utilisez cet emplacement pour une photo prise au début de l’amitié ou de la relation.",
      en: "Use this slot for a photo from the beginning of the friendship or relationship.",
    },
    colors: ["#C96A3A", "#EACAB8", "#A7D8F0"],
  },
  {
    category: "engagement",
    title: { fr: "La promesse", en: "The promise" },
    description: {
      fr: "Une image des fiançailles, de la bague ou d’un moment de prière en couple.",
      en: "An engagement image, ring detail, or a shared prayer moment.",
    },
    colors: ["#D8C7B8", "#A7D8F0", "#C96A3A"],
  },
  {
    category: "engagement",
    title: { fr: "Joie partagée", en: "Shared joy" },
    description: {
      fr: "Mettez ici un souvenir entouré de proches ou un cliché officiel des fiançailles.",
      en: "Place a family moment or an official engagement portrait here.",
    },
    colors: ["#F6F0E8", "#C96A3A", "#A7D8F0"],
  },
  {
    category: "preparation",
    title: { fr: "Préparatifs doux", en: "Gentle preparations" },
    description: {
      fr: "Ajoutez les coulisses : essais, décor, papeterie, répétitions ou rendez-vous clés.",
      en: "Add backstage moments: fittings, decor, stationery, rehearsals, or key appointments.",
    },
    colors: ["#A7D8F0", "#D8C7B8", "#FFFFFF"],
  },
  {
    category: "preparation",
    title: { fr: "Détails du jour J", en: "Wedding day details" },
    description: {
      fr: "Parfait pour montrer des accessoires, bouquets, tenues ou éléments liturgiques.",
      en: "Perfect for accessories, bouquets, outfits, or liturgical details.",
    },
    colors: ["#C96A3A", "#FFF3E8", "#E6F4FB"],
  },
  {
    category: "couple",
    title: { fr: "Portrait officiel", en: "Official portrait" },
    description: {
      fr: "Une grande photo du couple pour porter l’identité visuelle du site.",
      en: "A strong portrait of the couple to anchor the site's visual identity.",
    },
    colors: ["#A7D8F0", "#E8B9A3", "#FFF7F2"],
  },
  {
    category: "couple",
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
    title: { fr: "Wedding Planner", en: "Wedding Planner" },
    name: { fr: "Nom : à compléter", en: "Name: to be completed" },
    phone: { fr: "Téléphone : à compléter", en: "Phone: to be completed" },
  },
  {
    title: { fr: "Responsable accueil", en: "Welcome coordinator" },
    name: { fr: "Nom : à compléter", en: "Name: to be completed" },
    phone: { fr: "Téléphone : à compléter", en: "Phone: to be completed" },
  },
  {
    title: { fr: "Responsable transport", en: "Transport coordinator" },
    name: { fr: "Nom : à compléter", en: "Name: to be completed" },
    phone: { fr: "Téléphone : à compléter", en: "Phone: to be completed" },
  },
  {
    title: { fr: "Urgence jour J", en: "Wedding day emergency" },
    name: { fr: "Nom : équipe mariage", en: "Name: wedding team" },
    phone: { fr: "Téléphone : à compléter", en: "Phone: to be completed" },
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
  localStorage.setItem("gg-theme-user-set", "true");
  const nextActionLabel = theme === "dark" ? t("modeLightLabel") : t("modeDarkLabel");
  document.getElementById("theme-toggle-label").textContent = nextActionLabel;
  document.getElementById("theme-toggle").setAttribute("aria-label", nextActionLabel);
}

function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

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
          <p>${t("storyPlaceholder")}</p>
        </article>
      `,
    )
    .join("");
}

function renderProgram() {
  const root = document.getElementById("program-grid");
  root.innerHTML = events
    .map(
      (event) => `
        <article class="program-card">
          <span class="card-tag">${t("programStatus")}</span>
          <h3>${localized(event.title)}</h3>
          <p>${localized(event.notes)}</p>
          <div class="program-meta">
            <span>${localized(event.date)}</span>
            <span>${localized(event.time)}</span>
            <span>${localized(event.venue)}</span>
            <span>${localized(event.address)}</span>
          </div>
          <div class="program-actions">
            <a class="button button-secondary" href="${event.maps}" target="_blank" rel="noreferrer">${t("programMap")}</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFaq() {
  const root = document.getElementById("faq-list");
  root.innerHTML = faqs
    .map(
      (item, index) => `
        <details class="faq-item" ${index === 0 ? "open" : ""}>
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
        <button class="filter-chip ${category.key === state.galleryFilter ? "active" : ""}" type="button" data-filter="${category.key}">
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
  const items =
    state.galleryFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === state.galleryFilter);

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
        >
          <div class="gallery-preview" style="background:${gradientFrom(item.colors)}"></div>
          <span class="card-tag">${categoryLabel}</span>
          <h3>${localized(item.title)}</h3>
          <p>${localized(item.description)}</p>
        </button>
      `;
    })
    .join("");

  root.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      openLightbox(items[Number(button.dataset.galleryIndex)]);
    });
  });
}

function renderTestimonial() {
  const testimonial = testimonials[state.testimonialIndex];
  const root = document.getElementById("testimonial-card");

  root.innerHTML = `
    <div class="testimonial-header">
      <div class="avatar" aria-hidden="true">${testimonial.initials}</div>
      <div class="testimonial-copy">
        <h3>${localized(testimonial.name)}</h3>
        <span class="testimonial-role">${localized(testimonial.role)}</span>
      </div>
    </div>
    <div class="testimonial-copy">
      <p>${localized(testimonial.message)}</p>
    </div>
  `;
}

function renderHotels() {
  const root = document.getElementById("hotel-grid");
  root.innerHTML = hotels
    .map(
      (hotel) => `
        <article class="hotel-card">
          <span class="card-tag">Stay</span>
          <h3>${localized(hotel.title)}</h3>
          <div class="hotel-meta">
            <span>${localized(hotel.distance)}</span>
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
          <h3>${localized(contact.title)}</h3>
          <div class="contact-meta">
            <span>${localized(contact.name)}</span>
            <span>${localized(contact.phone)}</span>
          </div>
          <a href="https://wa.me/237600000000" target="_blank" rel="noreferrer">WhatsApp</a>
        </article>
      `,
    )
    .join("");
}

function updateCountdown() {
  const weddingDate = new Date("2026-11-07T10:00:00+01:00").getTime();
  const now = Date.now();
  const diff = Math.max(weddingDate - now, 0);

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / hour);
  const minutes = Math.floor((diff % hour) / minute);
  const seconds = Math.floor((diff % minute) / 1000);

  document.getElementById("days").textContent = String(days).padStart(3, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

function createCalendarFile() {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Gregoire Gregorine//Mariage//FR",
    "BEGIN:VEVENT",
    "UID:gregoire-gregorine-20261107@example.com",
    "DTSTAMP:20260620T000000Z",
    "DTSTART:20261107T090000",
    "DTEND:20261107T180000",
    "SUMMARY:Mariage de Grégoire & Gregorine",
    "LOCATION:Douala, Cameroun",
    "DESCRIPTION:Programme à préciser : mariage civil, bénédiction religieuse et cocktail de célébration.",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "gregoire-gregorine-mariage.ics";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function openLightbox(item) {
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightbox-media").style.background = gradientFrom(item.colors);
  document.getElementById("lightbox-category").textContent = localized(
    galleryCategories.find((category) => category.key === item.category)?.label,
  );
  document.getElementById("lightbox-title").textContent = localized(item.title);
  document.getElementById("lightbox-description").textContent = localized(item.description);
  lightbox.hidden = false;
}

function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
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
    const existing = JSON.parse(localStorage.getItem("gg-rsvp-demo") || "[]");
    existing.push(payload);
    localStorage.setItem("gg-rsvp-demo", JSON.stringify(existing));
    form.reset();
    form.querySelector('input[name="guests"]').value = "0";
    document.getElementById("form-status").textContent = t("formSuccess");
  });

  document.getElementById("lightbox-dismiss").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

function init() {
  setTheme(state.theme);
  applyFeatureFlags();
  applyTranslations();
  bindEvents();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  setInterval(() => {
    state.testimonialIndex = (state.testimonialIndex + 1) % testimonials.length;
    renderTestimonial();
  }, 6000);
}

init();
