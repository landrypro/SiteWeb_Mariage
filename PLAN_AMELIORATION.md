# Plan d amelioration du site de mariage

## Objectif

Publier avant le mariage du 21 novembre 2026 un site fiable, facile a consulter sur mobile et utile aux invites. La version publique doit fournir le programme exact, permettre de confirmer sa presence et donner des moyens de contact utilisables.

**Jalon recommande :** version de test privee le 24 octobre 2026, puis publication apres validation par les maries.

## Perimetre de publication initiale

Les rubriques suivantes sont indispensables pour publier :

- Accueil avec les noms, la date et une photo du couple.
- Programme precis : horaires, lieux, adresses et liens Google Maps.
- RSVP centralise et consulte par les maries.
- Contacts et liens WhatsApp reels.
- FAQ et informations pratiques.

Les rubriques Galerie, Notre histoire, Cadeaux, Temoignages et Hebergement sont facultatives. Elles seront publiees uniquement lorsque leur contenu est reel et valide ; sinon elles seront masquees temporairement.

## Priorites

| Priorite | Chantier | Resultat attendu |
| --- | --- | --- |
| P0 | Contenu utile | Aucun texte "a completer", lien fictif ou information incertaine n apparait sur le site. |
| P0 | RSVP | Chaque reponse est enregistree dans une base centralisee et consultable par les organisateurs. |
| P0 | Contact | Les liens WhatsApp, email et cartes ouvrent les bonnes destinations. |
| P1 | Mobile | Un menu mobile permet d atteindre Programme, RSVP et Contacts sans faire defiler toute la page. |
| P1 | Photos | Les visuels de demonstration sont remplaces par des photos optimisees et autorisees. |
| P2 | Partage et confiance | Carte de partage, mentions de confidentialite et metadonnees sociales sont finalisees. |

## Phase 1 Informations et decisions

**Echeance : 16 octobre 2026**

La fiche de collecte a remplir est disponible dans `FICHE_CONTENU_PHASE_1.md`.

### Informations a fournir par les maries

- [ ] Heure, lieu et adresse du mariage civil, si cette etape est publique.
- [ ] Heure, eglise, adresse et lien Google Maps de la benediction religieuse.
- [ ] Heure, lieu, adresse et lien Google Maps de la reception.
- [ ] Vrais numeros WhatsApp : accueil, transport, urgence et personne responsable du site.
- [ ] E-mail de contact et liens vers les reseaux sociaux, s ils doivent etre affiches.
- [ ] Dress code definitif.
- [ ] Hotels recommandes ou decision de masquer cette rubrique.
- [ ] Photos, textes de l histoire et temoignages dont la publication est autorisee.
- [ ] Decision concernant les cadeaux ou la liste de mariage.

### Travail sur le site

- [ ] Remplacer toutes les donnees de demonstration dans `script.js` et `index.html`.
- [ ] Masquer les sections sans contenu final plutot que d afficher des modeles ou des placeholders.
- [ ] Verifier que le compte a rebours et le fichier calendrier utilisent les horaires officiels de Douala.

## Phase 2 RSVP et gestion des invites

**Echeance : 20 octobre 2026**

Le formulaire actuel enregistre les reponses uniquement dans le navigateur de l invite. Il doit etre relie a une collecte Google Sheets centralisee.

### Solution recommandee

Utiliser Google Sheets avec Google Apps Script. Le dossier `google-apps-script/` contient le script et les instructions de deploiement. La mise en oeuvre comprend :

- [ ] Une feuille `RSVP` avec nom, telephone, email, accompagnants, presence, restrictions alimentaires, message, langue et date de soumission.
- [ ] Une feuille privee : les invites peuvent envoyer une reponse, seuls les organisateurs peuvent lire les reponses.
- [ ] Une vue d administration protegee pour filtrer et exporter la liste en CSV ou Excel.
- [ ] Un message de confirmation conforme a la realite apres l envoi.
- [ ] Une notice de confidentialite concise a cote du formulaire.

## Phase 3 Experience invite

**Echeance : 22 octobre 2026**

- [ ] Ajouter un menu mobile ou un bouton de navigation compact.
- [ ] Remplacer le visuel principal et les cartes de galerie par de vraies photos optimisees pour le Web.
- [ ] Completer FAQ, transports, hotels et contacts avec des informations exploitables.
- [ ] Corriger les liens WhatsApp, email, Instagram et Facebook.
- [ ] Adapter le calendrier a la date, aux horaires et au fuseau reel de la ceremonie.
- [ ] Retirer les annonces excessives du compte a rebours pour les lecteurs d ecran et gerer le focus dans la lightbox.

## Phase 4 Publication et partage

**Echeance : 24 octobre 2026**

- [ ] Choisir le domaine ou l URL publique.
- [ ] Configurer l hebergement et HTTPS.
- [ ] Ajouter une image de partage, `og:image`, l URL canonique et les metadonnees sociales.
- [ ] Ajouter les mentions legales et la politique de confidentialite adaptee au RSVP.
- [ ] Tester le rendu du lien dans WhatsApp et Facebook.

## Phase 5 Recette

**Echeance : 26 octobre 2026**

- [ ] Tester le site sur Android, iPhone et ordinateur.
- [ ] Envoyer un RSVP de test et verifier son arrivee dans l administration.
- [ ] Tester les liens Google Maps, WhatsApp, calendrier et reseaux sociaux.
- [ ] Verifier les versions francaise et anglaise ainsi que le mode sombre.
- [ ] Verifier la navigation clavier, les contrastes et la fermeture de la galerie.
- [ ] Faire relire le site par deux proches jouant le role d invites.

## Criteres de mise en ligne

Le site peut etre publie lorsque tous les criteres suivants sont remplis :

- Les informations essentielles sont exactes et approuvees par les maries.
- Aucune rubrique visible ne contient de contenu fictif ou incomplet.
- Un RSVP de test est bien recu, exportable et accessible aux organisateurs uniquement.
- Les liens de contact, de carte et de partage fonctionnent sur mobile.
- La version mobile est lisible et offre un acces direct au RSVP et aux contacts.

## Suivi

Le responsable du site tient a jour les cases ci dessus et note ici les decisions qui affectent le contenu public :

| Date | Decision | Responsable |
| --- | --- | --- |
| 14 octobre 2026 | Creation de la feuille de route | A definir |

