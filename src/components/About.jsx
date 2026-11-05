import { site } from '../config/siteConfig'
import { Section, Heading, Reveal, Icon } from './ui'

export default function About() {
  return (
    <Section id="nosotros" className="bg-mist">
      <Heading eyebrow={site.texts.about.eyebrow} title={site.texts.about.title} text={site.description} />
      <div className="mt-16 grid gap-px bg-navy/10 md:grid-cols-3">
        {site.pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="bg-mist p-10 transition hover:bg-white">
            <Icon name={p.icon} className="mb-8 h-8 w-8 text-gold" />
            <h3 className="text-2xl">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-graphite/70">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
