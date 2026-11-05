import { site, waLink } from '../config/siteConfig'
import { Icon, WhatsAppIcon } from './ui'

function Art() {
  // Composición gráfica por defecto (se reemplaza con site.images.hero)
  return (
    <svg viewBox="0 0 520 620" className="h-full w-full" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Composición gráfica abstracta">
      <rect width="520" height="620" fill="rgb(var(--c-navy))" />
      <g stroke="#fff" strokeOpacity=".07">{Array.from({ length: 14 }, (_, i) => <line key={i} x1="0" x2="520" y1={i * 48} y2={i * 48} />)}{Array.from({ length: 11 }, (_, i) => <line key={i} y1="0" y2="620" x1={i * 52} x2={i * 52} />)}</g>
      <g fill="#fff" fillOpacity=".06">{[90, 150, 120, 210, 260, 330].map((h, i) => <rect key={i} x={60 + i * 72} y={560 - h} width="40" height={h} />)}</g>
      <polyline points="40,470 130,410 210,430 300,300 390,250 480,140" fill="none" stroke="rgb(var(--c-gold))" strokeWidth="2" />
      <circle cx="480" cy="140" r="6" fill="rgb(var(--c-gold))" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="pt-28 md:pt-[116px]">
      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="eyebrow mb-6">{site.texts.hero.eyebrow} · {site.city}, {site.province}</p>
          <h1 className="text-5xl leading-[1.05] lg:text-7xl">{site.hero.title}</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-graphite/75">{site.hero.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contacto" className="btn btn-cta btn-lg pulse-ring">{site.ctaLabel}<Icon name="arrow" className="h-5 w-5" /></a>
            <a href="#servicios" className="btn btn-ghost btn-lg">{site.texts.hero.secondaryButton}</a>
          </div>
          <a href={waLink()} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-steel"><WhatsAppIcon className="h-5 w-5 text-[#25D366]" />{site.texts.hero.whatsappLink}</a>
        </div>
        <div className="relative min-h-[360px] lg:col-span-5 lg:min-h-[560px]">
          <div className="absolute -bottom-4 -left-4 hidden h-full w-full border border-gold/60 lg:block" />
          <div className="relative h-full overflow-hidden">
            {site.images.hero
              ? <img src={site.images.hero} alt="Equipo de trabajo del estudio" className="h-full w-full object-cover" fetchpriority="high" />
              : <Art />}
          </div>
        </div>
      </div>
    </section>
  )
}
