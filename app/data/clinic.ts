export const brand = {
  name: 'VitaClinic',
  tagline: 'Clínica Metabólica y Estética',
  phone: '55 1012 1154',
  phoneHref: 'tel:+525510121154',
  whatsappNumber: '525565356274',
  whatsappDisplay: '+52 5565356274',
  ctaLabel: 'Quiero saber si soy candidato',
  instagram: 'https://www.instagram.com/vitaclinic_cdmx',
}

export const promos = [
  {
    id: 'primera-consulta',
    pct: 10,
    title: '10% OFF en tu primera consulta',
    detail: 'Valoración médica inicial con descuento para que conozcas tu plan sin compromiso.',
    condition: 'Menciona la promoción al agendar por WhatsApp.',
  },
  {
    id: 'tres-meses',
    pct: 15,
    title: '15% OFF al pagar 3 meses de contado',
    detail: 'Liquida tres meses de tratamiento en un solo pago y ahorra el 15% del total.',
    condition: 'Aplica sobre el plan personalizado de 3 meses o más.',
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
  from: 4500,
  currency: 'MXN',
  note: 'Tratamiento 100% personalizado. El costo final depende de tu plan, duración y medicamento indicado.',
}

