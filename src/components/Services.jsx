import { useState } from 'react'
import { site, waLink } from '../config/siteConfig'
import { Section, Heading, Reveal, Icon, WhatsAppIcon } from './ui'

export default function Services() {
  const [open, setOpen] = useState(null)
  const t = site.texts.services
  return (
    <Section id="servicios">
      <Heading eyebrow={t.eyebrow} title={t.title} />
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {site.services.map((s, i) => {
          const isOpen = open === i
          return (
            <Reveal key={s.title} delay={(i % 2) * 100}>
              <article className="group h-full border border-navy/10 p-8 transition-colors duration-300 hover:border-gold lg:p-10">
                <div className="flex items-start justify-between">
                  <Icon name={s.icon} className="h-9 w-9 text-steel" />
                  <span className="font-serif text-sm text-navy/30">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-2xl">{s.title}</h3>
                <p className="mt-2 text-graphite/70">{s.desc}</p>
                <div className={`grid transition-all duration-500 ${isOpen ? 'mt-6 grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <ul className="overflow-hidden text-sm text-graphite">
                    {s.items.map(it => <li key={it} className="flex items-center gap-3 border-t border-navy/10 py-2.5"><Icon name="check" className="h-4 w-4 text-gold" />{it}</li>)}
                  </ul>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm font-semibold text-navy">
                  <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="flex items-center gap-2 transition hover:text-steel">
                    {isOpen ? t.less : t.more}<Icon name="plus" className={`h-4 w-4 transition ${isOpen ? 'rotate-45' : ''}`} />
                  </button>
                  <a href={waLink(t.whatsappMessage.replace('{servicio}', s.title.toLowerCase()))} target="_blank" rel="noreferrer" className="btn btn-cta !px-5 !py-2.5">
                    <WhatsAppIcon className="h-4 w-4" />{t.consult}<Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
      <Reveal className="mt-10 flex flex-col items-start justify-between gap-6 bg-navy p-8 lg:flex-row lg:items-center lg:p-10">
        <div><h3 className="text-2xl !text-white">{t.stripTitle}</h3><p className="mt-1 text-white/70">{t.stripText}</p></div>
        <a href="#contacto" className="btn btn-cta btn-lg shrink-0">{t.stripButton}<Icon name="arrow" className="h-5 w-5" /></a>
      </Reveal>
    </Section>
  )
}
