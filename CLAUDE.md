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

**Agent WhatsApp IA — n8n ✅ ACTIF EN PRODUCTION (canal Propriétaires)**
- Workflow n8n : `drUjWfT6rib9zBb3`
- URL n8n : https://n8n.srv980557.hstgr.cloud/workflow/drUjWfT6rib9zBb3
- Webhook production : POST `https://n8n.srv980557.hstgr.cloud/webhook/loya-proprio`
- Body test : `{"phone": "0600000000", "message": "Bonjour, comment fonctionne la conciergerie ?"}`
- Statut : **publié et actif** — seul blocage : crédits Anthropic à 0$ (acheter mardi sur platform.anthropic.com → Billing → 10$)

**Ce que fait l'agent proprio :**
1. Répond aux questions sur les deux services (sous-location pro vs conciergerie)
2. Qualifie le prospect (type de bien, statut, situation fiscale)
3. Traite les objections (légalité, dégâts, impayés, fiscalité micro-BIC)
4. Vérifie les disponibilités dans Google Calendar
5. Crée le RDV de visite si prospect chaud (45 min chez le proprio)
6. Envoie un email à Sabrina (contact.essaloc@gmail.com) à chaque RDV confirmé

**État des credentials (configurés le 05/07/2026) :**
- ✅ Anthropic API — clé connectée, mais compte à 0$ → acheter crédits mardi
- ✅ Google Calendar — OAuth2 compte essaloc (credential ID: pNNLLOdfiCz3lcsa)
  - Projet Google Cloud : keen-tokenizer-501517-j0
  - Client ID : 1058081574584-t5me69nc94dvhgmcutf0mcfaum9gcek2.apps.googleusercontent.com
  - Secret dans fichier téléchargé : client_secret_2_...json (Downloads)
- ✅ Gmail — auto-assigné contact.boholuna@gmail.com → envoie vers contact.essaloc@gmail.com

**Informations tarifaires agent :**
- Sous-location : loyer garanti = prix du marché (+50€ max pour bien exceptionnel, +80€ absolu max)
- Conciergerie : 20% commission, consommables à la charge du proprio

**Prochaines étapes Loya :**
- Mardi : acheter crédits Anthropic (10$) → tester avec curl → agent live
- Dès test OK : brancher WhatsApp Business (remplacer noeud Webhook par noeud WhatsApp Business Meta)
- Dès 5 avis Google : section témoignages manuelle
- Optimiser fiche GMB (photos, services, description faite)

---

## PROJET 2 — Site Malek / Ocré Peinture ✅ LIVE

**Site :** ocre-peinture.fr
**Stack :** React CRA, src/App.js
**Repo :** sabrina33-creator/ocre-peinture (GitHub)
**Hébergement :** Netlify auto-deploy
**GA4 :** G-QQSXYNBXY2
**Fonts :** Fraunces (titres) + Figtree (corps)

**Contexte complet dans le dossier du projet :**
→ `C:\Users\User\Desktop\site malek\ocre-peinture\CLAUDE.md`

**Agent WhatsApp n8n :** workflow `hqKp6XAQfOn33ojN` créé, en attente que Malek ait WhatsApp Business. Credentials à configurer quand prêt (voir CLAUDE.md Malek).

**GMB :** en attente validation vidéo de Malek.

---

---

## AUTOMATISATION — Agent WhatsApp IA (offre à vendre)

### Repo de référence
Repo étudié : `https://github.com/Hainrixz/whatsapp-agentkit.git`
Cloné localement : `C:\Users\User\AppData\Local\Temp\whatsapp-agentkit`

### Stratégie produit
Vendre un "agent commercial IA WhatsApp 24/7" aux clients locaux (restaurants, artisans, salons, cliniques).

**Grille tarifaire :**
| Formule | Setup | Mensuel |
|---------|-------|---------|
| Starter — FAQ + horaires + contact | 500-800€ | 80-120€ |
| Pro — Starter + qualif leads + RDV calendrier | 1000-1500€ | 150-250€ |
| Sur-mesure — intégrations CRM, n8n avancé | 2000-3500€ | 300-500€ |

**Coûts réels par client :** 5-20€/mois (API Claude + hébergement Railway)

### Stack technique retenu (Option n8n — recommandée)
Pour les RDV et automatisations : **n8n seul** (pas AgentKit Python)
- Node WhatsApp Business (Meta) ou Twilio
- Node AI Agent (Claude claude-sonnet-4-6)
- Node Google Calendar (vérifier dispo + créer RDV)
- Node Gmail (notifier l'artisan)
- Mémoire de conversation par numéro de téléphone

### Workflow créé pour Malek
Voir section PROJET 2 ci-dessus.

### Pour les prochains clients
1. Dupliquer le workflow Malek dans n8n
2. Adapter le system prompt (nom, services, tarifs, zone)
3. Connecter le Google Calendar du client
4. Brancher WhatsApp Business quand le compte est prêt
5. Tester avec curl avant de mettre en prod

---

## Déploiement standard

1. `npm run build` — vérifier zéro erreur
2. `git add` + `git commit` + `git push`
3. Netlify rebuild automatique en 1-2 min
4. Ctrl+Shift+R pour vider le cache navigateur

## Avis Google — procédure (dès 5 avis disponibles)
Copier les textes depuis Google Maps → créer section témoignages dans le code (nom, note, texte). Gratuit, 20 min. Option payante : Elfsight ~9€/mois.

---

## PORTFOLIO — Flōw Agency ✅ CRÉÉ

**Nom de l'agence :** Flōw Agency
**Contact portfolio :** contact.essaloc@gmail.com + wa.me/33783376293
**Fichier source :** outputs/FLOW-AGENCY.HTM (dans le dossier Claude outputs)
**Statut :** Base créée, à déployer sur Netlify, à enrichir au fil du temps

**Stack portfolio :**
- HTML/CSS/JS pur (pas de framework)
- Dark mode (#09090F), polices Fraunces (titres) + Outfit (corps)
- Captures d'écran auto via WordPress mshots
- Scroll reveal au défilement

**Les 3 projets affichés :**
1. **LOYA Conciergerie** → loya-conciergerie.com (live ✅, GMB ✅)
2. **By Julie Déco** → byjuliedeco.com (live ✅, GMB ✅, domaine propagation 48h)
3. **Ocré — Malek** → ocre-peinture.fr (live ✅, GMB en attente validation vidéo)

**Services affichés + tarifs :**
- Site vitrine React → à partir de 800€
- Agent IA WhatsApp → à partir de 400€
- Pack SEO Local → à partir de 300€
- Pack Visibilité Complète → à partir de 1 400€

**À faire dès que possible :**
- [ ] Déployer sur Netlify (créer repo ou dossier dédié)
- [ ] Remplacer captures mshots par vraies screenshots quand les 3 GMB sont validés
- [ ] Créer profil Malt (malt.fr) avec lien portfolio
- [ ] Créer profil LinkedIn avec lien portfolio
- [ ] Ajouter témoignages clients dès premiers avis Google reçus
- [ ] Ajouter 4e projet quand Malek (ou autre) est complet avec résultats

**GMB — procédure Q&A :**
Chercher l'établissement sur Google Maps → "Questions & réponses" → poster ses propres questions + réponses (5-8 min). Ajouter photos via business.google.com → Photos.
