import { useState } from 'react'
import { site, waLink } from '../config/siteConfig'
import { Icon, WhatsAppIcon } from './ui'

const empty = { nombre: '', email: '', telefono: '', tipo: site.consultTypes[0], mensaje: '' }

function validate(v) {
  const e = {}
  if (v.nombre.trim().length < 3) e.nombre = site.texts.contact.errors.nombre
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = site.texts.contact.errors.email
  if (v.telefono.replace(/\D/g, '').length < 8) e.telefono = site.texts.contact.errors.telefono
  if (v.mensaje.trim().length < 10) e.mensaje = site.texts.contact.errors.mensaje
  return e
}

const Block = ({ title, children }) => (
  <div>
    <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] !text-navy">{title}</h3>
    <div className="mb-4 mt-3 h-px w-10 bg-gold" />
    <div className="space-y-1 text-graphite/80">{children}</div>
  </div>
)

export default function Contact() {
  const [v, setV] = useState(empty)
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)
  const set = k => e => setV({ ...v, [k]: e.target.value })

  const submit = ev => {
    ev.preventDefault()
    const e = validate(v)
    setErr(e)
    if (Object.keys(e).length) return
    // DEMO: aquí se conecta un servicio real (Formspree, EmailJS, backend propio).
    setSent(true)
  }

  const field = 'w-full border border-navy/20 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-navy'
  const Err = ({ k }) => err[k] ? <p className="mt-1 text-xs text-red-700" role="alert">{err[k]}</p> : null
  const t = site.texts.contact
  const msg = t.whatsappMessage.replace('{nombre}', v.nombre).replace('{tipo}', v.tipo).replace('{mensaje}', v.mensaje)

  return (
    <section id="contacto">
      {/* Banner con título de sección */}
      <div className="relative overflow-hidden bg-navy pb-16 pt-28 lg:pt-36" style={site.images.banner ? { backgroundImage: `linear-gradient(rgba(11,31,58,.88),rgba(11,31,58,.88)), url(${site.images.banner})`, backgroundSize: 'cover' } : undefined}>
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true"><defs><pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#fff" /></pattern></defs><rect width="100%" height="100%" fill="url(#g)" /></svg>
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 px-6 lg:px-10">
          <div>
            <p className="eyebrow mb-4">{t.eyebrow}</p>
            <h2 className="text-4xl !text-white lg:text-5xl">{t.title}</h2>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/60"><a href="#inicio" className="hover:text-white">{t.breadcrumbHome}</a> <span className="mx-2 text-gold">/</span> {t.eyebrow}</p>
        </div>
      </div>

      {/* Dos columnas: formulario + datos */}
      <div className="bg-mist py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-8">
            {sent ? (
              <div className="border border-gold bg-white p-10" role="status">
                <Icon name="check" className="h-8 w-8 text-gold" />
                <h3 className="mt-4 text-2xl">{t.successTitle.replace('{nombre}', v.nombre.split(' ')[0])}</h3>
                <p className="mt-2 text-graphite/70">{t.successText}</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a href={waLink(msg)} target="_blank" rel="noreferrer" className="btn btn-primary">{t.continueWhatsApp}</a>
                  <button onClick={() => { setV(empty); setSent(false) }} className="btn btn-ghost">{t.newQuery}</button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
                <div><label className="sr-only" htmlFor="n">Nombre y apellido</label><input id="n" className={field} placeholder={t.placeholders.nombre} value={v.nombre} onChange={set('nombre')} /><Err k="nombre" /></div>
                <div><label className="sr-only" htmlFor="t">Teléfono</label><input id="t" type="tel" className={field} placeholder={t.placeholders.telefono} value={v.telefono} onChange={set('telefono')} /><Err k="telefono" /></div>
                <div className="sm:col-span-2"><label className="sr-only" htmlFor="e">Correo electrónico</label><input id="e" type="email" className={field} placeholder={t.placeholders.email} value={v.email} onChange={set('email')} /><Err k="email" /></div>
                <div className="sm:col-span-2"><label className="sr-only" htmlFor="q">Tipo de consulta</label>
                  <select id="q" className={field} value={v.tipo} onChange={set('tipo')}>{site.consultTypes.map(t => <option key={t}>{t}</option>)}</select></div>
                <div className="sm:col-span-2"><label className="sr-only" htmlFor="m">Mensaje</label><textarea id="m" rows="6" className={field} placeholder={t.placeholders.mensaje} value={v.mensaje} onChange={set('mensaje')} /><Err k="mensaje" /></div>
                <div className="flex flex-col items-stretch gap-4 sm:col-span-2 sm:flex-row sm:items-center">
                  <button type="submit" className="btn btn-cta btn-lg pulse-ring">{t.submit}<Icon name="arrow" className="h-5 w-5" /></button>
                  <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-lg bg-[#25D366] text-white hover:brightness-95"><WhatsAppIcon className="mr-2 h-5 w-5" />{t.whatsappButton}</a>
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-9 lg:col-span-4">
            <Block title={t.labels.whatsapp}><a href={waLink()} target="_blank" rel="noreferrer" className="font-semibold text-navy hover:text-steel">{site.phoneLabel}</a><p className="text-sm">{t.whatsappNote}</p></Block>
            <Block title={t.labels.email}><a href={`mailto:${site.email}`} className="break-all hover:text-steel">{site.email}</a></Block>
            <Block title={t.labels.address}><p>{site.address}</p></Block>
            <Block title={t.labels.hours}>{site.hours.map(([d, h]) => <p key={d}>{d}: {h}</p>)}</Block>
            <div className="flex gap-2">
              {Object.entries(site.social).map(([k, u]) => <a key={k} href={u} aria-label={k} className="grid h-10 w-10 place-items-center bg-navy/10 text-xs font-semibold uppercase text-navy transition hover:bg-navy hover:text-white">{k.slice(0, 2)}</a>)}
            </div>
          </aside>
        </div>
      </div>

      {/* Mapa a ancho completo */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <iframe title="Ubicación del estudio" loading="lazy" className="h-[380px] w-full border-0 grayscale transition hover:grayscale-0" src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`} />
      </div>
    </section>
  )
}
