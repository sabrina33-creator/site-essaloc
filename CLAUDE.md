# Essaloc — Claude Code

## Vision
10 000€/mois via sites web clients locaux (conciergerie, artisans, PME bordelaises) + SEO local + agents IA n8n.

## Pipeline standard — chaque nouveau site (13 étapes)

1. `/copywriting` — textes qui convertissent
2. `/cro` — audit conversion
3. `/frontend-design` — design distinctif
4. `/impeccable typeset` — polices (jamais Inter/Roboto/Playfair/DM Sans/Cormorant)
5. `/impeccable bolder` — supprimer tells IA
6. `/impeccable adapt` — a11y, touch targets, lazy loading, aria, lang=fr
7. `/impeccable layout` — rythme, grilles, espacement
8. `/impeccable polish` — focus-visible, sémantique HTML, passe finale
9. `/schema` — JSON-LD LocalBusiness, FAQPage, HowTo, WebSite
10. `/ai-seo` — llms.txt, robots.txt, sitemap.xml
11. `/analytics` — GA4 : page_view SPA + generate_lead sur tous les CTAs
12. Deploy — Netlify + GitHub auto-deploy
13. `/seo-audit` — audit SEO une fois en ligne

## Règles absolues

**Jamais :**
- Polices : Inter, Roboto, Arial, Playfair Display, DM Sans, Cormorant Garamond
- Eyebrow uppercase sur chaque section
- `border-left` comme accent décoratif
- `borderRadius` 24px+ sur les cards (max 16px)
- Hero-metric template (stats +X% / Y jours / Z%)
- Fond crème/warmWhite comme couleur de body principale
- `<div onClick>` — toujours `<button>` ou `<a>`

**Toujours :**
- `lang="fr"`, touch targets 44px min
- `aria-expanded` sur accordéons FAQ
- `loading="lazy"` sur images non-hero
- WhatsApp visible : header + hero + sticky CTA mobile
- `<main id="main-content">` autour du contenu principal
- `viewport-fit=cover` dans la meta viewport
- `send_page_view: false` dans GA4 config

## Skills (~/.claude/skills/)

| Skill | Usage |
|-------|-------|
| `impeccable` | Pipeline qualité complet (23 commandes) |
| `frontend-design` | Design distinctif |
| `analytics` | GA4, tracking, conversions |
| `copywriting` | Textes de conversion |
| `cro` | Optimisation landing pages |
| `schema` | Données structurées SEO |
| `ai-seo` | Optimisation pour les IA |
| `seo-audit` | Audit SEO post-déploiement |
| `humanizer` | Suppression patterns IA dans le copy |

## Déploiement standard
1. `npm run build` — zéro erreur
2. `git add` + `git commit` + `git push`
3. Netlify rebuild auto en 1-2 min
4. Ctrl+Shift+R — vider cache navigateur

## Avis Google (dès 5 avis)
Copier depuis Google Maps → section témoignages manuelle (nom, note, texte). Gratuit, 20 min. Option payante : Elfsight ~9€/mois.
GMB Q&A : Maps → "Questions & réponses" → poster ses propres questions + réponses (5-8 min).

---

## Projets clients

@docs/loya.md
@docs/julie.md
@docs/malek.md

## Outils et stratégie

@docs/template.md
@docs/agent-whatsapp.md
