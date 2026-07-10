# Agent WhatsApp IA — Offre à vendre

## Stratégie produit
Vendre un "agent commercial IA WhatsApp 24/7" aux clients locaux (restaurants, artisans, salons, cliniques, conciergeries).

## Grille tarifaire

| Formule | Setup | Mensuel |
|---------|-------|---------|
| Starter — FAQ + horaires + contact | 500-800€ | 80-120€ |
| Pro — Starter + qualif leads + RDV calendrier | 1 000-1 500€ | 150-250€ |
| Sur-mesure — CRM, n8n avancé | 2 000-3 500€ | 300-500€ |

**Coûts réels par client :** 5-20€/mois (API Claude + hébergement n8n)
**Marge brute estimée :** 85-95%

## Stack technique retenu : n8n

Pour tous les clients, on utilise **n8n seul** (pas AgentKit Python — trop complexe à maintenir).

**Noeuds utilisés :**
- WhatsApp Business (Meta) ou Twilio
- AI Agent (claude-sonnet-4-6)
- Google Calendar (vérifier dispo + créer RDV)
- Gmail (notifier le client)
- Mémoire de conversation par numéro de téléphone

**Serveur n8n :** https://n8n.srv980557.hstgr.cloud

## Workflows existants

| Client | Workflow ID | Statut |
|--------|------------|--------|
| Loya (proprio) | `drUjWfT6rib9zBb3` | ✅ actif — bloqué crédits Anthropic |
| Malek | `hqKp6XAQfOn33ojN` | ⏳ en attente WhatsApp Business |

## Procédure pour chaque nouveau client
1. Dupliquer le workflow Loya dans n8n
2. Adapter le system prompt (nom, services, tarifs, zone, horaires)
3. Connecter le Google Calendar du client (OAuth2)
4. Connecter Gmail pour les notifications
5. Brancher WhatsApp Business quand le compte Meta est prêt
6. Tester avec curl sur le webhook avant de mettre en prod
7. Passer le webhook de test → production dans n8n

## Test curl type
```bash
curl -X POST https://n8n.srv980557.hstgr.cloud/webhook/[client-slug] \
  -H "Content-Type: application/json" \
  -d '{"phone": "0600000000", "message": "Bonjour, je voudrais un devis"}'
```

## Repo de référence étudié
`https://github.com/Hainrixz/whatsapp-agentkit.git` (cloné localement en juillet 2026, option non retenue au profit de n8n)
