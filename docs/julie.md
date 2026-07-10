# PROJET 3 — By Julie Déco ✅ LIVE

**Site :** byjuliedeco.com
**Stack :** React 19.2.5 · React Router 7.17.0 · Framer Motion 12.40.0 · tokens.js · analytics.js
**Repo :** sabrina33-creator/... (voir dossier projet Julie)
**Hébergement :** Netlify auto-deploy
**GA4 :** G-RBFV04NW4D

## Identité

**Couleurs :** or `#C9A84C` · noir `#0a0a0a` · blanc `#fff`
**Fonts :** Cormorant Garamond (titres — ⚠️ blacklisté mais dans logo SVG) + Jost (corps) + DM Sans (UI — ⚠️ blacklisté mais dans logo SVG)

**Contact :** ⚠️ WhatsApp toujours à +33600000000 (placeholder) — à remplacer quand Julie donne son vrai numéro dans App.js + JDDecoHome.jsx + JDDecoServices.jsx

**GMB :** ✅ active — CID à ajouter dans le JSON-LD sameAs

## Architecture fichiers
- `App.js` + `JDDecoHome.jsx` + `JDDecoServices.jsx` + `tokens.js` + `analytics.js`
- 3 pages : / · /prestations · /contact
- Galerie avant/après : 4 projets (SDB + Cuisine ×3)

## GA4 événements
`whatsapp_click` · `email_click` · `page_view` · `cta_clicked`

## Commits clés (audit 08/07/2026)
- `b41228b` — sitemap byjuliedeco.com, robots.txt, llms.txt corrigés, main id, og:image, BreadcrumbList

## Ce qui manque (priorités post-audit 08/07/2026)
- 🔴 Vrai numéro WhatsApp (placeholder +33600000000 dans 3 fichiers)
- 🟡 JSON-LD HowTo (absent)
- 🟡 JSON-LD telephone (absent)
- 🟡 JSON-LD sameAs GMB (fiche active mais pas liée)
- 🟡 Sticky CTA mobile (absent)
- 🟡 focus-visible non défini explicitement
- 🟡 Section témoignages (dès 5 avis GMB)
- 🟡 Photos GMB (via business.google.com)
- 🟡 Q&A Google Maps

## Points forts vs Loya
- Framer Motion : Ken Burns hero, titre animé mot par mot, ligne or scaleX 0→1
- Galerie avant/après interactive
- JSON-LD services avec prix (150€ / 250€ / 490€)
- BreadcrumbList page Contact
- tokens.js séparé (meilleure architecture)
