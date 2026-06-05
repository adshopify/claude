# La Table des 2 Chefs — Site web

Site web vitrine pour le restaurant **La Table des 2 Chefs**, situé au 31 Cours Mirabeau, 13700 Marignane.

## Structure des fichiers

```
/
├── index.html        # Page principale
├── css/
│   └── style.css     # Styles (mobile-first, responsive)
├── js/
│   └── main.js       # Interactions (nav, menu, formulaire, animations)
└── README.md
```

## Lancer le site

### Option 1 — Ouvrir directement dans le navigateur

Double-cliquez sur `index.html` ou faites glisser le fichier dans votre navigateur.

> Les images Unsplash nécessitent une connexion Internet.

### Option 2 — Serveur local (recommandé)

**Avec Python :**
```bash
# Python 3
python -m http.server 8080
```
Puis ouvrez [http://localhost:8080](http://localhost:8080)

**Avec Node.js (npx) :**
```bash
npx serve .
```

**Avec VS Code :**
Installez l'extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), faites un clic droit sur `index.html` → *Open with Live Server*.

## Fonctionnalités

- **Navigation sticky** avec menu burger sur mobile
- **Animations au scroll** via Intersection Observer
- **Onglets interactifs** pour les sections du menu (entrées / poissons / viandes / desserts)
- **Formulaire de réservation** avec validation native HTML5 et retour visuel
- **Embed Google Maps** pointant vers l'adresse réelle
- **Design responsive** mobile-first (breakpoints 640px et 900px)

## Personnalisation

| Élément | Fichier | Où modifier |
|---|---|---|
| Couleurs | `css/style.css` | Variables CSS `:root` lignes 8–22 |
| Contenu texte | `index.html` | Directement dans le HTML |
| Plats & prix | `index.html` | Sections `#tab-entrees`, `#tab-poissons`, etc. |
| Photos | `index.html` | Attributs `style="background-image: url(…)"` |
| Google Maps | `index.html` | Attribut `src` de l'`<iframe>` dans `#acces` |

## Technologies

- HTML5 sémantique
- CSS3 (custom properties, Grid, Flexbox, animations)
- JavaScript vanilla (ES2020+)
- Google Fonts : Playfair Display + Lato
- Photos : [Unsplash](https://unsplash.com)
