import { site } from '../config/siteConfig'
import { Icon } from './ui'

const H = ({ children }) => (
  <>
    <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] !text-white">{children}</h3>
    <div className="mb-6 mt-3 h-px w-10 bg-gold" />
  </>
)

export default function Footer() {
  const t = site.texts.footer
  const tags = site.services.map(s => s.title.replace(/^Servicios /, ''))
  return (
    <footer className="bg-[#08172b] text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-3">
          {site.logoImage
            ? <img src={site.logoImage} alt={site.name} className="h-24 w-auto" />
            : <div className="flex flex-col items-start gap-4">
                <span className="grid h-16 w-16 place-items-center border border-white/40 font-serif text-3xl">{site.logoText}</span>
                <span className="text-sm font-semibold tracking-[0.2em]">{site.name}</span>
              </div>}
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">{t.tagline.replace('{ciudad}', site.city).replace('{provincia}', site.province)}</p>
        </div>

        <div className="lg:col-span-4">
          <H>{t.contact}</H>
          <ul className="divide-y divide-white/10 text-sm text-white/70">
            <li className="py-3"><a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-white"><Icon name="mail" className="h-4 w-4 shrink-0 text-gold" />{site.email}</a></li>
            <li className="py-3"><span className="flex items-center gap-3"><Icon name="phone" className="h-4 w-4 shrink-0 text-gold" />{site.phoneLabel}</span></li>
            <li className="py-3"><span className="flex items-center gap-3"><Icon name="pin" className="h-4 w-4 shrink-0 text-gold" />{site.address}</span></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <H>{t.social}</H>
          <div className="flex gap-2">
            {Object.entries(site.social).map(([k, u]) => <a key={k} href={u} aria-label={k} className="grid h-11 w-11 place-items-center bg-white/10 text-xs font-semibold uppercase transition hover:bg-gold hover:text-navy">{k.slice(0, 2)}</a>)}
          </div>
        </div>

        <div className="lg:col-span-3">
          <H>{t.solutions}</H>
          <div className="flex flex-wrap gap-2">
            {tags.map(t => <a key={t} href="#servicios" className="rounded-full border border-white/20 px-4 py-2 text-[11px] uppercase tracking-wider text-white/70 transition hover:border-gold hover:text-gold">{t}</a>)}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/20 py-6">
        <p className="mx-auto max-w-7xl px-6 text-xs uppercase tracking-wider text-white/45 lg:px-10">© {new Date().getFullYear()} {site.name}. {t.rights}</p>
      </div>
    </footer>
  )
}
