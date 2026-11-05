import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { site } from './config/siteConfig'
import './index.css'

// Convierte "#0B1F3A" en "11 31 58" para que Tailwind pueda usar transparencias
const hexToChannels = hex => {
  const n = parseInt(hex.replace('#', ''), 16)
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`
}

const r = document.documentElement.style
Object.entries(site.colors).forEach(([k, v]) => r.setProperty(`--c-${k}`, hexToChannels(v)))
document.title = site.seo.title
document.querySelector('meta[name="description"]')?.setAttribute('content', site.seo.description)

createRoot(document.getElementById('root')).render(<App />)
