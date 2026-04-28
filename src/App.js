import React, { useState, useEffect, useRef } from "react";
import logoSvg from "./logo.svg";
import bxPhoto from "./bx.jpg";
import chateau from "./chateau.jpg" ;
import interieur from "./interieur.jpg" ;
import merignac from "./merignac.jpg"
import talence from "./talence.png"
import chambre from "./chambre.jpg"
/* ═══════════════════════════════════════
   LOKKA — Site Complet
   Conciergerie & Sous-location · Bordeaux
   ═══════════════════════════════════════ */

const C = {
  cream: "#F5F0E8", warmWhite: "#FAFAF5", beige: "#E8DFD0", sand: "#C4B39A",
  terra: "#B87333", sage: "#7A8B6F", sageDark: "#5C6B52",
  dark: "#2C2C2C", darkSoft: "#4A4A45", white: "#FFFFFF",
};

const PHONE = "tel:+33783376293";
const PHONE_DISPLAY = "+33 6 83 37 62 93";
const EMAIL = "loya.conciergerie@gmail.com";

const IMG = {
  hero: interieur,
  salon: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  chambre: merignac,
  salon2: talence,
  sdb: chambre,
 bordeaux: bxPhoto,
bordeaux2: chateau,
cozy: chambre,
};

// ── Animation scroll ──
function FadeIn({ children, delay = 0, style = {} }) {
  const [v, setV] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (<div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`, ...style }}>{children}</div>);
}

// ── Icônes ──
const Ico = {
  Phone: ({s=18}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Mail: ({s=18}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Check: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.sage} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Pin: ({s=16}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Menu: () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  X: () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Home: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Key: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>,
  Sparkle: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>,
  Chart: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  Shield: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  TrendUp: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  Clock: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Users: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Heart: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  AlertCircle: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  Sun: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  Eye: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
};

// ── Bouton CTA ──
function Btn({ href, onClick, children, bg, color = C.white, border, style = {} }) {
  const base = { display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 12, fontSize: 15, fontWeight: 600, fontFamily: "'DM Sans',sans-serif", cursor: "pointer", transition: "transform 0.2s", background: bg || C.sage, color, border: border || "none", boxShadow: `0 2px 12px ${bg || C.sage}30`, textDecoration: "none", ...style };
  if (href) return <a href={href} style={base}>{children}</a>;
  return <div onClick={onClick} style={base}>{children}</div>;
}

// ══════════ HEADER ══════════
function Header({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const goTo = (p) => { setPage(p); setMenuOpen(false); window.scrollTo({ top: 0 }); };
  const links = [{ id: "accueil", label: "Accueil" }, { id: "services", label: "Services" }, { id: "contact", label: "Contact" }];

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: scrolled ? "rgba(245,240,232,0.96)" : "transparent", backdropFilter: scrolled ? "blur(14px)" : "none", borderBottom: scrolled ? `1px solid ${C.beige}` : "1px solid transparent", transition: "all 0.4s" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div onClick={() => goTo("accueil")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 42, height: 42, overflow: "hidden", flexShrink: 0 }}>
            <img src={logoSvg} alt="" style={{ height: 42, width: "auto" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: scrolled ? C.dark : C.white, letterSpacing: "-0.3px", lineHeight: 1, textShadow: scrolled ? "none" : "0 1px 6px rgba(0,0,0,0.45)" }}>Loya</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, color: scrolled ? C.sageDark : "rgba(255,255,255,0.88)", letterSpacing: "2.5px", textTransform: "uppercase", lineHeight: 1, textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.5)" }}>Conciergerie · Bordeaux</span>
          </div>
        </div>
        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map(n => (<span key={n.id} onClick={() => goTo(n.id)} style={{ fontSize: 14, fontWeight: 500, cursor: "pointer", color: page === n.id ? C.terra : C.darkSoft, borderBottom: page === n.id ? `2px solid ${C.terra}` : "2px solid transparent", paddingBottom: 4, transition: "all 0.3s" }}>{n.label}</span>))}
          <Btn href={PHONE} bg={C.sage} style={{ padding: "10px 20px", fontSize: 13 }}><Ico.Phone s={15}/> Appeler</Btn>
        </nav>
        <div className="nav-burger" style={{ display: "none", cursor: "pointer" }} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <Ico.X/> : <Ico.Menu/>}</div>
      </div>
      {menuOpen && (
        <div style={{ position: "fixed", top: 72, left: 0, right: 0, bottom: 0, background: C.cream, padding: "40px 24px", zIndex: 999, display: "flex", flexDirection: "column", gap: 28 }}>
          {links.map(n => (<span key={n.id} onClick={() => goTo(n.id)} style={{ fontFamily: "'Playfair Display',serif", fontSize: 30, fontWeight: 600, color: page === n.id ? C.terra : C.dark, cursor: "pointer" }}>{n.label}</span>))}
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <Btn href={PHONE} bg={C.sage} style={{ flex: 1, justifyContent: "center", padding: 16 }}><Ico.Phone s={15}/> Appeler</Btn>
            <Btn onClick={() => goTo("contact")} bg={C.terra} style={{ flex: 1, justifyContent: "center", padding: 16 }}><Ico.Mail s={15}/> Formulaire</Btn>
          </div>
        </div>
      )}
      <style>{`@media(max-width:768px){.nav-desktop{display:none!important}.nav-burger{display:block!important}}`}</style>
    </header>
  );
}

// ══════════ STICKY CTA MOBILE ══════════
function StickyCTA({ setPage }) {
  return (
    <div>
      <div className="sticky-cta" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999, background: "rgba(245,240,232,0.97)", backdropFilter: "blur(12px)", borderTop: `1px solid ${C.beige}`, padding: "10px 16px", display: "none", gap: 10 }}>
        <Btn href={PHONE} bg={C.sage} style={{ flex: 1, justifyContent: "center", padding: "13px 6px", fontSize: 14, borderRadius: 10 }}><Ico.Phone s={15}/> Appeler</Btn>
        <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} bg={C.terra} style={{ flex: 1, justifyContent: "center", padding: "13px 6px", fontSize: 14, borderRadius: 10 }}><Ico.Mail s={15}/> Formulaire</Btn>
      </div>
      <style>{`@media(max-width:768px){.sticky-cta{display:flex!important}}`}</style>
    </div>
  );
}

// ══════════ FOOTER ══════════
function Footer({ setPage }) {
  const goTo = (p) => { setPage(p); window.scrollTo({ top: 0 }); };
  return (
    <footer style={{ background: C.dark, padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48, marginBottom: 48 }}>
          <div style={{ flex: "1 1 280px" }}>
            <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 700, color: C.cream }}>Loya</span>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: C.sand, maxWidth: 300, marginTop: 16 }}>Conciergerie Bordeaux & sous-location professionnelle. Gestion locative courte durée pour propriétaires bordelais.</p>
          </div>
          <div style={{ flex: "1 1 140px" }}>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: C.cream, letterSpacing: 1.5, marginBottom: 18, textTransform: "uppercase" }}>Navigation</h4>
            {["accueil","services","contact"].map(p => (<div key={p} onClick={() => goTo(p)} style={{ fontSize: 14, color: C.sand, cursor: "pointer", marginBottom: 12 }}>{p.charAt(0).toUpperCase()+p.slice(1)}</div>))}
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: C.cream, letterSpacing: 1.5, marginBottom: 18, textTransform: "uppercase" }}>Contact</h4>
            <p style={{ fontSize: 14, color: C.sand, lineHeight: 2 }}>Bordeaux & alentours<br/>{PHONE_DISPLAY}<br/>{EMAIL}</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(196,179,154,0.15)", paddingTop: 24, textAlign: "center", fontSize: 12, color: "rgba(196,179,154,0.4)" }}>© 2026 Loya — Tous droits réservés</div>
      </div>
    </footer>
  );
}

// ══════════ PAGE ACCUEIL ══════════
function PageAccueil({ setPage }) {
  const problemes = [
    { icon: <Ico.Clock s={24}/>, title: "Gestion chronophage", desc: "Annonces, check-in, ménage... La gestion locative courte durée à Bordeaux peut vite devenir un second travail." },
    { icon: <Ico.AlertCircle s={24}/>, title: "Vacance locative", desc: "Un logement vide, c'est un loyer perdu. Chaque nuit non réservée pèse sur votre rentabilité." },
    { icon: <Ico.Chart s={24}/>, title: "Revenus sous-optimisés", desc: "Sans bonne stratégie tarifaire, votre location Airbnb Bordeaux ne rapporte pas ce qu'elle pourrait." },
    { icon: <Ico.Heart s={24}/>, title: "Charge mentale", desc: "Imprévus, réclamations, entretien à distance... La pression s'accumule et vous épuise." },
  ];

  const valeurs = [
    { icon: <Ico.Shield s={28}/>, title: "Sérénité totale", desc: "Nous gérons tout à votre place. Conciergerie Bordeaux complète, sans que vous ayez à intervenir." },
    { icon: <Ico.TrendUp s={28}/>, title: "Revenus optimisés", desc: "Tarification dynamique, taux d'occupation maximisé : votre location Airbnb Bordeaux performe vraiment." },
    { icon: <Ico.Eye s={28}/>, title: "Transparence", desc: "Suivi clair, aucun frais caché, communication directe. On vous tient informé à chaque étape." },
    { icon: <Ico.Users s={28}/>, title: "Service professionnel", desc: "On gère votre bien comme si c'était le nôtre. Rigoureux, soigné, fiable." },
  ];

  return (<div>
    {/* ── HERO ── */}
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <img src={IMG.hero} alt="Intérieur chaleureux" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(44,44,44,0.75) 0%, rgba(44,44,44,0.4) 60%, rgba(44,44,44,0.15) 100%)" }}/>
      </div>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "120px 24px 80px", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", padding: "8px 20px", borderRadius: 50, marginBottom: 28, border: "1px solid rgba(255,255,255,0.2)" }}>
            <Ico.Pin s={14}/><span style={{ fontSize: 12, color: C.white, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Bordeaux & alentours</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(34px,6vw,54px)", fontWeight: 700, color: C.white, lineHeight: 1.15, marginBottom: 20 }}>
            Conciergerie & sous-location<br/>professionnelle à <span style={{ color: "#D4956B", fontStyle: "italic" }}>Bordeaux</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, maxWidth: 500, marginBottom: 36 }}>
            Vous êtes propriétaire ? On gère tout. Revenus garantis, zéro stress, zéro gestion.
          </p>
        </FadeIn>
        <FadeIn delay={0.45}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Btn href={PHONE} bg={C.sage} style={{ boxShadow: "0 4px 20px rgba(122,139,111,0.4)" }}><Ico.Phone/> Appeler maintenant</Btn>
            <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} bg={C.terra} style={{ boxShadow: "0 4px 20px rgba(184,115,51,0.4)" }}><Ico.Mail/> Formulaire propriétaires</Btn>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ── SECTION PROBLÈMES ── */}
    <section style={{ padding: "100px 24px", background: C.warmWhite }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn><div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, color: C.terra, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Vous êtes propriétaire ?</span>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,4vw,38px)", fontWeight: 700, color: C.dark, marginTop: 12 }}>Vous connaissez ces <span style={{ color: C.terra, fontStyle: "italic" }}>difficultés</span></h2>
        </div></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 20 }}>
          {problemes.map((p,i) => (
            <FadeIn key={i} delay={i*0.1}><div style={{ background: C.white, borderRadius: 20, padding: "32px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", borderLeft: `4px solid ${C.terra}30` }}>
              <div style={{ color: C.terra, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 600, color: C.dark, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: C.darkSoft, lineHeight: 1.6 }}>{p.desc}</p>
            </div></FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTION BORDEAUX ── */}
    <section style={{ padding: "100px 24px", background: C.cream }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
        <FadeIn style={{ flex: "1 1 420px" }}>
          <div style={{ borderRadius: 20, overflow: "hidden", position: "relative" }}>
            <img src={IMG.bordeaux} alt="Bordeaux, Place de la Bourse" style={{ width: "100%", height: 400, objectFit: "cover", display: "block" }}/>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} style={{ flex: "1 1 360px" }}>
          <span style={{ fontSize: 12, color: C.sage, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Pourquoi Bordeaux</span>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,4vw,34px)", fontWeight: 700, color: C.dark, lineHeight: 1.25, marginTop: 12, marginBottom: 16 }}>
            Une ville qui <span style={{ color: C.terra, fontStyle: "italic" }}>attire</span>
          </h2>
          <p style={{ fontSize: 16, color: C.darkSoft, lineHeight: 1.8, marginBottom: 16 }}>
            Patrimoine UNESCO, gastronomie, vignobles : Bordeaux est l'une des villes les plus demandées en location Airbnb en France. Le marché de la gestion locative courte durée Bordeaux est en pleine croissance.
          </p>
          <p style={{ fontSize: 16, color: C.darkSoft, lineHeight: 1.8 }}>
            Appartement en centre-ville ou maison en périphérie — votre bien a un potentiel que nous savons exploiter.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* ── SECTION 2 SERVICES ── */}
    <section style={{ padding: "100px 24px", background: C.warmWhite }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn><div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, color: C.sage, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Nos solutions</span>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,4vw,38px)", fontWeight: 700, color: C.dark, marginTop: 12 }}>Deux offres, <span style={{ color: C.terra, fontStyle: "italic" }}>un même objectif</span></h2>
          <p style={{ fontSize: 16, color: C.darkSoft, marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>Maximiser vos revenus tout en vous libérant de toute contrainte.</p>
        </div></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 28 }}>
          {/* Sous-location */}
          <FadeIn delay={0.1}>
            <div style={{ background: C.white, borderRadius: 24, padding: "40px 32px", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", height: "100%", borderTop: `4px solid ${C.terra}` }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: `${C.terra}12`, display: "flex", alignItems: "center", justifyContent: "center", color: C.terra, marginBottom: 20 }}><Ico.Home s={28}/></div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: C.dark, marginBottom: 12 }}>Sous-location professionnelle Bordeaux</h3>
              <p style={{ fontSize: 15, color: C.darkSoft, lineHeight: 1.7, marginBottom: 20 }}>Un loyer garanti chaque mois, sans aucune gestion de votre part. Nous assurons la gestion locative courte durée Bordeaux via un contrat professionnel sécurisé.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Loyer garanti mensuel", "Zéro vacance locative", "Gestion complète prise en charge", "Contrat professionnel sécurisé", "Stabilité financière", "Mise en valeur du logement"].map((t,i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}><Ico.Check/><span style={{ fontSize: 14, color: C.dark }}>{t}</span></div>
                ))}
              </div>
            </div>
          </FadeIn>
          {/* Conciergerie */}
          <FadeIn delay={0.2}>
            <div style={{ background: C.white, borderRadius: 24, padding: "40px 32px", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", height: "100%", borderTop: `4px solid ${C.sage}` }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: `${C.sage}15`, display: "flex", alignItems: "center", justifyContent: "center", color: C.sage, marginBottom: 20 }}><Ico.Key s={28}/></div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: C.dark, marginBottom: 12 }}>Conciergerie Bordeaux</h3>
              <p style={{ fontSize: 15, color: C.darkSoft, lineHeight: 1.7, marginBottom: 20 }}>Gestion complète de votre location Airbnb Bordeaux. De l'accueil des voyageurs à l'optimisation de vos revenus, nous prenons tout en main.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Check-in / check-out voyageurs", "Ménage & linge de qualité", "Optimisation des revenus", "Gestion Airbnb complète", "Communication voyageurs", "Amélioration de la rentabilité"].map((t,i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}><Ico.Check/><span style={{ fontSize: 14, color: C.dark }}>{t}</span></div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── SECTION VALEURS ── */}
    <section style={{ padding: "100px 24px", background: C.cream }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn><div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,4vw,38px)", fontWeight: 700, color: C.dark }}>Ce que nous vous <span style={{ color: C.terra, fontStyle: "italic" }}>apportons</span></h2>
        </div></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 24 }}>
          {valeurs.map((v,i) => (
            <FadeIn key={i} delay={i*0.1}><div style={{ textAlign: "center", padding: "32px 20px" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: `${C.sage}12`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", color: C.sage }}>{v.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 600, color: C.dark, marginBottom: 8 }}>{v.title}</h3>
              <p style={{ fontSize: 14, color: C.darkSoft, lineHeight: 1.6 }}>{v.desc}</p>
            </div></FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── IMAGE BIEN ── */}
    <section style={{ padding: "0 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
        <FadeIn><div style={{ borderRadius: 20, overflow: "hidden", height: 260 }}><img src={IMG.salon2} alt="Salon cosy" style={{ width: "100%", height: "100%", objectFit: "cover" }}/></div></FadeIn>
        <FadeIn delay={0.1}><div style={{ borderRadius: 20, overflow: "hidden", height: 260 }}><img src={IMG.chambre} alt="Chambre lumineuse" style={{ width: "100%", height: "100%", objectFit: "cover" }}/></div></FadeIn>
        <FadeIn delay={0.2}><div style={{ borderRadius: 20, overflow: "hidden", height: 260 }}><img src={IMG.cozy} alt="Espace détente" style={{ width: "100%", height: "100%", objectFit: "cover" }}/></div></FadeIn>
      </div>
    </section>

    {/* ── CTA FINAL ── */}
    <section style={{ padding: "80px 24px", textAlign: "center", background: `linear-gradient(135deg, ${C.sageDark} 0%, ${C.sage} 100%)`, marginTop: 80 }}>
      <FadeIn>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,4vw,36px)", fontWeight: 700, color: C.white, marginBottom: 16 }}>Propriétaire à Bordeaux ? Parlons-en.</h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", maxWidth: 460, margin: "0 auto 32px" }}>Sous-location professionnelle ou conciergerie Bordeaux — on vous explique ce qui correspond le mieux à votre situation. Gratuit, sans engagement.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
          <Btn href={PHONE} bg={C.white} color={C.sageDark}><Ico.Phone/> Appeler maintenant</Btn>
          <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} bg="transparent" color={C.white} border="2px solid rgba(255,255,255,0.5)" style={{ boxShadow: "none" }}><Ico.Mail/> Remplir le formulaire</Btn>
        </div>
      </FadeIn>
    </section>
  </div>);
}

// ══════════ PAGE SERVICES ══════════
function PageServices({ setPage }) {
  const avSubloc = [
    "Loyer garanti chaque mois",
    "Aucun frais de gestion ou de saisonnalité",
    "Revenus stables et sécurisés",
    "Gestion complète du logement prise en charge",
    "Mise en valeur de votre bien",
    "Contrat professionnel encadré",
    "Zéro stress locatif",
  ];
  const avConciergerie = [
    "Check-in / check-out des voyageurs",
    "Gestion des ménages et du linge",
    "Communication avec les voyageurs",
    "Optimisation des prix et des revenus",
    "Meilleure rentabilité du logement",
    "Gestion complète et sans stress",
  ];

  return (<div>
    {/* HERO */}
    <section style={{ padding: "140px 24px 80px", background: `linear-gradient(170deg, ${C.cream} 0%, ${C.beige} 100%)`, textAlign: "center" }}>
      <FadeIn>
        <span style={{ fontSize: 12, color: C.sage, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Nos services</span>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: C.dark, marginTop: 12, marginBottom: 20 }}>
          Sous-location & conciergerie<br/><span style={{ color: C.terra, fontStyle: "italic" }}>à Bordeaux</span>
        </h1>
        <p style={{ fontSize: 17, color: C.darkSoft, lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>Deux services pensés pour les propriétaires bordelais. Simples, professionnels, adaptés à votre situation.</p>
      </FadeIn>
    </section>

    {/* ── SOUS-LOCATION PRO ── */}
    <section style={{ padding: "100px 24px", background: C.warmWhite }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center", marginBottom: 48 }}>
            <div style={{ flex: "1 1 380px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.terra}10`, padding: "8px 18px", borderRadius: 50, marginBottom: 20 }}>
                <Ico.Home s={16}/><span style={{ fontSize: 12, color: C.terra, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Service 1</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,4vw,36px)", fontWeight: 700, color: C.dark, lineHeight: 1.25, marginBottom: 16 }}>
                Sous-location professionnelle <span style={{ color: C.terra, fontStyle: "italic" }}>Bordeaux</span>
              </h2>
              <p style={{ fontSize: 16, color: C.darkSoft, lineHeight: 1.8, marginBottom: 8 }}>
                Vous nous confiez votre logement via un bail professionnel. Nous assurons la gestion locative courte durée Bordeaux à votre place : annonces, voyageurs, ménage. Vous percevez un loyer fixe chaque mois, garanti.
              </p>
              <p style={{ fontSize: 16, color: C.darkSoft, lineHeight: 1.8 }}>
                Pas de vacance locative. Pas de gestion. Juste des revenus réguliers et un bien entretenu avec soin.
              </p>
            </div>
            <div style={{ flex: "1 1 360px", borderRadius: 20, overflow: "hidden" }}>
              <img src={IMG.salon} alt="Salon lumineux et soigné" style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}/>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ background: C.white, borderRadius: 24, padding: "40px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.04)", borderLeft: `4px solid ${C.terra}` }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: C.dark, marginBottom: 24 }}>Vos avantages</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 14 }}>
              {avSubloc.map((a,i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0" }}>
                  <div style={{ minWidth: 28, height: 28, borderRadius: 8, background: `${C.terra}10`, display: "flex", alignItems: "center", justifyContent: "center" }}><Ico.Check/></div>
                  <span style={{ fontSize: 15, color: C.dark, fontWeight: 500 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ── CONCIERGERIE ── */}
    <section style={{ padding: "100px 24px", background: C.cream }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center", marginBottom: 48, flexDirection: "row-reverse" }}>
            <div style={{ flex: "1 1 380px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.sage}12`, padding: "8px 18px", borderRadius: 50, marginBottom: 20 }}>
                <Ico.Key s={16}/><span style={{ fontSize: 12, color: C.sageDark, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Service 2</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,4vw,36px)", fontWeight: 700, color: C.dark, lineHeight: 1.25, marginBottom: 16 }}>
                Conciergerie <span style={{ color: C.sageDark, fontStyle: "italic" }}>Bordeaux</span>
              </h2>
              <p style={{ fontSize: 16, color: C.darkSoft, lineHeight: 1.8, marginBottom: 8 }}>
                Vous restez maître de votre calendrier. Nous prenons en charge l'intégralité de la gestion locative courte durée Bordeaux : annonces, accueil voyageurs, ménage, linge, communication.
              </p>
              <p style={{ fontSize: 16, color: C.darkSoft, lineHeight: 1.8 }}>
                Résultat : une location Airbnb Bordeaux qui tourne sans effort de votre part, avec des revenus optimisés.
              </p>
            </div>
            <div style={{ flex: "1 1 360px", borderRadius: 20, overflow: "hidden" }}>
              <img src={IMG.chambre} alt="Chambre confortable et soignée" style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}/>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ background: C.white, borderRadius: 24, padding: "40px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.04)", borderLeft: `4px solid ${C.sage}` }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: C.dark, marginBottom: 24 }}>Vos avantages</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 14 }}>
              {avConciergerie.map((a,i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0" }}>
                  <div style={{ minWidth: 28, height: 28, borderRadius: 8, background: `${C.sage}12`, display: "flex", alignItems: "center", justifyContent: "center" }}><Ico.Check/></div>
                  <span style={{ fontSize: 15, color: C.dark, fontWeight: 500 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* CTA */}
    <section style={{ padding: "80px 24px", textAlign: "center", background: `linear-gradient(135deg, ${C.sageDark} 0%, ${C.sage} 100%)` }}>
      <FadeIn>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,4vw,34px)", fontWeight: 700, color: C.white, marginBottom: 16 }}>Propriétaire à Bordeaux ? Parlons de votre projet.</h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", maxWidth: 460, margin: "0 auto 32px" }}>Sous-location professionnelle ou conciergerie Bordeaux — on vous guide vers la meilleure option. Premier échange gratuit.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
          <Btn href={PHONE} bg={C.white} color={C.sageDark}><Ico.Phone/> Appeler maintenant</Btn>
          <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} bg="transparent" color={C.white} border="2px solid rgba(255,255,255,0.5)" style={{ boxShadow: "none" }}><Ico.Mail/> Remplir le formulaire</Btn>
        </div>
      </FadeIn>
    </section>
  </div>);
}

// ══════════ PAGE CONTACT ══════════
function PageContact() {
  const [form, setForm] = useState({ nom:"", prenom:"", tel:"", email:"", adresse:"", ville:"", type:"", pieces:"", dates:"", message:"", photos: null });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await fetch("https://n8n.srv980557.hstgr.cloud/webhook/formulaire-lokka", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom: form.nom,
        prenom: form.prenom,
        tel: form.tel,
        email: form.email,
        adresse: form.adresse,
        ville: form.ville,
        type: form.type,
        pieces: form.pieces,
        dates: form.dates,
        message: form.message
      })
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  } catch (err) {
    console.error("Erreur envoi formulaire:", err);
  }
};  const inp = { width: "100%", padding: "14px 18px", borderRadius: 12, background: C.warmWhite, border: `1.5px solid ${C.beige}`, fontSize: 15, color: C.dark, transition: "border-color 0.3s" };
  const lab = { fontSize: 13, fontWeight: 600, color: C.darkSoft, marginBottom: 6, display: "block" };

  return (<div>
    {/* HERO CONTACT */}
    <section style={{ position: "relative", padding: "140px 24px 80px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <img src={IMG.bordeaux} alt="Bordeaux" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(44,44,44,0.7) 0%, rgba(44,44,44,0.5) 100%)" }}/>
      </div>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <FadeIn>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Contact</span>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: C.white, marginTop: 12, marginBottom: 16 }}>
            Parlons de <span style={{ fontStyle: "italic" }}>votre logement</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", maxWidth: 480, margin: "0 auto" }}>Conciergerie ou sous-location professionnelle à Bordeaux — réponse sous 24h, sans engagement.</p>
        </FadeIn>
      </div>
    </section>

    {/* FORMULAIRE + INFOS */}
    <section style={{ padding: "80px 24px 100px", background: C.warmWhite }}>
      <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 48 }}>

        {/* FORMULAIRE */}
        <FadeIn style={{ flex: "1 1 560px" }}>
          <div style={{ background: C.white, borderRadius: 24, padding: "40px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 700, color: C.dark, marginBottom: 8 }}>Formulaire propriétaires</h2>
            <p style={{ fontSize: 14, color: C.darkSoft, marginBottom: 28 }}>Tous les champs marqués * sont obligatoires.</p>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${C.sage}20`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}><Ico.Check/></div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: C.dark, marginBottom: 8 }}>Demande envoyée !</h3>
                <p style={{ fontSize: 15, color: C.darkSoft }}>Nous vous recontactons très vite.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
                  <div><label style={lab}>Nom *</label><input name="nom" value={form.nom} onChange={handleChange} required placeholder="Dupont" style={inp}/></div>
                  <div><label style={lab}>Prénom *</label><input name="prenom" value={form.prenom} onChange={handleChange} required placeholder="Marie" style={inp}/></div>
                  <div><label style={lab}>Téléphone *</label><input name="tel" type="tel" value={form.tel} onChange={handleChange} required placeholder="06 00 00 00 00" style={inp}/></div>
                  <div><label style={lab}>Email *</label><input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="marie@exemple.fr" style={inp}/></div>
                  <div><label style={lab}>Adresse du logement *</label><input name="adresse" value={form.adresse} onChange={handleChange} required placeholder="12 rue Sainte-Catherine" style={inp}/></div>
                  <div><label style={lab}>Ville *</label><input name="ville" value={form.ville} onChange={handleChange} required placeholder="Bordeaux" style={inp}/></div>
                  <div><label style={lab}>Type de logement *</label>
                    <select name="type" value={form.type} onChange={handleChange} required style={{ ...inp, appearance: "auto" }}>
                      <option value="">Sélectionnez</option><option value="appartement">Appartement</option><option value="maison">Maison</option><option value="studio">Studio</option><option value="autre">Autre</option>
                    </select>
                  </div>
                  <div><label style={lab}>Nombre de pièces</label>
                    <select name="pieces" value={form.pieces} onChange={handleChange} style={{ ...inp, appearance: "auto" }}>
                      <option value="">Sélectionnez</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6+</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginTop: 20 }}><label style={lab}>Dates de disponibilité</label><input name="dates" value={form.dates} onChange={handleChange} placeholder="Ex : à partir de juin 2026" style={inp}/></div>
                <div style={{ marginTop: 20 }}><label style={lab}>Message / Précisions</label><textarea name="message" value={form.message} onChange={handleChange} placeholder="Décrivez votre projet ou posez-nous vos questions..." rows={4} style={{ ...inp, resize: "vertical" }}/></div>
                <div style={{ marginTop: 20 }}>
                  <label style={lab}>Photos du logement (optionnel)</label>
                  <div style={{ border: `2px dashed ${C.beige}`, borderRadius: 12, padding: "24px 18px", textAlign: "center", background: C.warmWhite, cursor: "pointer", position: "relative" }}>
                    <input type="file" multiple accept="image/*" onChange={(e) => setForm({...form, photos: e.target.files})} style={{ position: "absolute", inset: 0, opacity: 0, cursor: "pointer" }}/>
                    <div style={{ color: C.sage, marginBottom: 8 }}><Ico.Home s={28}/></div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: C.dark }}>Cliquez ou glissez vos photos ici</p>
                    <p style={{ fontSize: 12, color: C.sand, marginTop: 4 }}>JPG, PNG — 5 Mo max par photo</p>
                    {form.photos && <p style={{ fontSize: 13, color: C.sage, fontWeight: 600, marginTop: 8 }}>{form.photos.length} photo(s) sélectionnée(s)</p>}
                  </div>
                </div>
                <div style={{ marginTop: 28 }}>
                  <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "16px", borderRadius: 12, background: C.terra, color: C.white, fontSize: 16, fontWeight: 700, cursor: "pointer", border: "none", boxShadow: `0 4px 20px ${C.terra}40`, transition: "transform 0.2s" }}>
                    Envoyer ma demande
                  </button>
                </div>
              </form>
            )}
          </div>
        </FadeIn>

        {/* COORDONNÉES */}
        <FadeIn delay={0.2} style={{ flex: "1 1 340px" }}>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: C.dark, marginBottom: 24 }}>Nous contacter</h3>

          <a href={PHONE} style={{ display: "flex", alignItems: "center", gap: 14, padding: "20px", background: C.sage, borderRadius: 16, marginBottom: 16, textDecoration: "none", boxShadow: `0 4px 16px ${C.sage}30` }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: C.white }}><Ico.Phone s={22}/></div>
            <div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Appeler maintenant</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: C.white, marginTop: 2 }}>{PHONE_DISPLAY}</div>
            </div>
          </a>

          <a href={"mailto:"+EMAIL} style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", background: C.white, borderRadius: 16, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.04)", textDecoration: "none" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.terra}10`, display: "flex", alignItems: "center", justifyContent: "center", color: C.terra }}><Ico.Mail s={20}/></div>
            <div>
              <div style={{ fontSize: 12, color: C.sand, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Email</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: C.dark }}>{EMAIL}</div>
            </div>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", background: C.white, borderRadius: 16, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.sage}12`, display: "flex", alignItems: "center", justifyContent: "center", color: C.sage }}><Ico.Pin s={20}/></div>
            <div>
              <div style={{ fontSize: 12, color: C.sand, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Zone d'intervention</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: C.dark }}>Bordeaux & alentours</div>
            </div>
          </div>

          <div style={{ padding: "18px 20px", background: C.white, borderRadius: 16, marginBottom: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.04)", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.terra}10`, display: "flex", alignItems: "center", justifyContent: "center", color: C.terra }}><Ico.Clock s={20}/></div>
            <div>
              <div style={{ fontSize: 12, color: C.sand, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Disponibilité</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: C.dark }}>Du lundi au samedi</div>
            </div>
          </div>

          {/* Image Bordeaux */}
          <div style={{ borderRadius: 20, overflow: "hidden" }}>
            <img src={IMG.bordeaux2} alt="Intérieur cosy" style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}/>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>);
}

// ══════════ APP PRINCIPAL ══════════
function App() {
  const [page, setPage] = useState("accueil");

  return (
    <div style={{ paddingBottom: 70 }}>
      <Header page={page} setPage={setPage}/>
      {page === "accueil" && <PageAccueil setPage={setPage}/>}
      {page === "services" && <PageServices setPage={setPage}/>}
      {page === "contact" && <PageContact/>}
      <Footer setPage={setPage}/>
      <StickyCTA setPage={setPage}/>
    </div>
  );
}

export default App;
