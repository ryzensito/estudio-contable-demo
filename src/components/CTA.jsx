import { site, waLink } from '../config/siteConfig'
import { Icon, WhatsAppIcon } from './ui'

export default function CTA() {
  return (
    <section className="bg-gold">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-12 lg:flex-row lg:items-center lg:px-10">
        <div className="flex items-center gap-6">
          <Icon name="shield" className="hidden h-12 w-12 shrink-0 text-navy sm:block" />
          <div>
            <h2 className="text-2xl leading-snug lg:text-3xl">{site.texts.cta.title}</h2>
            <p className="mt-2 text-navy/75">{site.texts.cta.text}</p>
          </div>
        </div>
        <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg shrink-0 hover:!bg-white hover:!text-navy"><WhatsAppIcon className="h-5 w-5" />{site.texts.cta.button}<Icon name="arrow" className="h-5 w-5" /></a>
      </div>
    </section>
  )
}
