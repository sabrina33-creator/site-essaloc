import { useState, useEffect } from 'react';
import {
  C, font, useFonts, useScrollReveal,
  Header, Footer, StickyMobileBar,
  BtnPrimary, BtnSage, SectionTag, Icon,
} from './shared';

// ─── ICONS SPÉCIFIQUES CONTACT ────────────────────────────────────────────────
const ContactIcon = {
  WhatsApp: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  Clock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Send: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  Upload: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Map: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 40, height: 40, opacity: 0.4 }}>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  ),
};

// ─── FORM STATE ───────────────────────────────────────────────────────────────
const INITIAL = {
  nom: '', prenom: '', telephone: '', email: '',
  adresse: '', ville: '', typeLogement: '', nbPieces: '',
  dates: '', message: '', photos: null,
};

// ─── CHAMP GÉNÉRIQUE ──────────────────────────────────────────────────────────
function Field({ label, required, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{
        fontFamily: font.sans, fontSize: '0.85rem', fontWeight: 600,
        color: C.brownLight, letterSpacing: '0.02em',
      }}>
        {label}
        {required && <span style={{ color: C.terracotta, marginLeft: 3 }}>*</span>}
      </label>
      {children}
      {error && (
        <span style={{ fontFamily: font.sans, fontSize: '0.78rem', color: C.terracotta, marginTop: 2 }}>
          {error}
        </span>
      )}
    </div>
  );
}

const inputStyle = (focused, error) => ({
  width: '100%',
  padding: '13px 16px',
  fontFamily: font.sans, fontSize: '0.95rem', color: C.brown,
  background: focused ? C.white : `${C.white}CC`,
  border: `1.5px solid ${error ? C.terracotta : focused ? C.terracotta : C.sand}`,
  borderRadius: 12, outline: 'none',
  transition: 'all 0.25s ease',
  boxShadow: focused ? `0 0 0 3px ${C.terracotta}18` : 'none',
  boxSizing: 'border-box',
});

const selectStyle = (focused) => ({
  ...inputStyle(focused, false),
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234A4035' stroke-width='2' stroke-linecap='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 14px center',
  backgroundSize: '16px',
  paddingRight: 40,
  cursor: 'pointer',
});

function Input({ name, value, onChange, placeholder, type = 'text', error, autoComplete }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      style={inputStyle(focused, !!error)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function Select({ name, value, onChange, options, placeholder }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      style={{ ...selectStyle(focused), color: value ? C.brown : `${C.brownLight}99` }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}

function Textarea({ name, value, onChange, placeholder, rows = 4 }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      style={{ ...inputStyle(focused, false), resize: 'vertical', lineHeight: 1.6, minHeight: 110 }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

// ─── UPLOAD ZONE ─────────────────────────────────────────────────────────────
function UploadZone({ onChange, files }) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const dropped = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith('image/'));
    if (dropped.length) onChange(dropped);
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => document.getElementById('photo-input').click()}
      style={{
        border: `2px dashed ${dragging ? C.terracotta : C.sand}`,
        borderRadius: 16, padding: '28px 20px',
        background: dragging ? `${C.terracotta}08` : `${C.white}88`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10,
        cursor: 'pointer', transition: 'all 0.25s ease',
        minHeight: 120,
      }}
    >
      <input
        id="photo-input"
        type="file"
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        onChange={(e) => onChange(Array.from(e.target.files))}
      />

      {files && files.length > 0 ? (
        <>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {files.map((f, i) => (
              <div key={i} style={{
                width: 56, height: 56, borderRadius: 10,
                background: `${C.sage}20`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 3,
                border: `1px solid ${C.sage}40`,
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke={C.sage} strokeWidth="2" style={{ width: 18, height: 18 }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: font.sans, fontSize: '0.82rem', color: C.sage, fontWeight: 600, margin: 0 }}>
            {files.length} photo{files.length > 1 ? 's' : ''} sélectionnée{files.length > 1 ? 's' : ''}
          </p>
          <p style={{ fontFamily: font.sans, fontSize: '0.75rem', color: C.brownLight, margin: 0 }}>
            Cliquer pour modifier
          </p>
        </>
      ) : (
        <>
          <div style={{ color: C.sand }}><ContactIcon.Upload /></div>
          <p style={{ fontFamily: font.sans, fontSize: '0.88rem', fontWeight: 600, color: C.brownLight, margin: 0, textAlign: 'center' }}>
            Glissez vos photos ici ou cliquez pour parcourir
          </p>
          <p style={{ fontFamily: font.sans, fontSize: '0.76rem', color: C.sand, margin: 0 }}>
            JPG, PNG — Max 10 Mo par photo · Optionnel
          </p>
        </>
      )}
    </div>
  );
}

// ─── FORMULAIRE ───────────────────────────────────────────────────────────────
function Formulaire() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const validate = () => {
    const required = ['nom', 'prenom', 'telephone', 'email', 'adresse', 'ville', 'typeLogement'];
    const next = {};
    required.forEach((k) => { if (!form[k].trim()) next[k] = 'Ce champ est requis'; });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Email invalide';
    if (form.telephone && !/^[\d\s+\-().]{8,}$/.test(form.telephone)) next.telephone = 'Numéro invalide';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    setTimeout(() => { setSending(false); setSubmitted(true); }, 1600);
  };

  if (submitted) return <SuccessState />;

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {/* Section identité */}
      <FormSection label="Vos coordonnées" icon="👤">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-2col">
          <Field label="Nom" required error={errors.nom}>
            <Input name="nom" value={form.nom} onChange={handle} placeholder="Dupont" error={errors.nom} autoComplete="family-name" />
          </Field>
          <Field label="Prénom" required error={errors.prenom}>
            <Input name="prenom" value={form.prenom} onChange={handle} placeholder="Jean" error={errors.prenom} autoComplete="given-name" />
          </Field>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-2col">
          <Field label="Téléphone" required error={errors.telephone}>
            <Input name="telephone" value={form.telephone} onChange={handle} type="tel" placeholder="+33 6 00 00 00 00" error={errors.telephone} autoComplete="tel" />
          </Field>
          <Field label="Email" required error={errors.email}>
            <Input name="email" value={form.email} onChange={handle} type="email" placeholder="jean@email.com" error={errors.email} autoComplete="email" />
          </Field>
        </div>
      </FormSection>

      {/* Section logement */}
      <FormSection label="Votre logement" icon="🏠">
        <Field label="Adresse du logement" required error={errors.adresse}>
          <Input name="adresse" value={form.adresse} onChange={handle} placeholder="12 rue des Chartrons" error={errors.adresse} autoComplete="street-address" />
        </Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-2col">
          <Field label="Ville" required error={errors.ville}>
            <Input name="ville" value={form.ville} onChange={handle} placeholder="Bordeaux" error={errors.ville} autoComplete="address-level2" />
          </Field>
          <Field label="Type de logement" required error={errors.typeLogement}>
            <Select
              name="typeLogement" value={form.typeLogement} onChange={handle}
              placeholder="Choisir un type"
              options={[
                { value: 'appartement', label: 'Appartement' },
                { value: 'maison',      label: 'Maison' },
                { value: 'studio',      label: 'Studio' },
                { value: 'autre',       label: 'Autre' },
              ]}
            />
          </Field>
        </div>
        <Field label="Nombre de pièces">
          <Select
            name="nbPieces" value={form.nbPieces} onChange={handle}
            placeholder="Sélectionner"
            options={[
              { value: '1', label: '1 pièce' },
              { value: '2', label: '2 pièces' },
              { value: '3', label: '3 pièces' },
              { value: '4', label: '4 pièces' },
              { value: '5', label: '5 pièces' },
              { value: '6+', label: '6 pièces et plus' },
            ]}
          />
        </Field>
        <Field label="Disponibilité souhaitée">
          <Input
            name="dates" value={form.dates} onChange={handle}
            placeholder="Ex : disponible dès juin 2025, ou à partir du 15/07…"
          />
        </Field>
      </FormSection>

      {/* Section message */}
      <FormSection label="Message & photos" icon="💬">
        <Field label="Précisions, questions ou attentes">
          <Textarea
            name="message" value={form.message} onChange={handle} rows={5}
            placeholder="Décrivez votre bien, vos attentes, vos questions… Nous lisons chaque message avec attention."
          />
        </Field>
        <Field label="Photos de votre logement (optionnel)">
          <UploadZone
            files={form.photos}
            onChange={(files) => setForm((p) => ({ ...p, photos: files }))}
          />
        </Field>
      </FormSection>

      {/* Mentions */}
      <div style={{ padding: '0 0 24px', fontFamily: font.sans, fontSize: '0.78rem', color: C.brownLight, lineHeight: 1.6 }}>
        En soumettant ce formulaire, vous acceptez d'être recontacté par Essaloc concernant votre projet.
        Vos données ne sont jamais transmises à des tiers.
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={sending}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          width: '100%', padding: '16px 32px',
          background: sending
            ? C.sand
            : `linear-gradient(135deg, ${C.terracotta}, ${C.terracottaDark})`,
          color: C.white,
          fontFamily: font.sans, fontWeight: 700, fontSize: '1.05rem',
          letterSpacing: '0.02em', borderRadius: 14, border: 'none',
          cursor: sending ? 'wait' : 'pointer',
          boxShadow: sending ? 'none' : `0 6px 24px ${C.terracotta}45`,
          transition: 'all 0.3s ease',
          transform: sending ? 'none' : undefined,
        }}
        onMouseEnter={(e) => { if (!sending) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 10px 32px ${C.terracotta}55`; } }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `0 6px 24px ${C.terracotta}45`; }}
      >
        {sending ? (
          <>
            <Spinner />
            Envoi en cours…
          </>
        ) : (
          <>
            <ContactIcon.Send />
            Envoyer ma demande
          </>
        )}
      </button>
    </form>
  );
}

function FormSection({ label, icon, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        marginBottom: 20, paddingBottom: 12,
        borderBottom: `1px solid ${C.sand}50`,
      }}>
        <span style={{ fontSize: '1.1rem' }}>{icon}</span>
        <span style={{ fontFamily: font.sans, fontWeight: 700, fontSize: '0.9rem', color: C.brown, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          {label}
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {children}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" fill="none" style={{ width: 18, height: 18, animation: 'spin 0.8s linear infinite' }}>
      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
      <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </svg>
  );
}

function SuccessState() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '60px 40px', gap: 20, minHeight: 400,
    }}>
      <div style={{
        width: 80, height: 80, borderRadius: '50%',
        background: `linear-gradient(135deg, ${C.sage}, ${C.sageDark})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.white,
        boxShadow: `0 8px 32px ${C.sage}50`,
        animation: 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}>
        <ContactIcon.Check />
        <style>{`@keyframes popIn { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
      </div>
      <h3 style={{ fontFamily: font.serif, fontSize: '1.8rem', fontWeight: 700, color: C.brown, margin: 0 }}>
        Demande envoyée !
      </h3>
      <p style={{ fontFamily: font.sans, fontSize: '1rem', color: C.brownLight, lineHeight: 1.7, margin: 0, maxWidth: 360, fontWeight: 300 }}>
        Merci pour votre message. Nous vous recontacterons <strong>sous 24h</strong> pour discuter de votre projet.
      </p>
      <div style={{
        background: C.cream, borderRadius: 16, padding: '16px 24px',
        fontFamily: font.sans, fontSize: '0.88rem', color: C.brownLight,
        border: `1px solid ${C.sand}60`, marginTop: 8,
      }}>
        <span style={{ fontWeight: 600, color: C.brown }}>En attendant, appelez-nous directement :</span><br />
        <a href="tel:+33637149599" style={{ color: C.terracotta, fontWeight: 700, textDecoration: 'none', fontSize: '1.1rem' }}>
          +33 6 37 14 95 99
        </a>
      </div>
    </div>
  );
}

// ─── BLOC COORDONNÉES ─────────────────────────────────────────────────────────
function Coordonnees() {
  const CONTACTS = [
    {
      icon: <Icon.Phone size={20} />,
      label: 'Téléphone',
      value: '+33 6 37 14 95 99',
      href: 'tel:+33637149599',
      color: C.terracotta,
      cta: 'Appeler',
      ctaHref: 'tel:+33637149599',
    },
    {
      icon: <ContactIcon.WhatsApp />,
      label: 'WhatsApp',
      value: 'Chat direct disponible',
      href: 'https://wa.me/33637149599',
      color: '#25D366',
      cta: 'Écrire sur WhatsApp',
      ctaHref: 'https://wa.me/33637149599',
    },
    {
      icon: <Icon.Mail size={20} />,
      label: 'Email',
      value: 'contact.essaloc@gmail.com',
      href: 'mailto:contact.essaloc@gmail.com',
      color: C.sage,
      cta: null,
    },
    {
      icon: <Icon.MapPin size={20} />,
      label: 'Adresse',
      value: 'Bordeaux, Gironde (33)',
      href: null,
      color: C.sand,
      cta: null,
    },
    {
      icon: <ContactIcon.Clock />,
      label: 'Horaires',
      value: 'Lun – Sam · 9h00 – 19h00',
      href: null,
      color: C.brownLight,
      cta: null,
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }} className="scroll-reveal">
        <SectionTag color={C.sage}>Contact direct</SectionTag>
        <h2 style={{
          fontFamily: font.serif, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
          fontWeight: 700, color: C.brown, margin: '0 0 12px',
          letterSpacing: '-0.02em', lineHeight: 1.3,
        }}>
          Vous préférez<br />
          <span style={{ color: C.terracotta, fontStyle: 'italic' }}>nous appeler ?</span>
        </h2>
        <p style={{ fontFamily: font.sans, fontSize: '0.95rem', color: C.brownLight, lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
          Notre équipe est disponible du lundi au samedi pour répondre à toutes vos questions.
        </p>
      </div>

      {/* Contact items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
        {CONTACTS.map((c, i) => (
          <ContactItem key={c.label} item={c} delay={i} />
        ))}
      </div>

      {/* CTA rapide */}
      <div style={{
        background: `linear-gradient(135deg, ${C.terracotta}, ${C.terracottaDark})`,
        borderRadius: 20, padding: '28px 24px',
        display: 'flex', flexDirection: 'column', gap: 16,
      }} className="scroll-reveal">
        <div>
          <div style={{ fontFamily: font.serif, fontSize: '1.2rem', fontWeight: 700, color: C.white, marginBottom: 6 }}>
            Réponse garantie sous 24h
          </div>
          <div style={{ fontFamily: font.sans, fontSize: '0.88rem', color: `${C.white}CC`, lineHeight: 1.5, fontWeight: 300 }}>
            Formulaire, appel ou WhatsApp — choisissez ce qui vous convient.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a href="tel:+33637149599" style={{
            flex: 1, minWidth: 120,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            background: C.white, color: C.terracotta,
            fontFamily: font.sans, fontWeight: 700, fontSize: '0.9rem',
            padding: '12px 16px', borderRadius: 10, textDecoration: 'none',
            transition: 'all 0.2s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = C.cream; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = C.white; }}
          >
            <Icon.Phone size={16} /> Appeler
          </a>
          <a href="https://wa.me/33637149599" style={{
            flex: 1, minWidth: 120,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            background: `${C.white}20`, color: C.white,
            fontFamily: font.sans, fontWeight: 600, fontSize: '0.9rem',
            padding: '12px 16px', borderRadius: 10, textDecoration: 'none',
            border: `1.5px solid ${C.white}40`, transition: 'all 0.2s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = `${C.white}35`; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = `${C.white}20`; }}
          >
            <ContactIcon.WhatsApp /> WhatsApp
          </a>
        </div>
      </div>

      {/* Google Maps placeholder */}
      <MapPlaceholder />
    </div>
  );
}

function ContactItem({ item, delay }) {
  const [hovered, setHovered] = useState(false);
  const Wrapper = item.href ? 'a' : 'div';
  const wrapperProps = item.href
    ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`scroll-reveal scroll-reveal-delay-${delay + 1}`}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '14px 18px',
        background: hovered ? C.white : `${C.white}80`,
        border: `1px solid ${hovered ? item.color + '40' : C.sand + '50'}`,
        borderRadius: 14, textDecoration: 'none', cursor: item.href ? 'pointer' : 'default',
        transition: 'all 0.25s ease',
        transform: hovered && item.href ? 'translateX(4px)' : 'none',
        boxShadow: hovered ? `0 4px 20px ${item.color}15` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 12, flexShrink: 0,
        background: `${item.color}15`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: item.color, transition: 'background 0.25s',
        ...(hovered ? { background: `${item.color}25` } : {}),
      }}>
        {item.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: font.sans, fontSize: '0.76rem', fontWeight: 600, color: C.brownLight, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>
          {item.label}
        </div>
        <div style={{ fontFamily: font.sans, fontSize: '0.92rem', fontWeight: 500, color: C.brown, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {item.value}
        </div>
      </div>
      {item.cta && (
        <span style={{
          fontFamily: font.sans, fontSize: '0.78rem', fontWeight: 700,
          color: item.color, padding: '5px 12px', borderRadius: 50,
          background: `${item.color}15`, whiteSpace: 'nowrap',
          border: `1px solid ${item.color}25`,
        }}>
          {item.cta}
        </span>
      )}
    </Wrapper>
  );
}

function MapPlaceholder() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        marginTop: 24, borderRadius: 20, overflow: 'hidden',
        border: `1px solid ${C.sand}60`,
        transition: 'box-shadow 0.3s',
        boxShadow: hovered ? `0 8px 32px ${C.sand}60` : '0 2px 12px rgba(0,0,0,0.05)',
      }}
      className="scroll-reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Map visual */}
      <div style={{
        height: 200, position: 'relative',
        background: `linear-gradient(145deg, ${C.beige} 0%, ${C.sandLight} 50%, ${C.beige} 100%)`,
        overflow: 'hidden',
      }}>
        {/* Faux grid de rues */}
        <svg viewBox="0 0 400 200" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.3 }} preserveAspectRatio="xMidYMid slice">
          {/* Rues horizontales */}
          {[30, 60, 90, 120, 150, 180].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke={C.sand} strokeWidth="8" />
          ))}
          {/* Rues verticales */}
          {[50, 120, 180, 250, 320, 380].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="200" stroke={C.sand} strokeWidth="8" />
          ))}
          {/* Bloc bâtiments */}
          {[[60, 40, 50, 30], [140, 40, 30, 35], [200, 40, 60, 25], [290, 40, 40, 30],
            [60, 100, 40, 40], [130, 100, 35, 30], [210, 100, 55, 40], [300, 100, 45, 35],
            [60, 165, 50, 25], [150, 165, 40, 30], [220, 165, 60, 25], [310, 160, 35, 30]].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill={C.sandLight} opacity="0.8" rx="2" />
          ))}
        </svg>

        {/* Pin central */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -65%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50% 50% 50% 0',
            transform: 'rotate(-45deg)',
            background: `linear-gradient(135deg, ${C.terracotta}, ${C.terracottaDark})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ transform: 'rotate(45deg)', color: C.white, display: 'flex' }}>
              <Icon.MapPin size={20} />
            </div>
          </div>
          <div style={{ width: 2, height: 8, background: C.terracotta, marginTop: -2 }} />
        </div>

        {/* Label Bordeaux */}
        <div style={{
          position: 'absolute', bottom: 12, left: 12,
          background: C.white, borderRadius: 10, padding: '6px 12px',
          fontFamily: font.sans, fontSize: '0.82rem', fontWeight: 600, color: C.brown,
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <Icon.MapPin size={12} />
          Bordeaux, Gironde (33)
        </div>

        {/* Overlay "Voir sur Google Maps" */}
        <a
          href="https://maps.google.com/?q=Bordeaux,France"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'absolute', top: 12, right: 12,
            background: C.white, borderRadius: 8, padding: '6px 12px',
            fontFamily: font.sans, fontSize: '0.76rem', fontWeight: 600, color: C.terracotta,
            textDecoration: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = C.cream)}
          onMouseLeave={(e) => (e.currentTarget.style.background = C.white)}
        >
          Voir sur Maps ↗
        </a>
      </div>
    </div>
  );
}

// ─── HERO CONTACT ─────────────────────────────────────────────────────────────
function HeroContact() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section style={{
      paddingTop: 80,
      background: `
        radial-gradient(ellipse 70% 80% at 80% 20%, ${C.beige}AA 0%, transparent 55%),
        radial-gradient(ellipse 50% 50% at 10% 80%, ${C.sandLight}66 0%, transparent 50%),
        linear-gradient(160deg, ${C.cream} 0%, ${C.beige} 60%, ${C.cream} 100%)
      `,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: `${C.terracotta}07`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: -40, width: 220, height: 220, borderRadius: '50%', background: `${C.sage}10`, pointerEvents: 'none' }} />

      <div style={{
        maxWidth: 900, margin: '0 auto', padding: '72px 24px 48px', textAlign: 'center',
        opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        <SectionTag>Nous contacter</SectionTag>
        <h1 style={{
          fontFamily: font.serif,
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 700, color: C.brown, margin: '0 0 18px',
          lineHeight: 1.2, letterSpacing: '-0.02em',
        }}>
          Parlons de{' '}
          <span style={{ color: C.terracotta, fontStyle: 'italic' }}>votre projet</span>
        </h1>
        <p style={{
          fontFamily: font.sans, fontSize: 'clamp(1rem, 1.5vw, 1.12rem)',
          color: C.brownLight, lineHeight: 1.75, margin: '0 auto 28px',
          fontWeight: 300, maxWidth: 560,
        }}>
          Remplissez le formulaire ci-dessous, nous vous recontactons sous 24h.<br />
          Un premier échange suffit pour évaluer le potentiel de votre bien.
        </p>

        {/* Badges confiance */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
          {[
            { icon: '🕐', text: 'Réponse sous 24h' },
            { icon: '🔒', text: 'Sans engagement' },
            { icon: '💬', text: 'Échange gratuit' },
          ].map((b) => (
            <div key={b.text} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: `${C.white}CC`, border: `1px solid ${C.sand}60`,
              borderRadius: 50, padding: '7px 16px',
              fontFamily: font.sans, fontSize: '0.85rem', fontWeight: 500, color: C.brownLight,
            }}>
              <span>{b.icon}</span>{b.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION PRINCIPALE ───────────────────────────────────────────────────────
function MainSection() {
  return (
    <section id="formulaire" style={{ padding: '60px 24px 100px', background: C.cream }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 56, alignItems: 'start' }} className="contact-grid">
          {/* Colonne formulaire */}
          <div className="scroll-reveal">
            <div style={{
              background: C.white, borderRadius: 28, padding: '40px 36px',
              boxShadow: `0 4px 40px rgba(0,0,0,0.07)`,
              border: `1px solid ${C.sand}40`,
            }} className="form-card">
              <div style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: font.serif, fontSize: '1.6rem', fontWeight: 700, color: C.brown, margin: '0 0 8px', letterSpacing: '-0.02em' }}>
                  Formulaire propriétaire
                </h2>
                <p style={{ fontFamily: font.sans, fontSize: '0.9rem', color: C.brownLight, margin: 0, fontWeight: 300 }}>
                  Champs marqués <span style={{ color: C.terracotta }}>*</span> obligatoires
                </p>
              </div>
              <Formulaire />
            </div>
          </div>

          {/* Colonne coordonnées */}
          <div style={{ position: 'sticky', top: 100 }} className="coords-col">
            <Coordonnees />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .coords-col {
            position: static !important;
            order: -1;
          }
          .form-card {
            padding: 28px 20px !important;
          }
        }
        @media (max-width: 500px) {
          .form-2col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─── FAQ RAPIDE ───────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Combien de temps avant de voir les premiers revenus ?', a: 'En général sous 3 à 4 semaines après la signature du contrat. Nous gérons la mise en ligne, les photos et la première réservation.' },
  { q: 'Quelle est votre zone d\'intervention ?', a: 'Bordeaux et toute la Gironde (Mérignac, Pessac, Talence, Bègles, Villenave…). Contactez-nous pour vérifier votre secteur.' },
  { q: 'Est-ce que je garde accès à mon logement ?', a: 'Oui. Nous bloquons les dates que vous souhaitez occuper dans le calendrier. Votre logement reste le vôtre.' },
  { q: 'Y a-t-il des frais d\'entrée ?', a: 'Aucun frais d\'entrée. Notre rémunération est uniquement un pourcentage des revenus générés. Si vous ne gagnez pas, nous non plus.' },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ padding: '80px 24px', background: C.white }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }} className="scroll-reveal">
          <SectionTag color={C.sage}>Questions fréquentes</SectionTag>
          <h2 style={{ fontFamily: font.serif, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 700, color: C.brown, margin: '0', letterSpacing: '-0.02em' }}>
            Vos questions, nos réponses
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} open={open === i} onToggle={() => setOpen(open === i ? null : i)} delay={i} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }} className="scroll-reveal">
          <p style={{ fontFamily: font.sans, fontSize: '0.95rem', color: C.brownLight, marginBottom: 16, fontWeight: 300 }}>
            Une autre question ? Nous répondons sous 24h.
          </p>
          <BtnPrimary href="tel:+33637149599" icon={<Icon.Phone />}>
            Appeler maintenant
          </BtnPrimary>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index, open, onToggle, delay }) {
  return (
    <div
      className={`scroll-reveal scroll-reveal-delay-${(delay % 4) + 1}`}
      style={{
        background: open ? C.white : `${C.white}80`,
        border: `1px solid ${open ? C.terracotta + '40' : C.sand + '60'}`,
        borderRadius: 16, overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: open ? `0 4px 24px ${C.terracotta}12` : 'none',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: font.sans, fontSize: '0.97rem', fontWeight: 600,
          color: open ? C.terracotta : C.brown, textAlign: 'left',
          transition: 'color 0.2s',
        }}
      >
        <span>{faq.q}</span>
        <div style={{
          width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
          background: open ? `${C.terracotta}15` : `${C.sand}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: open ? C.terracotta : C.brownLight,
          transition: 'all 0.3s ease', transform: open ? 'rotate(45deg)' : 'none',
        }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ width: 14, height: 14 }}>
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>
      <div style={{
        maxHeight: open ? 200 : 0, overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }}>
        <p style={{
          fontFamily: font.sans, fontSize: '0.92rem', color: C.brownLight,
          lineHeight: 1.75, margin: 0, padding: '0 22px 20px', fontWeight: 300,
        }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

// ─── PAGE ROOT ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  useFonts();
  useScrollReveal();

  return (
    <div style={{ fontFamily: font.sans, background: C.cream, minHeight: '100vh' }}>
      <Header />
      <main>
        <HeroContact />
        <MainSection />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}
