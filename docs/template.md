# Template — flow-template-website ✅ SUR GITHUB

**Repo GitHub :** https://github.com/sabrina33-creator/flow-template-website
**Dossier local :** `C:\Users\User\Desktop\flow-client-template`
**Statut :** "Template repository" activé — bouton "Use this template" disponible

## Stack
React 19 + React Router 7 + react-scripts 5.0.1 (CRA)
`postcss-modules-values` requis comme peer dep (ajouté en package.json)

## Fichier central : `src/tokens.js`
**Seul fichier obligatoire à remplir par client.** Contient : SITE_NAME, SITE_URL, PHONE, WHATSAPP, EMAIL, ADDRESS, CITY, GA4_ID, objet C (couleurs), objet F (polices).

## Architecture composants
| Composant | Source | Description |
|---|---|---|
| `CSSVars.jsx` | original | Injecte tokens.js sur :root via `<style>` — variables CSS utilisables dans App.css |
| `FadeIn.jsx` | Malek | IO + unobserve + prefers-reduced-motion avant attache |
| `Btn.jsx` | Malek | Variantes (primary/whatsapp/ghost/secondary/light/dark) + tracking auto via `loc` prop |
| `StickyCTA.jsx` | Malek | Phone + WhatsApp + env(safe-area-inset-bottom), visible ≤768px |
| `Header.jsx` | Malek | Transparent→opaque, drawer fullscreen mobile sans Framer Motion |
| `Footer.jsx` | Malek | Logo + nav + contact + CTA |
| `FaqItem.jsx` | original | Accordéon avec aria-expanded correct (remplace `<details>` natif) |
| `ScrollProgress.jsx` | Loya | Barre gradient primary→secondary en haut de page |
| `Icons.jsx` | original | SVG inline (WhatsApp, Phone, Mail, Pin, Check, Arrow) |
| `analytics.js` | Malek | trackPageView + trackLead + trackEvent |
| `tokens.js` | Julie | Fichier séparé (pas dans App.js) |

## App.css — conventions de classes utilitaires
- `.sec-p` / `.sec-p-sm` — padding de section responsive
- `.hero-grain` — texture grain SVG feTurbulence sur le hero
- `.flow-card` — hover translateY(-7px) sur les cartes services
- `.flow-card-cta` — hover translateY(-8px) scale(1.02) sur les cartes contact
- `.flow-faq` — hover translateX(4px) sur les items FAQ
- `.flow-imgz` — zoom image au hover
- `.flow-ghost-num` — chiffre fantôme derrière les étapes (text-stroke transparent)
- `.flow-steps-grid` + `.flow-steps-line` — grille 3 colonnes + ligne de connexion
- `.flow-sticky-cta` — affichage du StickyCTA sur mobile (display:none → flex via media query)
- `.fade-in-anim` — animation fadeInUp (utilisée par FadeIn.jsx)

## Variables CSS générées par CSSVars.jsx
`--color-primary` · `--color-secondary` · `--color-dark` · `--color-bg` · `--color-bg-alt`
`--color-white` · `--color-muted` · `--color-border` · `--color-sand`
`--color-primary-30` · `--color-secondary-30` (rgba pré-calculés, compat Safari 9+)
`--font-heading` · `--font-body`

## Commits
- `7c3865d` — init : coquille commune React
- `c956db6` — FAQ + steps + scroll progress + parité Loya vérifiée
- `e2c91f9` — CSS variables (plus aucune couleur codée en dur dans App.css)
- `c9b98df` — remplace color-mix() par rgba pré-calculé (compat Safari < 16.2)

## Usage pour un nouveau client
1. GitHub → "Use this template" → nom du repo client
2. Clone en local
3. Remplir `src/tokens.js` (couleurs, polices, coordonnées, GA4 ID)
4. Remplir `public/index.html` (title, description, OG, JSON-LD, Google Fonts URL)
5. Remplir les pages : `src/pages/HomePage.jsx`, `ServicesPage.jsx`, `ContactPage.jsx`
6. Ajouter logo + photos (public/ et src/)
7. `npm install && npm run build` — vérifier 0 erreur
8. Créer repo Netlify → auto-deploy depuis GitHub
9. Pointer domaine → Netlify
10. `/seo-audit` une fois en ligne

**Temps de setup estimé :** 2-3h au lieu de 6-10h

## Important : indépendance des repos clients
Chaque repo généré via "Use this template" est **totalement indépendant**.
Un bug corrigé dans le template après génération doit être **corrigé manuellement** dans chaque repo client — il n'y a pas de propagation automatique.

---

## Analyse comparative — extraction coquille commune (08/07/2026)

| Composant | Loya | Julie | Malek | Retenu |
|---|---|---|---|---|
| FadeIn | IO basique, pas d'unobserve | aucun (Framer) | IO + unobserve + prefers-reduced-motion | Malek |
| Btn | inline, pas de variantes | inline basique | variantes + tracking auto | Malek |
| Analytics | generate_lead + page_view | whatsapp_click, email_click | trackPageView + trackLead + trackEvent | Malek |
| StickyCTA | présent | absent | 3 boutons + safe-area | Malek |
| Header | drawer Framer Motion | idem | drawer sans Framer | Malek |
| Tokens | dans App.js | fichier séparé | dans App.js | Julie |
| Routing | React Router v6 | React Router v7 | setPage custom | React Router 7 |
| Animations | CSS basique | Framer Motion | CSS IntersectionObserver | Malek |
