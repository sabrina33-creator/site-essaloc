# PROJET 1 — Loya Conciergerie ✅ LIVE

**Site :** loya-conciergerie.com
**Stack :** React CRA, src/App.js (inline styles + GlobalStyles)
**Repo :** sabrina33-creator/site-essaloc (GitHub)
**Hébergement :** Netlify auto-deploy — charming-stardust-d08fba.netlify.app
**GA4 :** G-HNVNNBY5PN

## Identité

**Couleurs (objet C) :**
- terra `#B87333` (principale) · sage `#7A8B6F` · sageDark `#5A6B4F`
- dark `#2C2C2C` · cream `#F5F0E8` · warmWhite `#FAFAF5`
- white `#FFFFFF` · beige `#E8E0D0` · sand `#9E9080` · darkSoft `#555555`

**Fonts :** Josefin Sans (headings) + Figtree (body)

**Contact :**
- Tél : +33 7 83 37 62 93
- Email : loya.conciergerie@gmail.com
- WhatsApp : wa.me/33783376293
- GMB : https://www.google.com/maps?cid=8404097505068748296

## Commits clés
- `8f0e3fb` — design, copy, FAQ, schema, AI SEO initial
- `be98910` — humanizer
- `89b34cb` — typeset Josefin Sans + Figtree
- `691bef0` — impeccable pipeline complet + GA4
- `5e19488` — WhatsApp header + hero
- `dd8a39c` — SEO : title, meta description, OG tags
- `0ddda57` — React Router /services /contact
- `b2fcf88` — sameAs GMB réel
- `5c4a4b6` — H1 simplifié (suppression +40%)

## Agent WhatsApp IA — n8n ✅ ACTIF EN PRODUCTION (canal Propriétaires)

- **Workflow n8n :** `drUjWfT6rib9zBb3`
- **URL n8n :** https://n8n.srv980557.hstgr.cloud/workflow/drUjWfT6rib9zBb3
- **Webhook prod :** POST `https://n8n.srv980557.hstgr.cloud/webhook/loya-proprio`
- **Body test :** `{"phone": "0600000000", "message": "Bonjour, comment fonctionne la conciergerie ?"}`
- **Statut :** publié et actif — blocage : crédits Anthropic à 0$ (acheter 10$ sur platform.anthropic.com → Billing)

**Ce que fait l'agent :**
1. Répond aux questions sur les deux services (sous-location pro vs conciergerie)
2. Qualifie le prospect (type de bien, statut, situation fiscale)
3. Traite les objections (légalité, dégâts, impayés, fiscalité micro-BIC)
4. Vérifie les disponibilités dans Google Calendar
5. Crée le RDV de visite si prospect chaud (45 min chez le proprio)
6. Envoie un email à Sabrina (contact.essaloc@gmail.com) à chaque RDV confirmé

**Credentials n8n (configurés 05/07/2026) :**
- ✅ Anthropic API — clé connectée, compte à 0$ → acheter crédits
- ✅ Google Calendar — OAuth2 compte essaloc (credential ID: pNNLLOdfiCz3lcsa)
  - Projet Google Cloud : keen-tokenizer-501517-j0
  - Client ID : 1058081574584-t5me69nc94dvhgmcutf0mcfaum9gcek2.apps.googleusercontent.com
  - Secret : client_secret_2_...json (Downloads)
- ✅ Gmail — contact.boholuna@gmail.com → envoie vers contact.essaloc@gmail.com

**Tarifs Loya (pour le system prompt de l'agent) :**
- Sous-location : loyer garanti = prix du marché (+50€ max pour bien exceptionnel, +80€ absolu max)
- Conciergerie : 20% commission, consommables à la charge du proprio

## Prochaines étapes
- [ ] Acheter crédits Anthropic (10$) → tester curl → agent live
- [ ] Brancher WhatsApp Business Meta (remplacer noeud Webhook)
- [ ] Section témoignages dès 5 avis Google
- [ ] Q&A Google Maps (5-8 min)
- [ ] Lighthouse / Core Web Vitals (mesurer)
- [ ] Revérifier le statut d'indexation des 3 URLs dans Search Console d'ici 2-3 jours

## 2026-09-22 — Indexation initiale sur Google Search Console

**Propriété `https://loya-conciergerie.com/` créée dans Search Console.** Vérification automatique via GA4 non proposée cette fois (contrairement à un autre projet de l'utilisatrice sur un compte Google différent) — passée par la méthode "Balise HTML" à la place. Première tentative de validation échouée : Google avait déclenché la validation via la méthode "Fichier HTML" (par défaut/dernière sélectionnée dans l'UI) alors que la balise meta avait bien été déployée — pas un vrai échec technique, juste la mauvaise section "Valider" cliquée dans l'interface. Validation réussie au second essai en cliquant sur "Valider" dans la section "Balise HTML" spécifiquement.

**Balise `<meta name="google-site-verification" content="CGv3F2_d3CwhgRCxEWzwFyBE2yoscRqbNeyVvCs8HFc" />` ajoutée dans `public/index.html`** (commit `35d1c86`), déployée via Netlify, présence confirmée en ligne par `curl` avant de relancer la validation côté Search Console.

**`sitemap.xml` soumis dans Plans du site**, puis indexation manuelle demandée via "URL Inspection" → "Request indexing" pour les 3 pages du site :
- `https://loya-conciergerie.com/`
- `https://loya-conciergerie.com/services`
- `https://loya-conciergerie.com/contact`

**Facebook et Instagram ajoutés au `sameAs` du schema `LocalBusiness`** (commit `fa2c061`, jusque-là seul le lien GMB y figurait) :
- `https://www.facebook.com/p/Loya-Conciergerie-61593215099891/`
- `https://www.instagram.com/loya.conciergerie/`

URLs vérifiées avant ajout (l'utilisatrice avait un doute) : les deux pages confirmées comme appartenant bien à "Loya Conciergerie" / "LOYA Conciergerie" (@loya.conciergerie) via récupération du contenu des pages.

**Précision donnée à l'utilisatrice** : Facebook/Instagram ne peuvent pas être "indexés" via Search Console (propriété limitée aux domaines possédés/vérifiés) — le `sameAs` sert uniquement à renforcer l'association d'entité pour Google, pas à forcer une indexation.
