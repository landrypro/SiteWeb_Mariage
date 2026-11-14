# Dépôt des photos des invités

Projet Apps Script **séparé du RSVP**. La page `photos/` du site et le QR code unique mènent les invités vers ce formulaire. Les images sont enregistrées dans un dossier privé du Google Drive de `guykongne@gmail.com`.

## Déploiement

1. Le projet [Photos mariage Carole et Guy Landry](https://script.google.com/home/projects/1Py3eFtzCyzFji12XOiVMiAYsg3-I1339XozvJMwBm0EJqYsM8akcz2Qe/edit) est déjà créé sous **guykongne@gmail.com**, séparément du RSVP. `Code.gs` et `Index.html` y sont enregistrés.
2. Le [dossier privé de réception](https://drive.google.com/drive/folders/1SWYi7nahtPTBMVwgf1i82vwTtQNduiAt) est déjà créé dans le Drive de Guy. Dans les paramètres du projet Apps Script, les propriétés `PHOTO_FOLDER_ID` et `PHOTO_UPLOADS_OPEN` valent respectivement `1SWYi7nahtPTBMVwgf1i82vwTtQNduiAt` et `false`.
3. L'[application Web](https://script.google.com/macros/s/AKfycbwCtVsLhYl6bIFxTz2N6B8Yq2VALUUWvrq_D35lT-u8R0bpCIFT4pcuxpiw0qyiXISWyg/exec) est déployée en version 1, exécutée en tant que Guy et accessible à tout le monde. Guy a autorisé ce projet à accéder à son Drive. Les dépôts restent fermés via `PHOTO_UPLOADS_OPEN=false`.
4. L'URL `/exec` est renseignée dans `photos/config.js`. Publier le site, puis tester la page `https://caroleguypourlavie.gaiusconsulting.online/photos/` sur iPhone et Android.
5. Pour un essai, définir la propriété `PHOTO_UPLOADS_OPEN` à `true` dans les paramètres du projet. Envoyer une photo, vérifier qu'elle se trouve dans le dossier privé, puis remettre la propriété à `false` jusqu'au début de la collecte.

Les fonctions se terminant par `_` ne sont pas appelables depuis la page publique et ne figurent pas dans le sélecteur d'exécution de l'éditeur. L'ouverture et la fermeture se font par la propriété `PHOTO_UPLOADS_OPEN`. La page d'envoi utilise `google.script.run` pour obtenir un résultat réel de Drive; elle n'utilise pas le `no-cors` du RSVP.

## Exploitation

- Le QR code universel est `assets/photo-upload-qr.svg` (impression) ou `.png`. Son URL encodée est `https://caroleguypourlavie.gaiusconsulting.online/photos/`. Tester un tirage imprimé avant d'en produire pour toutes les tables.
- L'interface accepte jusqu'à cinq images à la fois et 10 Mo par image. Les fichiers sont envoyés séparément; les échecs peuvent être réessayés sans renvoyer les fichiers déjà confirmés. Le serveur vérifie le format réel des images et la taille.
- Les fichiers sont privés, ne sont pas ajoutés automatiquement à la galerie du site et ne doivent jamais être rendus accessibles avec un lien public vers le dossier.
- Le lien public peut être partagé. Surveiller l'espace Drive et les exécutions du projet pendant l'événement. Apps Script applique des quotas et peut refuser les envois en cas de forte affluence; tester plusieurs téléphones en parallèle avant le mariage.
- Pour fermer les dépôts, remettre `PHOTO_UPLOADS_OPEN` à `false` dans les paramètres du projet. La page reste accessible, mais refuse alors tout nouvel envoi.
- Après une modification du script, créer une nouvelle version du déploiement Web et revérifier l'URL `/exec`.

## Vérification avant ouverture

- L'URL `/exec` est configurée dans `photos/config.js` et la page affiche le bouton de dépôt.
- Les images JPEG, PNG, WebP, HEIC et AVIF de petite et grande taille sont testées sur de vrais téléphones. Une image de plus de 10 Mo et un faux fichier image sont refusés.
- Chaque photo confirmée apparaît dans le dossier Drive privé. Les erreurs de réseau affichent « Échec — réessayer » et ne sont pas annoncées comme une réussite.
- Le QR code imprimé ouvre la même page que le lien « Partager vos photos » du menu mobile et du menu de bureau.

**Ne pas annoncer le dépôt comme opérationnel avant un test de bout en bout avec le compte de Guy.**
