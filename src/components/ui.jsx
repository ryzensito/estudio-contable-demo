import { useEffect, useRef } from 'react'
import { site } from '../config/siteConfig'

const P = {
  shield: 'M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z M9 12l2 2 4-4',
  user: 'M12 12a4 4 0 100-8 4 4 0 000 8z M4 21c0-4 3.5-6 8-6s8 2 8 6',
  compass: 'M12 21a9 9 0 100-18 9 9 0 000 18z M15.5 8.5l-2 5-5 2 2-5 5-2z',
  percent: 'M6 18L18 6 M7.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z M16.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
  book: 'M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3V4z M5 17a3 3 0 013-3h11',
  people: 'M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7z M2.5 20c0-3.5 3-5 6.5-5s6.5 1.5 6.5 5 M17 4.5a3.5 3.5 0 010 6.5 M18 15c2.5.5 3.5 2 3.5 5',
  building: 'M5 21V5l9-2v18 M14 8h5v13 M5 21h16 M8.5 8h2 M8.5 12h2 M8.5 16h2',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
  mail: 'M3 6h18v12H3z M3 7l9 7 9-7',
  pin: 'M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z M12 12a2 2 0 100-4 2 2 0 000 4z',
  clock: 'M12 21a9 9 0 100-18 9 9 0 000 18z M12 7v5l3 2',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z',
  menu: 'M4 7h16 M4 12h16 M4 17h16',
  close: 'M6 6l12 12 M18 6L6 18',
  plus: 'M12 5v14 M5 12h14',
  check: 'M5 12l5 5 9-10',
  up: 'M6 15l6-6 6 6',
}

export const Icon = ({ name, className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d={P[name]} />
  </svg>
)

export const WhatsAppIcon = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.700 6.700 0 01-3.300-2.900c-.2-.4.2-.4.700-1.300.1-.2 0-.3 0-.4l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.300 3 3 0 00-.9 2.200 5.200 5.200 0 001.100 2.800c.1.200 1.900 3 4.700 4.200 1.800.8 2.500.8 3.400.7a2.900 2.900 0 001.900-1.300 2.300 2.300 0 00.2-1.300c-.1-.1-.3-.2-.5-.3z" />
  </svg>
)

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>{children}</div>
}

export const Section = ({ id, className = '', children }) => (
  <section id={id} className={`py-24 lg:py-32 ${className}`}>
    <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
  </section>
)

export const Heading = ({ eyebrow, title, text, light }) => (
  <Reveal className="max-w-2xl">
    <p className="eyebrow mb-4">{eyebrow}</p>
    <h2 className={`text-4xl lg:text-5xl leading-tight ${light ? '!text-white' : ''}`}>{title}</h2>
    {text && <p className={`mt-6 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-graphite/75'}`}>{text}</p>}
  </Reveal>
)

export const Logo = ({ light }) => (
  <a href="#inicio" className="flex items-center gap-3" aria-label={site.name}>
    {site.logoImage
      ? <img src={site.logoImage} alt={site.name} className="h-10 w-auto" />
      : <span className={`grid h-10 w-10 place-items-center border font-serif text-lg ${light ? 'border-white/40 text-white' : 'border-navy text-navy'}`}>{site.logoText}</span>}
    <span className={`text-[13px] font-semibold tracking-[0.2em] ${light ? 'text-white' : 'text-navy'}`}>{site.name}</span>
  </a>
)
