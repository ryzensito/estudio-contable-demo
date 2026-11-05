import { useEffect, useState } from 'react'
import { waLink } from '../config/siteConfig'
import { WhatsAppIcon, Icon } from './ui'

export default function WhatsAppFloat() {
  const [top, setTop] = useState(false)
  useEffect(() => {
    const f = () => setTop(window.scrollY > 500)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Volver arriba"
        className={`fixed bottom-6 left-6 z-50 grid h-12 w-12 place-items-center bg-navy text-white transition duration-300 hover:bg-steel ${top ? 'opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}>
        <Icon name="up" className="h-5 w-5" />
      </button>
      <a href={waLink()} target="_blank" rel="noreferrer" aria-label="Escribinos por WhatsApp"
        style={{ animation: 'waRing 2.4s ease-out infinite' }}
        className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-3 rounded-full bg-[#25D366] px-4 text-white shadow-lg transition duration-300 hover:scale-105 active:scale-95 md:px-6">
        <WhatsAppIcon />
        <span className="hidden text-sm font-bold md:inline">¿Hablamos?</span>
      </a>
    </>
  )
}
