import { useEffect } from 'react'
import { site } from '../config/siteConfig'

// Datos estructurados (JSON-LD) generados desde la configuración
export default function Seo() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'AccountingService',
      name: site.shortName, url: site.url, email: site.email, telephone: site.phoneLabel,
      description: site.description,
      address: { '@type': 'PostalAddress', streetAddress: site.address, addressLocality: site.city, addressRegion: site.province, addressCountry: 'AR' },
      areaServed: `${site.city}, ${site.province}, Argentina`,
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Servicios', itemListElement: site.services.map(s => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.desc } })) },
    }
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.text = JSON.stringify(data)
    document.head.appendChild(el)
    return () => el.remove()
  }, [])
  return null
}
