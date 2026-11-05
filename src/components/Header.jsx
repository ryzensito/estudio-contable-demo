import { useState } from 'react'
import { site, waLink } from '../config/siteConfig'
import { Icon, Logo } from './ui'

const links = site.nav.map(([label, href]) => [label, href, href === '#servicios'])

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="hidden bg-navy text-[12px] text-white/75 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 lg:px-10">
          <div className="flex gap-8">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-gold transition"><Icon name="mail" className="w-4 h-4" />{site.email}</a>
            <a href={waLink()} className="flex items-center gap-2 hover:text-gold transition"><Icon name="phone" className="w-4 h-4" />{site.phoneLabel}</a>
          </div>
          <div className="flex gap-5 capitalize">
            {Object.entries(site.social).map(([k, v]) => <a key={k} href={v} className="hover:text-gold transition">{k}</a>)}
          </div>
        </div>
      </div>
      <div className="border-b border-navy/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Logo />
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
            {links.map(([label, href, drop]) => (
              <div key={label} className="group relative">
                <a href={href} className="py-8 text-[13px] font-medium text-navy/80 transition hover:text-navy">{label}</a>
                {drop && (
                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 border border-navy/10 bg-white py-2 opacity-0 shadow-[0_12px_30px_-18px_rgba(11,31,58,.4)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {site.services.map(s => <a key={s.title} href="#servicios" className="block px-5 py-3 text-sm text-graphite hover:bg-mist hover:text-navy">{s.title}</a>)}
                  </div>
                )}
              </div>
            ))}
            <a href="#contacto" className="btn btn-cta">{site.ctaLabel}<Icon name="arrow" className="h-4 w-4" /></a>
          </nav>
          <button className="lg:hidden text-navy" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menú">
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
        {open && (
          <nav className="border-t border-navy/10 bg-white px-6 pb-6 lg:hidden" aria-label="Móvil">
            {links.map(([label, href]) => <a key={label} href={href} onClick={close} className="block border-b border-navy/10 py-4 text-navy">{label}</a>)}
            <a href="#contacto" onClick={close} className="btn btn-cta btn-lg mt-6 w-full">{site.ctaLabel}<Icon name="arrow" className="h-4 w-4" /></a>
          </nav>
        )}
      </div>
    </header>
  )
}
