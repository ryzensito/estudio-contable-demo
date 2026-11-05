import { site } from '../config/siteConfig'
import { Section, Heading, Reveal } from './ui'

export default function Team() {
  return (
    <Section id="profesionales">
      <Heading eyebrow={site.texts.team.eyebrow} title={site.texts.team.title} />
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {site.team.map((m, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="grid aspect-[4/3] place-items-center bg-mist font-serif text-5xl text-navy/25">{m.name.split(' ').map(w => w[0]).join('')}</div>
            <h3 className="mt-5 text-xl">{m.name}</h3>
            <p className="text-sm text-graphite/60">{m.role}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
