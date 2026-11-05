import { site } from '../config/siteConfig'
import { Section, Heading, Reveal } from './ui'

export default function Audience() {
  return (
    <Section id="clientes" className="bg-navy">
      <Heading light eyebrow={site.texts.audience.eyebrow} title={site.texts.audience.title} />
      <div className="mt-16 grid border-t border-white/15 md:grid-cols-2 lg:grid-cols-4">
        {site.audience.map((a, i) => (
          <Reveal key={a.title} delay={i * 90} className="border-b border-white/15 py-10 pr-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0">
            <span className="font-serif text-5xl text-gold/80">0{i + 1}</span>
            <h3 className="mt-6 text-xl !text-white">{a.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">{a.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
