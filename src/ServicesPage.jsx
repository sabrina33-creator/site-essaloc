import { useState } from 'react';
import {
  C, font, useFonts, useScrollReveal,
  Header, Footer, StickyMobileBar,
  BtnPrimary, BtnSage, BtnOutline, SectionTag, Icon,
} from './shared';

// ─── DATA ─────────────────────────────────────────────────────────────────────
const CONCIERGE_SERVICES = [
  {
    id: 'reservations',
    icon: <Icon.Calendar size={32} />,
    color: C.terracotta,
    bg: '#FDF6EE',
    title: 'Gestion des annonces & réservations',
    platforms: ['Airbnb', 'Booking.com', 'Abritel'],
    desc: 'Création et optimisation de vos annonces sur toutes les plateformes leaders. Nous gérons les demandes, confirmations et communications avec les voyageurs 7j/7 — vous ne touchez à rien.',
    points: [
      'Annonces rédigées et photographiées professionnellement',
      'Réponses aux voyageurs sous 1 heure en moyenne',
      'Synchronisation multi-plateformes sans double réservation',
    ],
  },
  {
    id: 'checkin',
    icon: <Icon.Key size={32} />,
    color: C.sage,
    bg: '#F2F5F0',
    title: 'Check-in & check-out 7j/7',
    desc: 'Accueil personnalisé ou autonome (boîte à clés sécurisée), état des lieux d\'entrée et de sortie documenté, remise en main propre des consignes de séjour.',
    points: [
      'Accueil chaleureux avec présentation du logement',
      'État des lieux photographique à chaque rotation',
      'Disponibilité 7j/7, y compris jours fériés',
    ],
  },
  {
    id: 'menage',
    icon: <Icon.Sparkles size={32} />,
    color: C.terracotta,
    bg: '#FDF6EE',
    title: 'Ménage & entretien professionnel',
    desc: 'Nettoyage complet entre chaque séjour aux standards hôteliers. Vérification de l\'équipement, réapprovisionnement des consommables, signalement de toute anomalie.',
    points: [
      'Protocole de nettoyage certifié niveau hôtellerie',
      'Désinfection complète des surfaces de contact',
      'Rapport photographique envoyé après chaque passage',
    ],
  },
  {
    id: 'linge',
    icon: <Icon.Linen size={32} />,
    color: C.sage,
    bg: '#F2F5F0',
    title: 'Linge de qualité hôtelière',
    desc: 'Nous fournissons et gérons l\'intégralité du linge de lit et de bain — draps, taies, serviettes, tapis de bain. Lavage professionnel, présentation impeccable à chaque séjour.',
    points: [
      'Linge 100 % coton, blanc, qualité hôtel 4 étoiles',
      'Renouvellement à chaque rotation sans supplément',
      'Stock géré et maintenu par notre équipe',
    ],
  },
  {
    id: 'revenus',
    icon: <Icon.BarChart size={32} />,
    color: C.terracotta,
    bg: '#FDF6EE',
    title: 'Reporting transparent des revenus',
    desc: 'Tableau de bord en ligne, rapport mensuel détaillé, virement direct sur votre compte. Vous avez une visibilité totale sur les performances de votre bien.',
    points: [
      'Rapport mensuel détaillé : nuits, taux d\'occupation, revenus',
      'Virement mensuel automatique sur votre compte',
      'Accès à votre espace propriétaire en ligne',
    ],
  },
  {
    id: 'pricing',
    icon: <Icon.TrendingUp size={32} />,
    color: C.sage,
    bg: '#F2F5F0',
    title: 'Optimisation des tarifs (pricing dynamique)',
    desc: 'Analyse continue du marché bordelais, ajustement des prix selon la saisonnalité, les événements locaux et la demande. Vos revenus sont maximisés en permanence.',
    points: [
      'Analyse quotidienne des prix de la concurrence',
      'Tarification adaptée aux événements bordelais (fêtes du vin, matchs…)',
      'Taux d\'occupation moyen de 85 % sur notre portefeuille',
    ],
  },
];

const REASSURANCES = [
  {
    icon: <Icon.Shield size={40} />,
    color: C.terracotta,
    title: 'Professionnalisme & fiabilité',
    desc: 'Nous gérons chaque logement comme si c\'était le nôtre. Contrat clair, engagements tenus, aucune mauvaise surprise.',
  },
  {
    icon: <Icon.BarChart size={40} />,
    color: C.sage,
    title: 'Transparence totale',
    desc: 'Rapport mensuel, accès propriétaire en ligne, zéro frais caché. Vous savez exactement ce que vous touchez et pourquoi.',
  },
  {
    icon: <Icon.Phone size={40} />,
    color: C.terracotta,
    title: 'Réactivité 24/7',
    desc: 'Incident en pleine nuit, voyageur bloqué, question urgente — notre équipe répond toujours. Votre bien n\'est jamais laissé sans surveillance.',
  },
  {
    icon: <Icon.MapPin size={40} />,
    color: C.sage,
    title: 'Experts du marché bordelais',
    desc: 'Nous connaissons Bordeaux, ses quartiers, ses saisons, ses événements. Cette expertise locale se traduit directement en revenus supplémentaires pour vous.',
  },
];

// ─── HERO SERVICES ────────────────────────────────────────────────────────────
function HeroServices() {
  const [visible, setVisible] = useState(false);
  useState(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  });

  // Fix: use useEffect logic inline
  const ref = { current: null };

  return (
    <section style={{
      paddingTop: 80,
      background: `
        radial-gradient(ellipse 70% 80% at 80% 30%, ${C.beige}BB 0%, transparent 55%),
        radial-gradient(ellipse 50% 60% at 10% 90%, ${C.sandLight}66 0%, transparent 50%),
        linear-gradient(160deg, ${C.cream} 0%, ${C.beige} 50%, ${C.cream} 100%)
      `,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative shapes */}
      <div style={{ position: 'absolute', top: -60, right: -80, width: 350, height: 350, borderRadius: '50%', background: `${C.terracotta}07`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -40, left: -40, width: 200, height: 200, borderRadius: '50%', background: `${C.sage}10`, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="sh-grid">
        {/* Text */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
          <SectionTag>Pour les propriétaires</SectionTag>
          <h1 style={{
            fontFamily: font.serif,
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
            fontWeight: 700, color: C.brown, margin: '0 0 20px',
            lineHeight: 1.2, letterSpacing: '-0.02em',
          }}>
            Nos services pour les<br />
            propriétaires à{' '}
            <span style={{ color: C.terracotta, fontStyle: 'italic' }}>Bordeaux</span>
          </h1>
          <p style={{
            fontFamily: font.sans, fontSize: '1.08rem', lineHeight: 1.75,
            color: C.brownLight, margin: '0 0 36px', fontWeight: 300, maxWidth: 480,
          }}>
            De la mise en ligne de votre annonce jusqu'au virement de vos revenus — nous gérons tout, vous profitez de tout.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <BtnPrimary href="tel:+33600000000" icon={<Icon.Phone />}>Appeler maintenant</BtnPrimary>
            <BtnSage href="#formulaire" icon={<Icon.ClipboardList />}>Formulaire propriétaire</BtnSage>
          </div>
        </div>

        {/* Stats cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(24px)',
          transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
        }}>
          {[
            { num: '85 %', label: "Taux d'occupation moyen", icon: <Icon.BarChart size={20} />, color: C.terracotta },
            { num: '+35 %', label: 'Revenus vs gestion seule', icon: <Icon.TrendingUp size={20} />, color: C.sage },
            { num: '< 1h', label: 'Temps de réponse voyageurs', icon: <Icon.Phone size={20} />, color: C.sage },
            { num: '4.9 ★', label: 'Note moyenne sur Airbnb', icon: <Icon.Star filled size={20} />, color: C.terracotta },
          ].map((s, i) => (
            <StatCard key={s.label} stat={s} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* Breadcrumb-style platforms */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px 48px',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12,
        opacity: visible ? 1 : 0, transition: 'opacity 1s ease 0.4s',
      }}>
        <span style={{ fontFamily: font.sans, fontSize: '0.82rem', color: C.brownLight, fontWeight: 500 }}>Présent sur :</span>
        {['Airbnb', 'Booking.com', 'Abritel', 'Vrbo'].map((p) => (
          <span key={p} style={{
            fontFamily: font.sans, fontSize: '0.82rem', fontWeight: 600,
            padding: '5px 14px', borderRadius: 50,
            background: C.white, color: C.brownLight,
            border: `1px solid ${C.sand}60`,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}>{p}</span>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sh-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function StatCard({ stat, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{
      background: hovered ? C.white : `${C.white}CC`,
      borderRadius: 20, padding: '24px 20px',
      border: `1px solid ${stat.color}20`,
      boxShadow: hovered ? `0 12px 40px ${stat.color}20` : '0 2px 12px rgba(0,0,0,0.04)',
      transition: 'all 0.3s ease',
      transform: hovered ? 'translateY(-4px)' : 'none',
      animationDelay: `${delay}s`,
    }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ width: 40, height: 40, borderRadius: 12, background: `${stat.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: stat.color, marginBottom: 12 }}>
        {stat.icon}
      </div>
      <div style={{ fontFamily: font.serif, fontSize: '1.9rem', fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.num}</div>
      <div style={{ fontFamily: font.sans, fontSize: '0.8rem', color: C.brownLight, marginTop: 6, lineHeight: 1.4, fontWeight: 400 }}>{stat.label}</div>
    </div>
  );
}

// ─── SOUS-LOCATION PRO ────────────────────────────────────────────────────────
function SousLocation() {
  return (
    <section style={{ background: C.white, padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 64px' }} className="scroll-reveal">
          <SectionTag color={C.sage}>Sous-location professionnelle</SectionTag>
          <h2 style={{
            fontFamily: font.serif, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700, color: C.brown, margin: '0 0 16px',
            letterSpacing: '-0.02em', lineHeight: 1.25,
          }}>
            Votre logement loue.<br />
            <span style={{ color: C.terracotta, fontStyle: 'italic' }}>Vous encaissez. Vous dormez.</span>
          </h2>
          <p style={{ fontFamily: font.sans, fontSize: '1.05rem', color: C.brownLight, lineHeight: 1.7, fontWeight: 300 }}>
            Essaloc prend votre bien en sous-location professionnelle : nous versons un loyer garanti chaque mois,
            et nous gérons intégralement les voyageurs. Votre logement travaille pour vous, sans vous mobiliser.
          </p>
        </div>

        {/* 3 avantages */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="scroll-reveal sl-grid">
          {[
            {
              icon: <Icon.Home size={32} />,
              color: C.terracotta,
              title: 'Revenus réguliers garantis',
              desc: 'Un loyer fixe versé chaque mois, quelle que soit l\'activité de la plateforme. Votre trésorerie est stable et prévisible.',
              detail: 'Contrat de sous-location clair, loyer négocié selon le potentiel de votre bien.',
            },
            {
              icon: <Icon.Shield size={32} />,
              color: C.sage,
              title: 'Zéro gestion de votre côté',
              desc: 'Voyageurs, ménage, incidents, plateformes — nous gérons tout. Vous ne recevez qu\'un virement et un rapport mensuel.',
              detail: 'Votre seule obligation : être joignable en cas d\'urgence majeure.',
            },
            {
              icon: <Icon.Layers size={32} />,
              color: C.terracotta,
              title: 'Bail professionnel sécurisant',
              desc: 'Un contrat encadré légalement, assurance incluse, état des lieux en entrée et en sortie. Votre bien est entre de bonnes mains.',
              detail: 'Nous souscrivons une assurance spécifique pour couvrir votre logement.',
            },
          ].map((item, i) => (
            <AvantageCard key={item.title} item={item} delay={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .sl-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function AvantageCard({ item, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`scroll-reveal scroll-reveal-delay-${delay + 1}`}
      style={{
        background: hovered ? C.cream : C.white,
        border: `1px solid ${item.color}25`,
        borderRadius: 24, padding: '36px 28px',
        transition: 'all 0.35s ease',
        boxShadow: hovered ? `0 16px 48px ${item.color}18` : '0 2px 16px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-6px)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ width: 64, height: 64, borderRadius: 20, background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, marginBottom: 20, transition: 'background 0.3s', ...(hovered ? { background: `${item.color}25` } : {}) }}>
        {item.icon}
      </div>
      <h3 style={{ fontFamily: font.serif, fontSize: '1.2rem', fontWeight: 600, color: C.brown, margin: '0 0 12px' }}>{item.title}</h3>
      <p style={{ fontFamily: font.sans, fontSize: '0.95rem', color: C.brownLight, lineHeight: 1.7, margin: '0 0 16px', fontWeight: 300 }}>{item.desc}</p>
      <p style={{ fontFamily: font.sans, fontSize: '0.82rem', color: item.color, fontWeight: 500, margin: 0, padding: '10px 14px', background: `${item.color}10`, borderRadius: 10 }}>
        {item.detail}
      </p>
    </div>
  );
}

// ─── CONCIERGERIE COMPLÈTE ────────────────────────────────────────────────────
function Conciergerie() {
  const [activeId, setActiveId] = useState('reservations');
  const active = CONCIERGE_SERVICES.find((s) => s.id === activeId);

  return (
    <section id="services-detail" style={{
      padding: '100px 24px',
      background: `linear-gradient(180deg, ${C.cream} 0%, ${C.beige}60 100%)`,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }} className="scroll-reveal">
          <SectionTag>Conciergerie complète</SectionTag>
          <h2 style={{
            fontFamily: font.serif, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700, color: C.brown, margin: '0 0 16px',
            letterSpacing: '-0.02em',
          }}>
            Une prise en charge<br />
            <span style={{ color: C.terracotta, fontStyle: 'italic' }}>de A à Z</span>
          </h2>
          <p style={{ fontFamily: font.sans, fontSize: '1.05rem', color: C.brownLight, lineHeight: 1.7, fontWeight: 300 }}>
            Six services intégrés pour que votre bien tourne parfaitement, sans que vous leviez le petit doigt.
          </p>
        </div>

        {/* Tab navigation */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 48,
        }} className="scroll-reveal">
          {CONCIERGE_SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              style={{
                fontFamily: font.sans, fontSize: '0.88rem', fontWeight: 600,
                padding: '10px 20px', borderRadius: 50, border: 'none', cursor: 'pointer',
                transition: 'all 0.25s ease',
                background: activeId === s.id ? s.color : C.white,
                color: activeId === s.id ? C.white : C.brownLight,
                boxShadow: activeId === s.id ? `0 4px 16px ${s.color}40` : '0 2px 8px rgba(0,0,0,0.06)',
                transform: activeId === s.id ? 'scale(1.04)' : 'none',
              }}
            >
              {s.title.split(' ').slice(0, 3).join(' ')}…
            </button>
          ))}
        </div>

        {/* Active panel */}
        {active && (
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
            background: C.white, borderRadius: 32, padding: '48px 40px',
            boxShadow: `0 8px 48px ${active.color}12`,
            border: `1px solid ${active.color}20`,
            transition: 'box-shadow 0.3s',
          }} className="conc-panel">
            {/* Info */}
            <div>
              <div style={{ width: 72, height: 72, borderRadius: 22, background: `${active.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: active.color, marginBottom: 24 }}>
                {active.icon}
              </div>
              {active.platforms && (
                <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                  {active.platforms.map((p) => (
                    <span key={p} style={{ fontFamily: font.sans, fontSize: '0.78rem', fontWeight: 600, padding: '4px 12px', borderRadius: 50, background: `${active.color}12`, color: active.color }}>
                      {p}
                    </span>
                  ))}
                </div>
              )}
              <h3 style={{ fontFamily: font.serif, fontSize: '1.6rem', fontWeight: 700, color: C.brown, margin: '0 0 16px', lineHeight: 1.3 }}>
                {active.title}
              </h3>
              <p style={{ fontFamily: font.sans, fontSize: '1rem', color: C.brownLight, lineHeight: 1.75, fontWeight: 300, margin: '0 0 28px' }}>
                {active.desc}
              </p>
              <BtnOutline href="#formulaire">En savoir plus</BtnOutline>
            </div>

            {/* Points + visual */}
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {active.points.map((p) => (
                  <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, fontFamily: font.sans, fontSize: '0.97rem', color: C.brown, lineHeight: 1.5 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: `${active.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon.CheckCircle color={active.color} size={16} />
                    </div>
                    {p}
                  </li>
                ))}
              </ul>

              {/* Visual placeholder */}
              <div style={{
                borderRadius: 20, overflow: 'hidden',
                background: active.bg,
                border: `1px solid ${active.color}20`,
                padding: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
              }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: `${active.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: active.color }}>
                  {active.icon}
                </div>
                <p style={{ fontFamily: font.sans, fontSize: '0.82rem', color: C.brownLight, margin: 0, textAlign: 'center' }}>
                  Photo illustrative — {active.title}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Grid des 6 services en aperçu */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 48 }} className="scroll-reveal c-mini-grid">
          {CONCIERGE_SERVICES.map((s, i) => (
            <MiniServiceCard key={s.id} service={s} active={activeId === s.id} onClick={() => setActiveId(s.id)} delay={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .conc-panel { grid-template-columns: 1fr !important; padding: 32px 24px !important; }
          .c-mini-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .c-mini-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function MiniServiceCard({ service, active, onClick, delay }) {
  const [hovered, setHovered] = useState(false);
  const highlight = active || hovered;
  return (
    <div
      onClick={onClick}
      className={`scroll-reveal scroll-reveal-delay-${(delay % 4) + 1}`}
      style={{
        background: highlight ? C.white : `${C.white}88`,
        border: `2px solid ${highlight ? service.color : C.sand + '40'}`,
        borderRadius: 20, padding: '22px 20px',
        cursor: 'pointer', transition: 'all 0.3s ease',
        boxShadow: highlight ? `0 8px 28px ${service.color}20` : 'none',
        transform: highlight ? 'translateY(-3px)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 44, height: 44, borderRadius: 14, background: `${service.color}${highlight ? '25' : '15'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: service.color, flexShrink: 0, transition: 'background 0.3s' }}>
          {service.icon}
        </div>
        <div>
          <div style={{ fontFamily: font.sans, fontWeight: 600, fontSize: '0.88rem', color: highlight ? service.color : C.brown, lineHeight: 1.3, transition: 'color 0.3s' }}>
            {service.title}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── POURQUOI ESSALOC ─────────────────────────────────────────────────────────
function Pourquoi() {
  return (
    <section style={{ padding: '100px 24px', background: C.white }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 72 }} className="scroll-reveal pq-header">
          <div>
            <SectionTag color={C.sage}>Nos engagements</SectionTag>
            <h2 style={{
              fontFamily: font.serif, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700, color: C.brown, margin: '0 0 20px',
              letterSpacing: '-0.02em', lineHeight: 1.25,
            }}>
              Pourquoi choisir<br />
              <span style={{ color: C.terracotta, fontStyle: 'italic' }}>Essaloc ?</span>
            </h2>
            <p style={{ fontFamily: font.sans, fontSize: '1.05rem', color: C.brownLight, lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
              Nous ne sommes pas une agence parmi d'autres. Nous sommes un partenaire local,
              engagé sur la durée, qui partage vos objectifs de rentabilité et de tranquillité.
            </p>
          </div>
          {/* Right: visual stat banner */}
          <div style={{
            background: `linear-gradient(135deg, ${C.brown} 0%, #3D3228 100%)`,
            borderRadius: 28, padding: '36px 32px',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28,
          }}>
            {[
              { num: '20+', label: 'Logements gérés' },
              { num: '2 ans', label: "D'expérience à Bordeaux" },
              { num: '97 %', label: 'Propriétaires satisfaits' },
              { num: '0 €', label: 'Frais cachés' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: font.serif, fontSize: '2rem', fontWeight: 700, color: C.terracotta, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: font.sans, fontSize: '0.8rem', color: C.sand, marginTop: 6, fontWeight: 300 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="pq-grid">
          {REASSURANCES.map((r, i) => (
            <ReassuranceCard key={r.title} item={r} delay={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pq-header { grid-template-columns: 1fr !important; gap: 32px !important; }
          .pq-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ReassuranceCard({ item, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`scroll-reveal scroll-reveal-delay-${delay + 1}`}
      style={{
        display: 'flex', gap: 24, alignItems: 'flex-start',
        background: hovered ? C.cream : `${C.cream}80`,
        border: `1px solid ${item.color}${hovered ? '30' : '18'}`,
        borderRadius: 24, padding: '32px 28px',
        transition: 'all 0.35s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? `0 12px 36px ${item.color}15` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ width: 64, height: 64, borderRadius: 20, background: `${item.color}${hovered ? '25' : '15'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0, transition: 'background 0.3s' }}>
        {item.icon}
      </div>
      <div>
        <h3 style={{ fontFamily: font.serif, fontSize: '1.2rem', fontWeight: 600, color: C.brown, margin: '0 0 10px' }}>{item.title}</h3>
        <p style={{ fontFamily: font.sans, fontSize: '0.95rem', color: C.brownLight, lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── CTA FINAL ────────────────────────────────────────────────────────────────
function CTAFinal() {
  return (
    <section style={{
      padding: '90px 24px',
      background: `linear-gradient(135deg, ${C.brown} 0%, #3D3228 60%, #2A2018 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Deco */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: `${C.terracotta}10`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, left: 60, width: 250, height: 250, borderRadius: '50%', background: `${C.sage}10`, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative' }} className="scroll-reveal">
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: `${C.terracotta}20`, border: `1px solid ${C.terracotta}30`,
          borderRadius: 50, padding: '6px 16px', marginBottom: 24,
          fontFamily: font.sans, fontSize: '0.8rem', fontWeight: 600,
          color: C.terracotta, letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.terracotta, display: 'inline-block' }} />
          Passez à l'action
        </div>

        <h2 style={{
          fontFamily: font.serif,
          fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
          color: C.sandLight, margin: '0 0 20px',
          lineHeight: 1.2, letterSpacing: '-0.02em',
        }}>
          Vous êtes propriétaire ?<br />
          <span style={{ color: C.terracotta, fontStyle: 'italic' }}>Parlons de votre projet.</span>
        </h2>

        <p style={{
          fontFamily: font.sans, fontSize: '1.05rem', color: C.sand,
          lineHeight: 1.75, margin: '0 0 12px', fontWeight: 300,
        }}>
          Un premier échange de 15 minutes suffit pour évaluer le potentiel de votre bien
          et vous proposer une offre sur mesure.
        </p>
        <p style={{
          fontFamily: font.sans, fontSize: '0.88rem', color: `${C.sand}99`,
          margin: '0 0 40px', fontWeight: 300,
        }}>
          Sans engagement • Sans frais cachés • Réponse sous 24h
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 40 }}>
          <BtnPrimary href="tel:+33600000000" icon={<Icon.Phone />}>
            Appeler maintenant
          </BtnPrimary>
          <BtnSage href="#formulaire" icon={<Icon.ClipboardList />}>
            Formulaire propriétaire
          </BtnSage>
        </div>

        {/* Trust line */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
          {['Contrat transparent', 'Assurance incluse', 'Résiliable sans frais'].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon.CheckCircle color={C.sage} size={16} />
              <span style={{ fontFamily: font.sans, fontSize: '0.85rem', color: C.sand, fontWeight: 400 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  useFonts();
  useScrollReveal();

  return (
    <div style={{ fontFamily: font.sans, background: C.cream, minHeight: '100vh' }}>
      <Header />
      <main>
        <HeroServices />
        <SousLocation />
        <Conciergerie />
        <Pourquoi />
        <CTAFinal />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}
