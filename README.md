# SiteWeb_Mariage

Site internet de mariage chrétien pour **Carole & Guy Landry**.

## Contenu

- `index.html` : structure complète du site
- `styles.css` : direction visuelle responsive, mobile-first, bleu ciel et orange brûlé
- `reference-design.css` : adaptation visuelle du modèle fourni (chargée après les styles de base)
- `script.js` : interactions front, compte à rebours, multilingue FR/EN, lightbox, RSVP démo, mode sombre

## Expérience incluse

- Hero romantique et élégant
- Compte à rebours automatique
- Ligne du temps "Notre histoire"
- Programme officiel
- FAQ accordéon
- Dress code
- Formulaire RSVP
- Galerie filtrable avec lightbox
- Témoignages
- Cadeaux et soutien
- Hébergement et voyage
- Contacts utiles et bouton WhatsApp
- Version bilingue français / anglais

## Mise en ligne

Ce livrable peut être déployé sur GitHub Pages, Vercel ou Cloudflare Pages. Le RSVP peut être relié à Google Sheets via le script présent dans `google-apps-script/`.

## Refonte visuelle du 14 octobre 2026

Référence : https://grimage-connect.lovable.app/#rsvp. Couleurs, polices, accueil photo plein écran, navigation fine, programme numéroté, pastilles de couleur, formulaire compact centré, galerie et cartes de témoignages adaptés à Carole et Guy Landry. Les contacts et la connexion Apps Script existants sont conservés. Le calendrier reste celui de la journée complète, accessible depuis chaque carte du programme.

Les visuels du modèle sont provisoires et signalés sur la page. Voir `assets/photos/README.md` pour ajouter les photos réelles. Les témoignages non fournis restent explicitement en attente.

Contrôles locaux : `node --check script.js`, `git diff --check`, puis vérification dans le navigateur de l’accueil, du RSVP, du français/anglais, du thème, du menu mobile et de la lightbox. Ne pas envoyer un RSVP de test au Google Sheet de production pendant un contrôle visuel.
