/**
 * Curva ilustrativa de evolución de peso. NO son datos clínicos: es la forma
 * que da estructura a la página. Los valores se muestran sin unidades de kg.
 */
export const W = 1000
export const H = 600
export const PAD_X = 36
export const PAD_TOP = 64
export const PAD_BOTTOM = 84
export const MAX_M = 13 // 0 … 12+ meses

const TOP_W = 79
const BOTTOM_W = 101

/** Con seguimiento: pérdida sostenida que se estabiliza. */
export function weightAt(m: number): number {
  return 100 - 18 * (1 - Math.exp(-m / 3.4))
}

/** Sin seguimiento: misma caída inicial, reganancia después del mes 5. */
export function reboundAt(m: number): number {
  const split = 5
  if (m <= split) return weightAt(m)
  const base = weightAt(split)
  return base + (100 - base) * 0.78 * (1 - Math.exp(-(m - split) / 2.4))
}

export function xFor(m: number): number {
  return PAD_X + (m / MAX_M) * (W - 2 * PAD_X)
}

export function yFor(w: number): number {
  return PAD_TOP + ((BOTTOM_W - w) / (BOTTOM_W - TOP_W)) * (H - PAD_TOP - PAD_BOTTOM)
}

export function mForX(x: number): number {
  const m = ((x - PAD_X) / (W - 2 * PAD_X)) * MAX_M
  return Math.min(MAX_M, Math.max(0, m))
}

export function pathFor(fn: (m: number) => number, from = 0, to = MAX_M): string {
  let d = ''
  for (let m = from; m <= to + 1e-9; m += 0.1) {
    const x = xFor(m)
    const y = yFor(fn(m))
    d += `${m === from ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)} `
  }
  return d.trim()
}

export type Placement = 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'

export interface Milestone {
  m: number
  label: string
  sub?: string
  tone?: 'mark' | 'plain'
  place?: Placement
  on?: 'main' | 'ghost'
}

export interface Phase {
  from: number
  to: number
  name: string
}

export const phases: Phase[] = [
  { from: 0, to: 1, name: 'Valoración y arranque' },
  { from: 1, to: 3, name: 'Control del apetito' },
  { from: 3, to: 7, name: 'Pérdida sostenida' },
  { from: 7, to: 12, name: 'Consolidación' },
  { from: 12, to: 99, name: 'Mantenimiento guiado' },
]

export function phaseFor(m: number): string {
  return (phases.find((p) => m >= p.from && m < p.to) ?? phases[phases.length - 1]!).name
}

export function monthLabel(m: number): string {
  const r = Math.round(m)
  if (r >= 12) return 'Mes 12+'
  return `Mes ${r}`
}

export function pct(x: number, total: number): string {
  return `${((x / total) * 100).toFixed(2)}%`
}

export const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t))
