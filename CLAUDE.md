# Projet Essaloc — Contexte Claude Code

## Vision globale
Objectif : 10 000€/mois via création de sites web pour clients locaux (conciergerie, artisans, PME bordelaises) + SEO local + automatisation n8n.

## Pipeline standard — à appliquer sur chaque nouveau site (13 étapes)

1. `/copywriting` — textes qui convertissent
2. `/cro` — audit conversion
3. `/frontend-design` — design distinctif
4. `/impeccable typeset` — polices (jamais Inter/Roboto/Playfair/DM Sans/Cormorant)
5. `/impeccable bolder` — supprimer tells IA
6. `/impeccable adapt` — a11y, touch targets, lazy loading, aria, lang=fr
7. `/impeccable layout` — rythme, grilles, espacement
8. `/impeccable polish` — focus-visible, sémantique HTML, passe finale
9. `/schema` — JSON-LD LocalBusiness, FAQPage, HowTo, WebSite
10. `/ai-seo` — llms.txt, robots.txt, sitemap.xml, services.md
11. `/analytics` — GA4 : page_view SPA + generate_lead sur tous les CTAs
12. Deploy — Netlify + GitHub auto-deploy
13. `/seo-audit` — audit SEO une fois en ligne

## Règles absolues (s'appliquent sur tous les sites)

**Jamais :**
- Polices liste noire : Inter, Roboto, Arial, Playfair Display, DM Sans, Cormorant Garamond
- Eyebrow uppercase sur chaque section
- border-left comme accent décoratif
- borderRadius 24px+ sur les cards (max 16px)
- Hero-metric template (stats +X% / Y jours / Z%)
- Fond crème/warmWhite comme couleur de body principale
- `<div onClick>` — toujours `<button>` ou `<a>` sémantiques

**Toujours :**
- lang="fr", touch targets 44px min
- aria-expanded sur accordéons FAQ
- loading="lazy" sur images non-hero
- WhatsApp visible : header + hero + sticky CTA mobile
- `<main id="main-content">` autour du contenu principal
- viewport-fit=cover dans la meta viewport
- send_page_view: false dans GA4 config (tracking SPA manuel)

## Skills installés globalement (~/.claude/skills/)

| Skill | Usage |
|-------|-------|
| `impeccable` | Pipeline qualité complet (23 commandes) |
| `frontend-design` | Design distinctif non-générique |
| `analytics` | GA4, tracking, conversions |
| `copywriting` | Textes de conversion |
| `cro` | Optimisation landing pages |
| `schema` | Données structurées SEO |
| `ai-seo` | Optimisation pour les IA |
| `seo-audit` | Audit SEO post-déploiement |
| `humanizer` | Suppression patterns IA dans le copy |

---

## PROJET 1 — Loya Conciergerie ✅ LIVE

**Site :** loya-conciergerie.com
**Stack :** React CRA, src/App.js (inline styles + GlobalStyles)
**Repo :** sabrina33-creator/site-essaloc (GitHub)
**Hébergement :** Netlify auto-deploy (charming-stardust-d08fba.netlify.app)
**GA4 :** G-HNVNNBY5PN

**Couleurs (objet C) :**
- terra: "#B87333" (principale)
- sage: "#7A8B6F"
- sageDark: "#5A6B4F"
- dark: "#2C2C2C"
- cream: "#F5F0E8"
- warmWhite: "#FAFAF5"
- white: "#FFFFFF"
- beige: "#E8E0D0"
- sand: "#9E9080"
- darkSoft: "#555555"

**Fonts :** Josefin Sans (headings) + Figtree (body)

**Contact :**
- Tél : +33 7 83 37 62 93
- Email : loya.conciergerie@gmail.com
- WhatsApp : wa.me/33783376293
- GMB : https://www.google.com/maps?cid=8404097505068748296

**Commits clés :**
- `8f0e3fb` — design, copy, FAQ, schema, AI SEO initial
- `be98910` — humanizer
- `89b34cb` — typeset Josefin Sans + Figtree
- `691bef0` — impeccable pipeline complet + GA4
- `5e19488` — WhatsApp header + hero
- `dd8a39c` — SEO : title, meta description, OG tags
- `0ddda57` — React Router /services /contact
- `b2fcf88` — sameAs GMB réel
- `5c4a4b6` — H1 simplifié (suppression +40%)

**Reste à faire Loya :**
- Dès 5 avis Google : section témoignages manuelle
- Connecter WhatsApp Business + agent IA via n8n
- Optimiser fiche GMB (photos, services, description faite)

---

## PROJET 2 — Site Malek (artisan) 🔜 EN COURS

**Statut :** À créer — suivre le pipeline standard ci-dessus
**Hébergement prévu :** Netlify (même compte)

---

## Déploiement standard

1. `npm run build` — vérifier zéro erreur
2. `git add` + `git commit` + `git push`
3. Netlify rebuild automatique en 1-2 min
4. Ctrl+Shift+R pour vider le cache navigateur

## Avis Google — procédure (dès 5 avis disponibles)
Copier les textes depuis Google Maps → créer section témoignages dans le code (nom, note, texte). Gratuit, 20 min. Option payante : Elfsight ~9€/mois.
