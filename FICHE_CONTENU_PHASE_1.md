# Fiche de collecte Phase 1

Cette fiche rassemble les informations a valider avant toute mise a jour publique du site. Une fois completee, les donnees seront integrees dans le programme, les contacts, les cartes et le RSVP.

**Regle de validation :** ne rien publier tant que la personne responsable n a pas confirme que l information est exacte et publiable.

## 1 Identite du mariage

| Champ | Valeur a confirmer | Responsable | Statut |
| --- | --- | --- | --- |
| Prenoms affiches | Carole et Guy Landry | Maries | Renseigne |
| Date principale | 21 novembre 2026 | Maries | Renseigne |
| Ville et pays | Douala Cameroun | Maries | Renseigne |
| Ton du site | Chretien elegant bleu ciel et orange brule | Maries | Renseigne |
| Langues publiees | Francais et anglais | Maries | Renseigne |

## 2 Programme officiel

Completer une ligne par evenement rendu public. Si le mariage civil n est pas ouvert aux invites, indiquer **ne pas afficher**.

| Evenement | Date | Arrivee invites | Debut | Fin estimee | Nom du lieu | Adresse complete | Lien Google Maps | Afficher |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mariage civil | 21 novembre 2026 |  |  |  |  |  |  | A decider |
| Benediction religieuse | 21 novembre 2026 |  |  |  |  |  |  | Oui |
| Reception ou cocktail | 21 novembre 2026 |  |  |  |  |  |  | Oui |
| Autre evenement |  |  |  |  |  |  |  | Oui Non |

### Decision calendrier

- [x] Un seul evenement calendrier doit etre telecharge : journee complete.
- [ ] Un calendrier distinct doit etre disponible pour chaque evenement public.
- [x] Heure de debut retenue pour le compte a rebours : 10 h.
- [x] Fuseau retenu : Douala Cameroun UTC plus 1.

## 3 Contacts et assistance

Les numeros doivent etre ecrits avec l indicatif international, sans espace, pour les liens WhatsApp. Exemple : `2376XXXXXXXX`.

| Usage affiche | Nom public | Telephone WhatsApp | Email si necessaire | Disponible jusqu au | Autorisation de publication |
| --- | --- | --- | --- | --- | --- |
| Contact principal |  | 237696475797 |  |  | Oui |
| Responsable accueil |  | 237696475797 |  |  | Oui |
| Responsable transport |  | 237698495751 |  |  | Oui |
| Urgence jour J |  |  |  |  | A confirmer |

### Liens publics

| Lien | URL ou identifiant exact | Afficher |
| --- | --- | --- |
| Instagram |  | Oui Non |
| Facebook |  | Oui Non |
| Email de contact |  | Oui Non |
| Liste de mariage ou cadeaux |  | Oui Non |

## 4 Informations pour les invites

| Sujet | Texte final ou lien | Afficher |
| --- | --- | --- |
| Dress code |  | Oui Non |
| Enfants |  | Oui Non |
| Accompagnants |  | Oui Non |
| Date limite RSVP |  | Oui Non |
| Transport ou navette |  | Oui Non |
| Stationnement |  | Oui Non |
| Hotels recommandes |  | Oui Non |
| Cadeaux |  | Oui Non |

## 5 Hotels et deplacements

Completer cette section uniquement si les recommandations ont ete verifiees par les maries ou l organisateur.

| Hotel | Quartier ou adresse | Telephone ou site | Distance ou duree vers le lieu | Tarif indicatif facultatif | Lien de reservation | Afficher |
| --- | --- | --- | --- | --- | --- | --- |
| Hotel 1 |  |  |  |  |  | Oui Non |
| Hotel 2 |  |  |  |  |  | Oui Non |
| Hotel 3 |  |  |  |  |  | Oui Non |

## 6 Photos et contenus personnels

### Photo principale

- [ ] Une photo horizontale de bonne qualite est retenue pour la page d accueil.
- [ ] Le couple autorise sa publication publique.
- [ ] Le fichier source est disponible et peut etre optimise pour le Web.

### Galerie

| Photo ou serie | Description courte | Personnes identifiables | Autorisation recueillie | Fichier disponible |
| --- | --- | --- | --- | --- |
| Photo principale |  | Oui Non | Oui Non | Oui Non |
| Rencontre |  | Oui Non | Oui Non | Oui Non |
| Fiancailles |  | Oui Non | Oui Non | Oui Non |
| Preparatifs |  | Oui Non | Oui Non | Oui Non |
| Portrait du couple |  | Oui Non | Oui Non | Oui Non |

### Textes

| Contenu | Texte final ou source | Validation |
| --- | --- | --- |
| Notre histoire courte |  | Oui Non |
| Etapes de la relation |  | Oui Non |
| Temoignage 1 |  | Oui Non |
| Temoignage 2 |  | Oui Non |
| Message de remerciement |  | Oui Non |

## 7 Decisions de publication

| Decision | Choix retenu | Responsable | Date de validation |
| --- | --- | --- | --- |
| Afficher le mariage civil |  |  |  |
| Afficher les cadeaux |  |  |  |
| Afficher les hotels |  |  |  |
| Afficher les temoignages |  |  |  |
| Afficher la galerie avant le mariage |  |  |  |
| Afficher les reseaux sociaux |  |  |  |
| Publier la version anglaise |  |  |  |
| Date de mise en ligne |  |  |  |

## 8 Validation finale de Phase 1

- [ ] Les noms, la date et la ville sont confirmes.
- [ ] Chaque evenement public a un horaire, une adresse et une carte valides.
- [ ] Chaque contact public a donne son accord et un numero utilisable.
- [ ] Aucun contenu incomplet ne sera laisse visible.
- [ ] Les photos et temoignages ont une autorisation de publication.
- [ ] Les decisions de publication ont ete signees ou confirmees par les maries.

## Emplacements a mettre a jour dans le projet

| Donnee collectee | Emplacement technique |
| --- | --- |
| Programme et liens Google Maps | `script.js`, tableau `events` |
| Hotels et contacts | `script.js`, tableaux `hotels` et `contacts` |
| WhatsApp principal, transport et urgence | `index.html` et `script.js` |
| Email et reseaux sociaux | `index.html`, pied de page |
| Photo de couverture | `hero-portrait.svg` a remplacer par un visuel final |
| Galerie et temoignages | `script.js`, tableaux `galleryItems` et `testimonials` |
| FAQ et dress code | `script.js`, objets `faqs` et `copy` |
