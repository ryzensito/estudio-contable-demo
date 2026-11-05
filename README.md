# Demo web — Estudio Contable

## Ejecutar (Windows + VS Code)
1. Instalá Node.js LTS desde https://nodejs.org
2. Abrí esta carpeta en VS Code y la terminal (Ctrl + `)
3. `npm install`
4. `npm run dev` y abrí la URL que aparece (http://localhost:5173)

## Personalizar para un cliente
Todo (datos, colores, imágenes y textos) se edita en `src/config/siteConfig.js`: nombre, colores, WhatsApp, email, dirección,
horarios, redes, servicios y fotos. Para fotos: ponelas en `public/` y escribí la ruta
(ej. `/hero.jpg`) en `images.hero` e `images.banner`.

## Publicar
`npm run build` genera la carpeta `dist/` lista para subir a Netlify, Vercel o hosting propio.
