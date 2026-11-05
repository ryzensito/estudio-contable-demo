import { site } from '../config/siteConfig'
import { Section, Heading, Reveal, Icon } from './ui'

export function Why() {
  return (
    <Section id="por-que-elegirnos">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:sticky lg:top-36 lg:self-start">
          <Heading eyebrow={site.texts.why.eyebrow} title={site.texts.why.title} />
        </div>
        <ul className="lg:col-span-7">
          {site.why.map(([t, d], i) => (
            <Reveal key={t} delay={i * 60}>
              <li className="group flex items-baseline gap-6 border-t border-navy/15 py-8 last:border-b">
                <span className="text-xs font-semibold tracking-widest text-gold">0{i + 1}</span>
                <div className="flex-1"><h3 className="text-2xl transition group-hover:translate-x-1">{t}</h3><p className="mt-1 text-graphite/70">{d}</p></div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export function Process() {
  return (
    <Section id="proceso" className="bg-mist">
      <Heading eyebrow={site.texts.process.eyebrow} title={site.texts.process.title} />
      <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {site.process.map(([t, d], i) => (
          <Reveal key={t} delay={i * 100}>
            <li className="border-t-2 border-navy pt-6">
              <span className="font-serif text-6xl text-navy/15">0{i + 1}</span>
              <h3 className="mt-4 text-xl">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite/70">{d}</p>
            </li>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-14"><a href="#contacto" className="btn btn-cta btn-lg">{site.texts.process.button}<Icon name="arrow" className="h-5 w-5" /></a></Reveal>
    </Section>
  )
}
