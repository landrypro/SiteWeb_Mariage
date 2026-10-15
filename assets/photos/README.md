# Emplacements photos

Ajouter ici les photos finales du mariage, puis renseigner `PHOTO_OVERRIDES` au début de `script.js` :

```js
const PHOTO_OVERRIDES = {
  hero: "assets/photos/hero.jpg",
  gallery: {
    "assets/photos/gallery-meeting-01.jpg": "assets/photos/gallery-meeting-01.jpg",
    // Ajouter les autres images de la même façon.
  },
};
```

Emplacements utilisés par la nouvelle présentation :

- `hero.jpg` : couverture horizontale, idéalement 1600 x 1100 px.
- `gallery-meeting-01.jpg` : rencontre.
- `gallery-engagement-01.jpg` : fiançailles.
- `gallery-preparation-01.jpg` et `gallery-preparation-02.jpg` : préparatifs.
- `gallery-couple-01.jpg` et `gallery-couple-02.jpg` : portraits du couple.

Formats recommandés : JPG ou WebP, largeur de 1200 à 2000 px, poids inférieur à 500 Ko par image. Vérifier l’autorisation de publication avant de les ajouter.

Les emplacements non configurés utilisent les photos d’illustration du modèle dans `assets/reference/`. Elles sont signalées comme provisoires dans la page et la lightbox. Le signalement disparaît pour la couverture dès qu’elle est configurée et pour la galerie lorsque ses six images sont configurées.
