# Connexion RSVP Google Sheets

Ce dossier contient le script Google Apps Script qui reçoit le formulaire RSVP et ajoute chaque réponse dans une feuille `RSVP`.

## Mise en place

1. Créer une feuille Google Sheets privée pour les organisateurs.
2. Ouvrir **Extensions > Apps Script**.
3. Remplacer le contenu de l éditeur par `Code.gs`.
4. Executer une fois la fonction `setup` et accepter les autorisations Google.
5. Facultatif : dans **Paramètres du projet > Propriétés du script**, ajouter `NOTIFICATION_EMAIL` avec l adresse qui doit recevoir les nouveaux RSVP.
6. Choisir **Deployer > Nouveau déploiement > Application Web**.
7. Executer en tant que propriétaire et autoriser l accès à toute personne.
8. Copier l URL `/exec` du déploiement.

## Sécurité et exploitation

- La feuille ne doit pas être publiée sur Internet. Seuls les organisateurs doivent avoir accès au fichier.
- L URL `/exec` peut recevoir des soumissions, mais elle ne permet pas de lire la feuille.
- Le champ invisible `website` sert de filtre anti-robots basique.
- Ne jamais placer de clé privée ou de mot de passe dans le code du site.
- Après chaque modification du script, créer une nouvelle version du déploiement.

## Branchement du site

L URL `/exec` est configurée dans la constante `RSVP_ENDPOINT` de `script.js`. Le prochain envoi du formulaire sera transmis à Google Sheets.


