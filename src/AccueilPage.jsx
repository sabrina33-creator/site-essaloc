import { useEffect, useState } from 'react';
import {
  C, font, useFonts, useScrollReveal,
  Header, Footer, StickyMobileBar,
  BtnPrimary, BtnSage, BtnOutline, SectionTag, Icon,
} from './shared';

// ─── DATA ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: <Icon.Calendar size={28} />,
    title: 'Gestion des réservations',
    desc: 'Diffusion multi-plateformes, tarification dynamique, communication voyageurs 7j/7.',
    color: C.terracotta,
    bg: '#FDF6EE',
  },
  {
    icon: <Icon.Key size={28} />,
    title: 'Check-in & Check-out',
    desc: 'Accueil personnalisé ou autonome, remise des clés, état des lieux entrée/sortie.',
    color: C.sage,
    bg: '#F2F5F0',
  },
  {
    icon: <Icon.Sparkles size={28} />,
    title: 'Ménage & linge',
    desc: 'Nettoyage professionnel entre chaque séjour, linge hôtelier fourni et géré.',
    color: C.terracotta,
    bg: '#FDF6EE',
  },
  {
    icon: <Icon.BarChart size={28} />,
    title: 'Suivi des revenus',
    desc: 'Tableau de bord transparent, virement mensuel, rapports détaillés de performances.',
    color: C.sage,
    bg: '#F2F5F0',
  },
];

const TEMOIGNAGES = [
  {
    name: 'Marie-Claire D.',
    location: 'Bordeaux Centre',
    text: 'En six mois avec Essaloc, mon appartement génère plus qu\'avec mon ancienne agence. Je n\'ai plus aucun souci de gestion, tout est pris en charge avec un soin remarquable.',
    rating: 5,
    initials: 'MD',
    logement: 'Appartement T2 – Chartrons',
  },
  {
    name: 'Thomas & Julie R.',
    location: 'Mérignac',
    text: 'La réactivité est impressionnante. En cas d\'imprévu, Essaloc gère tout. Nos voyageurs laissent systématiquement 5 étoiles. On recommande les yeux fermés.',
    rating: 5,
    initials: 'TJ',
    logement: 'Maison 3 chambres – Mérignac',
  },
  {
    name: 'Isabelle M.',
    location: 'Pessac',
    text: 'J\'avais peur de déléguer ma maison. Essaloc m\'a rassurée dès le premier rendez-vous. Professionnalisme, transparence, et des voyageurs ravis. Que demander de plus ?',
    rating: 5,
    initials: 'IM',
    logement: 'Maison T4 – Pessac',
  },
];

const AVANTAGES = [
  'Aucun effort de votre côté',
  'Revenus optimisés en continu',
  'Voyageurs vérifiés & assurés',
  'Rapport mensuel détaillé',
];

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="accueil" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      background: `
        radial-gradient(ellipse 80% 60% at 70% 40%, ${C.beige}CC 0%, transparent 60%),
        radial-gradient(ellipse 60% 80% at 20% 80%, ${C.sandLight}88 0%, transparent 50%),
        linear-gradient(160deg, ${C.cream} 0%, ${C.beige} 40%, ${C.cream} 100%)
      `,
      paddingTop: 80,
    }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: `${C.terracotta}08`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: -60, width: 300, height: 300, borderRadius: '50%', background: `${C.sage}10`, pointerEvents: 'none' }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '60px 24px 80px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center',
      }} className="hero-grid">
        {/* Left */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: `${C.terracotta}15`, border: `1px solid ${C.terracotta}30`,
            borderRadius: 50, padding: '6px 16px', marginBottom: 24,
            fontFamily: font.sans, fontSize: '0.82rem', fontWeight: 500,
            color: C.terracotta, letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.terracotta, display: 'inline-block' }} />
            Conciergerie à Bordeaux
          </div>

          <h1 style={{
            fontFamily: font.serif,
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: 700, color: C.brown, margin: '0 0 24px',
            lineHeight: 1.2, letterSpacing: '-0.02em',
          }}>
            Votre logement,<br />
            <span style={{ color: C.terracotta, fontStyle: 'italic' }}>rentabilisé</span> sans<br />
            vous en occuper.
          </h1>

          <p style={{
            fontFamily: font.sans, fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            color: C.brownLight, lineHeight: 1.7, margin: '0 0 40px',
            fontWeight: 300, maxWidth: 480,
          }}>
            Essaloc prend en charge la gestion complète de votre bien en location courte durée.
            Plus de contraintes, plus de revenus. Sereinement.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <BtnPrimary href="tel:+33600000000" icon={<Icon.Phone />}>Appeler maintenant</BtnPrimary>
            <BtnSage href="#formulaire" icon={<Icon.ClipboardList />}>Formulaire propriétaire</BtnSage>
            <BtnOutline href="#reserver">Réserver un appel</BtnOutline>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 32, marginTop: 48, paddingTop: 32, borderTop: `1px solid ${C.sand}60` }}>
            {[
              { num: '97%', label: 'Taux de satisfaction' },
              { num: '+35%', label: 'Revenus en moyenne' },
              { num: '24/7', label: 'Support voyageurs' },
            ].map((s) => (
              <div key={s.num}>
                <span style={{ fontFamily: font.serif, fontSize: '2rem', fontWeight: 700, color: C.terracotta, lineHeight: 1, display: 'block' }}>{s.num}</span>
                <span style={{ fontFamily: font.sans, fontSize: '0.8rem', color: C.brownLight, marginTop: 4, display: 'block', fontWeight: 400 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image placeholder */}
        <div style={{
          position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(30px)',
          transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
        }}>
          <div style={{
            width: '100%', maxWidth: 500,
            aspectRatio: '4/5',
            borderRadius: '40% 60% 55% 45% / 45% 40% 60% 55%',
            background: `linear-gradient(145deg, ${C.sandLight}, ${C.beige})`,
            position: 'relative', overflow: 'hidden',
            boxShadow: `0 30px 80px ${C.sand}60, 0 8px 20px ${C.brown}15`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
          }}>
            <div style={{ width: 100, height: 100, borderRadius: '50%', background: `${C.sand}60`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 80 80" style={{ width: 64, height: 64 }} fill="none">
                <rect x="10" y="40" width="60" height="30" rx="3" fill={C.sand} />
                <rect x="20" y="30" width="40" height="12" rx="2" fill={C.sandLight} />
                <rect x="30" y="20" width="20" height="12" rx="2" fill={C.sand} />
                <rect x="15" y="50" width="15" height="20" rx="2" fill={C.beige} />
                <rect x="50" y="50" width="15" height="20" rx="2" fill={C.beige} />
                <circle cx="40" cy="55" r="5" fill={C.terracotta} opacity="0.6" />
              </svg>
            </div>
            <p style={{ fontFamily: font.sans, fontSize: '0.85rem', color: C.brownLight, textAlign: 'center', padding: '0 20px' }}>
              Photo de votre logement
            </p>
          </div>

          {/* Floating cards */}
          <div style={{
            position: 'absolute', bottom: '15%', left: -20,
            background: C.white, borderRadius: 16, padding: '14px 18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
            display: 'flex', alignItems: 'center', gap: 10,
            animation: 'float 3s ease-in-out infinite',
          }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: `${C.sage}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.sage }}>
              <Icon.BarChart size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: C.brown, fontFamily: font.sans }}>+35%</div>
              <div style={{ fontSize: '0.75rem', color: C.brownLight, fontFamily: font.sans }}>revenus supplémentaires</div>
            </div>
          </div>

          <div style={{
            position: 'absolute', top: '10%', right: -10,
            background: C.white, borderRadius: 16, padding: '12px 16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[...Array(5)].map((_, i) => <Icon.Star key={i} filled size={14} />)}
            </div>
            <div style={{ fontSize: '0.8rem', color: C.brownLight, fontFamily: font.sans }}>Note moyenne</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 40px !important;
          }
          .hero-grid > div:first-child > div[style*="display: flex"][style*="gap: 12"] {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

// ─── PRÉSENTATION ─────────────────────────────────────────────────────────────
function Presentation() {
  return (
    <section style={{ background: C.white, padding: '20px 0' }}>
      <div style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="pres-grid">
          {/* Image placeholder */}
          <div className="scroll-reveal" style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 32, overflow: 'hidden', aspectRatio: '3/4',
              background: `linear-gradient(160deg, ${C.beige}, ${C.sandLight})`,
              boxShadow: `0 20px 60px ${C.sand}50`,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, gap: 16, position: 'relative',
            }}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', background: `${C.terracotta}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.terracotta }}>
                <svg viewBox="0 0 50 50" style={{ width: 50, height: 50 }} fill="none">
                  <circle cx="25" cy="18" r="8" fill={C.terracotta} opacity="0.7" />
                  <path d="M10 42c0-8.28 6.72-15 15-15s15 6.72 15 15" stroke={C.terracotta} strokeWidth="2" opacity="0.7" />
                </svg>
              </div>
              <p style={{ fontFamily: font.sans, fontSize: '0.9rem', color: C.brownLight, textAlign: 'center' }}>Photo du fondateur / équipe</p>
              <div style={{ position: 'absolute', inset: 0, background: `repeating-linear-gradient(45deg, transparent, transparent 4px, ${C.sand}08 4px, ${C.sand}08 8px)` }} />
            </div>
            <div style={{ position: 'absolute', bottom: -16, right: -16, width: 100, height: 100, borderRadius: 20, background: `linear-gradient(135deg, ${C.terracotta}CC, ${C.terracottaDark})`, zIndex: -1 }} />
            <div style={{ position: 'absolute', top: 24, left: -16, background: C.cream, borderRadius: 16, padding: '12px 20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: font.sans }}>
              <div style={{ fontWeight: 700, color: C.brown, fontSize: '1rem' }}>Bordeaux & alentours</div>
              <div style={{ fontSize: '0.78rem', color: C.brownLight, display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                <Icon.MapPin /> Gironde (33)
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="scroll-reveal scroll-reveal-delay-2">
            <SectionTag color={C.sage}>Notre histoire</SectionTag>
            <h2 style={{
              fontFamily: font.serif, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              color: C.brown, margin: '0 0 20px', letterSpacing: '-0.02em', lineHeight: 1.25,
            }}>
              Une gestion locative<br />
              <span style={{ color: C.terracotta, fontStyle: 'italic' }}>humaine et experte</span>
            </h2>
            <p style={{ fontFamily: font.sans, fontSize: '1.05rem', lineHeight: 1.8, color: C.brownLight, margin: '0 0 16px', fontWeight: 300 }}>
              Essaloc est née d'une conviction simple : la location courte durée peut être une source de revenus fiable et sereine pour les propriétaires, à condition d'être bien accompagnée.
            </p>
            <p style={{ fontFamily: font.sans, fontSize: '1.05rem', lineHeight: 1.8, color: C.brownLight, margin: '0 0 16px', fontWeight: 300 }}>
              Basés à Bordeaux, nous gérons votre bien comme si c'était le nôtre — avec rigueur, chaleur et transparence totale.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 36px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {AVANTAGES.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: font.sans, fontSize: '0.95rem', color: C.brown }}>
                  <Icon.CheckCircle />
                  {item}
                </li>
              ))}
            </ul>
            <BtnPrimary href="/services">Découvrir nos services</BtnPrimary>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .pres-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
}

// ─── SERVICES PHARES ──────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section id="services" style={{
      padding: '100px 24px',
      background: `linear-gradient(180deg, ${C.cream} 0%, ${C.beige}60 100%)`,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 60px' }} className="scroll-reveal">
          <SectionTag>Ce que nous faisons</SectionTag>
          <h2 style={{ fontFamily: font.serif, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: C.brown, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
            Nos services phares
          </h2>
          <p style={{ fontFamily: font.sans, fontSize: '1.05rem', color: C.brownLight, lineHeight: 1.7, fontWeight: 300 }}>
            Une prise en charge complète pour que vous n'ayez plus rien à gérer.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="services-grid">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} service={s} delay={i} />)}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }} className="scroll-reveal">
          <BtnPrimary href="/services">Voir tous nos services</BtnPrimary>
        </div>
      </div>

      <style>{`@media (max-width: 640px) { .services-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function ServiceCard({ service, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: hovered ? C.white : service.bg,
        borderRadius: 24, padding: '36px 32px',
        border: `1px solid ${service.color}20`,
        transition: 'all 0.35s ease',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? `0 16px 50px ${service.color}20` : '0 2px 12px rgba(0,0,0,0.04)',
        cursor: 'default',
      }}
      className={`scroll-reveal scroll-reveal-delay-${delay + 1}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: 60, height: 60, borderRadius: 16,
        background: hovered ? `${service.color}25` : `${service.color}15`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: service.color, marginBottom: 20, transition: 'background 0.3s',
      }}>
        {service.icon}
      </div>
      <h3 style={{ fontFamily: font.serif, fontSize: '1.25rem', fontWeight: 600, color: C.brown, margin: '0 0 10px' }}>{service.title}</h3>
      <p style={{ fontFamily: font.sans, fontSize: '0.95rem', color: C.brownLight, lineHeight: 1.7, margin: '0 0 20px', fontWeight: 300 }}>{service.desc}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: service.color, fontFamily: font.sans, fontSize: '0.85rem', fontWeight: 600, opacity: hovered ? 1 : 0, transition: 'opacity 0.3s' }}>
        En savoir plus
        <Icon.ArrowRight size={14} />
      </div>
    </div>
  );
}

// ─── TÉMOIGNAGES ──────────────────────────────────────────────────────────────
function Temoignages() {
  return (
    <section style={{ padding: '100px 24px', background: C.white, overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="scroll-reveal">
          <SectionTag color={C.sage}>Ce qu'ils disent</SectionTag>
          <h2 style={{ fontFamily: font.serif, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: C.brown, margin: '0 0 56px', letterSpacing: '-0.02em' }}>
            Ils nous font <span style={{ color: C.terracotta, fontStyle: 'italic' }}>confiance</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }} className="temo-grid">
          {TEMOIGNAGES.map((t, i) => <TemoCard key={t.name} temo={t} delay={i} />)}
        </div>

        {/* Trust badges */}
        <div style={{ marginTop: 60, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }} className="scroll-reveal">
          {[
            { icon: '🏠', label: '+20 logements gérés' },
            { icon: '⭐', label: '4.9/5 note moyenne' },
            { icon: '🔒', label: 'Assurance incluse' },
            { icon: '📊', label: 'Rapport mensuel' },
          ].map((b) => (
            <div key={b.label} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: C.cream, border: `1px solid ${C.sand}60`,
              borderRadius: 50, padding: '10px 20px',
              fontFamily: font.sans, fontSize: '0.88rem', color: C.brownLight, fontWeight: 500,
            }}>
              <span style={{ fontSize: '1.1rem' }}>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .temo-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; } }
      `}</style>
    </section>
  );
}

function TemoCard({ temo, delay }) {
  return (
    <div
      className={`scroll-reveal scroll-reveal-delay-${delay + 1}`}
      style={{ background: C.cream, borderRadius: 24, padding: '36px 30px', border: `1px solid ${C.sand}50`, position: 'relative', transition: 'transform 0.3s, box-shadow 0.3s' }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 16px 40px ${C.sand}50`; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{ position: 'absolute', top: 20, right: 20, opacity: 0.25 }}>
        <svg viewBox="0 0 24 24" fill={C.sandLight} style={{ width: 40, height: 40 }}>
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>
      <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
        {[...Array(temo.rating)].map((_, i) => <Icon.Star key={i} filled size={16} />)}
      </div>
      <p style={{ fontFamily: font.sans, fontSize: '0.95rem', lineHeight: 1.75, color: C.brownLight, margin: '0 0 24px', fontStyle: 'italic', fontWeight: 300 }}>
        "{temo.text}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, borderTop: `1px solid ${C.sand}40`, paddingTop: 20 }}>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: `linear-gradient(135deg, ${C.terracotta}, ${C.terracottaDark})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.white, fontFamily: font.serif, fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>
          {temo.initials}
        </div>
        <div>
          <div style={{ fontFamily: font.sans, fontWeight: 600, fontSize: '0.95rem', color: C.brown }}>{temo.name}</div>
          <div style={{ fontFamily: font.sans, fontSize: '0.78rem', color: C.sand, marginTop: 2 }}>{temo.logement}</div>
        </div>
      </div>
    </div>
  );
}

// ─── CTA SECTION ──────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section style={{
      padding: '80px 24px',
      background: `linear-gradient(135deg, ${C.brown} 0%, #3D3228 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: `${C.terracotta}15`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, left: -60, width: 200, height: 200, borderRadius: '50%', background: `${C.sage}15`, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative' }} className="scroll-reveal">
        <div style={{
          display: 'inline-block', background: `${C.terracotta}25`, color: C.terracotta,
          fontFamily: font.sans, fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', padding: '6px 14px', borderRadius: 50, marginBottom: 20,
          border: `1px solid ${C.terracotta}30`,
        }}>
          Passez à l'action
        </div>
        <h2 style={{ fontFamily: font.serif, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: C.sandLight, margin: '0 0 20px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
          Prêt à déléguer la gestion<br />
          <span style={{ color: C.terracotta, fontStyle: 'italic' }}>sans perdre en revenus ?</span>
        </h2>
        <p style={{ fontFamily: font.sans, fontSize: '1.05rem', color: C.sand, lineHeight: 1.7, margin: '0 0 36px', fontWeight: 300 }}>
          Un premier échange de 15 min suffit pour évaluer le potentiel de votre bien. Sans engagement, sans frais cachés.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
          <BtnPrimary href="tel:+33600000000" icon={<Icon.Phone />}>Appeler maintenant</BtnPrimary>
          <BtnSage href="#formulaire" icon={<Icon.ClipboardList />}>Formulaire propriétaire</BtnSage>
        </div>
      </div>
    </section>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function AccueilPage() {
  useFonts();
  useScrollReveal();

  return (
    <div style={{ fontFamily: font.sans, background: C.cream, minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <Presentation />
        <ServicesSection />
        <Temoignages />
        <CTASection />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}
