export const brand = {
  name: 'VitaClinic',
  tagline: 'Clínica Metabólica y Estética',
  phone: '55 1012 1154',
  phoneHref: 'tel:+525510121154',
  whatsappNumber: '525510121154',
  whatsappDisplay: '+52 5510121154',
  ctaLabel: 'Quiero saber si soy candidato',
  instagram: 'https://www.instagram.com/vitaclinic_cdmx',
}

export const promos = [
  {
    id: 'tres-meses',
    pct: 15,
    title: '15% OFF al pagar 3 meses de tratamiento de contado',
    detail: 'Liquida tres meses de tratamiento en un solo pago y ahorra el 15% del total.',
    condition: 'Aplica sobre el paquete personalizado de 3 meses o más. Menciona la promoción al agendar.',
  },
] as const

export const clinics = [
  {
    id: 'centro',
    name: 'Sucursal Centro',
    short: 'Centro',
    address: 'Manuel J. Othón 211, Col. Tránsito',
    locality: 'Cuauhtémoc, 06820, Ciudad de México',
    landmark: 'Centro de la Ciudad de México',
    mapsUrl: 'https://share.google/ti4OBTsCrjIR5Ep8j',
    hours: [
      { days: 'Lunes a viernes', time: '9:00 – 18:00' },
      { days: 'Sábado', time: '9:00 – 15:00' },
      { days: 'Domingo', time: 'Cerrado' },
    ],
    openingHoursSpec: ['Mo-Fr 09:00-18:00', 'Sa 09:00-15:00'],
  },
  {
    id: 'wtc',
    name: 'Sucursal WTC',
    short: 'WTC',
    address: 'Montecito 38, Col. Nápoles',
    locality: 'Benito Juárez, 03810, Ciudad de México',
    landmark: 'Dentro del World Trade Center CDMX',
    mapsUrl: 'https://share.google/tT394VWzwDG3vy2RM',
    hours: [
      { days: 'Lunes a viernes', time: '9:00 – 18:00' },
      { days: 'Sábado', time: '9:00 – 15:00' },
      { days: 'Domingo', time: 'Cerrado' },
    ],
    openingHoursSpec: ['Mo-Fr 09:00-18:00', 'Sa 09:00-15:00'],
  },
] as const

export const durations = [
  { months: 3, label: '3 meses', who: 'Metas puntuales y primer control del apetito.' },
  { months: 5, label: '5 meses', who: 'Pérdida sostenida con ajuste de hábitos.' },
  { months: 7, label: '7 meses', who: 'Cambios metabólicos profundos y consolidación.' },
  { months: 12, label: 'Más de 1 año', who: 'Obesidad de larga evolución y mantenimiento guiado.' },
] as const

export const pricing = {
  from: 3499,
  currency: 'MXN',
  meds: [
    { name: 'Semaglutida', from: 3499 },
    { name: 'Tirzepatida', from: 4499 },
  ],
  note: 'Tratamiento 100% personalizado. El costo final depende de tu plan, duración y medicamento indicado.',
}

