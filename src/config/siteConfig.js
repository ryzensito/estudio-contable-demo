// ============================================================
//  ARCHIVO ÚNICO DE CONFIGURACIÓN (src/config/siteConfig.js)
//  Editá SOLO este archivo para adaptar la web a un nuevo estudio:
//  datos, colores, imágenes, servicios y TODOS los textos de la web.
// ============================================================
export const siteConfig = {
  name: 'ESTUDIO CONTABLE',
  shortName: 'Estudio Contable',
  logoText: 'EC',          // monograma. Si tenés logo: logoImage: '/logo.svg' (en /public)
  logoImage: '',
  city: 'Ciudad',
  province: 'Provincia',
  url: 'https://www.tudominio.com.ar',

  // Colores principales (se aplican a toda la web)
  colors: { navy: '#0B1F3A', steel: '#4A6FA5', gold: '#B89B5E', mist: '#F3F4F6', graphite: '#2B2F36' },

  // Contacto (datos ficticios, reemplazar)
  whatsapp: '5491100000000', // código país + área + número, sin + ni espacios
  phoneLabel: '+54 9 11 0000-0000',
  email: 'contacto@estudiocontable.com.ar',
  address: 'Calle Ejemplo 1234, Ciudad, Provincia',
  mapQuery: 'Buenos Aires, Argentina', // dirección o ciudad para el mapa
  hours: [['Lunes a viernes', '9:00 a 18:00'], ['Sábados y domingos', 'Cerrado']],
  social: { instagram: '#', linkedin: '#', facebook: '#' },

  // Fotografías (ruta en /public o URL). Vacío = composición gráfica por defecto
  images: { hero: '', banner: '' },

  description: 'Somos un estudio contable orientado a brindar soluciones integrales, combinando conocimiento profesional, atención personalizada y herramientas modernas para facilitar la gestión de nuestros clientes.',

  hero: {
    title: 'Tu tranquilidad financiera comienza con una buena decisión.',
    subtitle: 'Brindamos soluciones contables, impositivas y administrativas para acompañar el crecimiento de profesionales, emprendedores y empresas.',
  },

  pillars: [
    { icon: 'shield', title: 'Compromiso profesional', text: 'Trabajamos con rigor, responsabilidad y respeto por los plazos de cada cliente.' },
    { icon: 'user', title: 'Atención personalizada', text: 'Un interlocutor directo que conoce tu actividad y responde con claridad.' },
    { icon: 'compass', title: 'Visión estratégica', text: 'Analizamos el presente para ayudarte a decidir mejor sobre lo que viene.' },
  ],

  services: [
    { icon: 'percent', title: 'Servicios impositivos', desc: 'Cumplimiento y planificación tributaria para cada régimen.',
      items: ['Monotributo', 'Responsable inscripto', 'Liquidación de IVA', 'Impuesto a las ganancias', 'Ingresos brutos', 'Recategorizaciones', 'Planificación tributaria'] },
    { icon: 'book', title: 'Servicios contables', desc: 'Información ordenada y confiable para conocer tu negocio.',
      items: ['Balances', 'Estados contables', 'Registraciones contables', 'Auditorías', 'Asesoramiento financiero'] },
    { icon: 'people', title: 'Servicios laborales', desc: 'Gestión del personal en regla y sin complicaciones.',
      items: ['Liquidación de sueldos', 'Cargas sociales', 'Altas y bajas de empleados', 'Asesoramiento laboral'] },
    { icon: 'building', title: 'Servicios societarios', desc: 'Acompañamiento en la creación y evolución de tu empresa.',
      items: ['Constitución de sociedades', 'Inscripciones', 'Modificaciones societarias', 'Asesoramiento empresarial'] },
  ],

  audience: [
    { title: 'Profesionales independientes', text: 'Organizamos tu situación fiscal para que te dediques a tu profesión.' },
    { title: 'Monotributistas y emprendedores', text: 'Te guiamos desde el primer día: alta, categoría y obligaciones.' },
    { title: 'Pequeñas y medianas empresas', text: 'Gestión contable e impositiva integral que acompaña tu crecimiento.' },
    { title: 'Comercios y negocios', text: 'Control claro de ventas, impuestos y personal en tu día a día.' },
  ],

  why: [
    ['Atención personalizada', 'Cada cliente tiene un profesional de referencia.'],
    ['Comunicación clara', 'Explicamos en simple lo que otros complican.'],
    ['Asesoramiento integral', 'Impuestos, contabilidad, personal y sociedades en un solo lugar.'],
    ['Gestión organizada', 'Procesos ordenados y vencimientos siempre bajo control.'],
    ['Acompañamiento continuo', 'Seguimos a tu lado después de cada trámite.'],
  ],

  process: [
    ['Primer contacto', 'Nos escribís y coordinamos una primera conversación.'],
    ['Análisis de necesidades', 'Entendemos tu actividad y tu situación actual.'],
    ['Propuesta de trabajo', 'Definimos alcance, plazos y honorarios con transparencia.'],
    ['Acompañamiento profesional', 'Ejecutamos y te mantenemos informado de forma continua.'],
  ],

  // Equipo: textos de ejemplo, reemplazar. No inventar matrículas.
  team: [
    { name: 'Nombre Apellido', role: 'Contador/a Público/a' },
    { name: 'Nombre Apellido', role: 'Asesor/a impositivo/a' },
    { name: 'Nombre Apellido', role: 'Administración y personal' },
  ],

  // ---------- SEO ----------
  seo: {
    title: 'Estudio Contable | Asesoramiento contable e impositivo',
    description: 'Estudio contable: monotributo, IVA, ganancias, balances, sueldos y sociedades. Atención personalizada para profesionales, pymes y comercios.',
  },

  // ---------- Navegación y mensajes generales ----------
  nav: [['Inicio', '#inicio'], ['Nosotros', '#nosotros'], ['Servicios', '#servicios'], ['Profesionales', '#profesionales'], ['Contacto', '#contacto']],
  ctaLabel: 'Solicitar asesoramiento',
  whatsappDefaultMessage: 'Hola, quisiera solicitar asesoramiento.',

  // ---------- Textos de cada sección ----------
  texts: {
    hero: { eyebrow: 'Estudio contable', secondaryButton: 'Conocer nuestros servicios', whatsappLink: '¿Preferís WhatsApp? Escribinos directo' },
    about: { eyebrow: 'Nosotros', title: 'Más que números, acompañamos decisiones.' },
    services: {
      eyebrow: 'Servicios profesionales', title: 'Soluciones para cada etapa de tu actividad.',
      more: 'Conocer más', less: 'Ocultar detalle', consult: 'Consultar',
      whatsappMessage: 'Hola, quisiera consultar por {servicio}.', // {servicio} se reemplaza solo
      stripTitle: '¿No encontrás lo que buscás?', stripText: 'Contanos tu caso y armamos una propuesta a tu medida.', stripButton: 'Contanos tu caso',
    },
    audience: { eyebrow: 'A quiénes acompañamos', title: 'Cada actividad tiene sus propias necesidades.' },
    why: { eyebrow: 'Por qué elegirnos', title: 'Una forma de trabajar pensada para que estés tranquilo.' },
    process: { eyebrow: 'Proceso de trabajo', title: 'Simple, claro y transparente.', button: 'Dar el primer paso' },
    team: { eyebrow: 'Profesionales', title: 'Las personas detrás de tu estudio.' },
    cta: { title: 'Estamos para ayudarte a tomar mejores decisiones.', text: 'Contanos qué necesitás y encontraremos la mejor manera de acompañarte.', button: 'HABLAR CON UN ASESOR' },
    contact: {
      eyebrow: 'Contacto', title: 'Contactanos y resolvé tus dudas.', breadcrumbHome: 'Inicio',
      placeholders: { nombre: 'Nombre y apellido*', telefono: 'Teléfono*', email: 'Correo electrónico*', mensaje: 'Contanos qué necesitás*' },
      errors: { nombre: 'Ingresá tu nombre y apellido.', email: 'Ingresá un correo válido.', telefono: 'Ingresá un teléfono válido.', mensaje: 'Contanos un poco más (mínimo 10 caracteres).' },
      submit: 'Enviar consulta', whatsappButton: 'Escribir por WhatsApp',
      successTitle: '¡Gracias, {nombre}!', successText: 'Recibimos tu consulta. Te responderemos a la brevedad.',
      continueWhatsApp: 'Continuar por WhatsApp', newQuery: 'Nueva consulta',
      whatsappMessage: 'Hola, soy {nombre}. Consulta sobre {tipo}: {mensaje}',
      labels: { whatsapp: 'WhatsApp', email: 'Correo electrónico', address: 'Estamos en', hours: 'Horarios de atención' },
      whatsappNote: 'Respondemos por acá en horario de atención.',
    },
    footer: {
      tagline: 'Asesoramiento contable, impositivo y administrativo en {ciudad}, {provincia}.',
      contact: 'Contacto', social: 'Seguinos', solutions: 'Ofrecemos soluciones',
      rights: 'Todos los derechos reservados.',
    },
  },

  consultTypes: ['Impuestos', 'Contabilidad', 'Sueldos y personal', 'Sociedades', 'Otra consulta'],
}

export const site = siteConfig // alias usado por los componentes

export const waLink = (text = siteConfig.whatsappDefaultMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
