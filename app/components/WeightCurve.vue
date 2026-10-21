<script setup lang="ts">
import {
  W,
  H,
  PAD_X,
  PAD_TOP,
  PAD_BOTTOM,
  MAX_M,
  weightAt,
  reboundAt,
  xFor,
  yFor,
  mForX,
  pathFor,
  phaseFor,
  monthLabel,
  pct,
  easeOutExpo,
  type Milestone,
} from '~/utils/curve'

const props = withDefaults(
  defineProps<{
    milestones?: Milestone[]
    compare?: boolean
    interactive?: boolean
    autoplay?: boolean
    duration?: number
    caption?: string
    compareLabel?: string
    mainLabel?: string
  }>(),
  {
    milestones: () => [],
    compare: false,
    interactive: true,
    autoplay: false,
    duration: 2600,
    caption: 'Curva ilustrativa. Los resultados varían según cada paciente.',
    compareLabel: 'Sin seguimiento',
    mainLabel: 'Con seguimiento VitaClinic',
  },
)

const root = ref<HTMLElement | null>(null)
const mainPath = ref<SVGPathElement | null>(null)
const ghostPath = ref<SVGPathElement | null>(null)

const dMain = pathFor(weightAt)
const dGhost = pathFor(reboundAt, 5, MAX_M)
const dArea = `${dMain} L${xFor(MAX_M).toFixed(1)} ${(H - PAD_BOTTOM).toFixed(1)} L${PAD_X} ${(H - PAD_BOTTOM).toFixed(1)} Z`

const months = Array.from({ length: MAX_M + 1 }, (_, i) => i)
const tickLabels: Record<number, string> = { 0: '0', 3: '3', 5: '5', 7: '7', 12: '12+' }

/* ---- Dibujo ---- */
const progress = ref(0) // 0..1 (longitud del trazo)
const ghostProgress = ref(0)
const drawn = ref(false)
const dot = reactive({ x: xFor(0), y: yFor(weightAt(0)) })
const reached = ref<number[]>([]) // milestones alcanzados

function play() {
  if (drawn.value) return
  drawn.value = true
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const path = mainPath.value
  if (!path) return
  const total = path.getTotalLength()
  if (reduce) {
    progress.value = 1
    ghostProgress.value = 1
    const p = path.getPointAtLength(total)
    dot.x = p.x
    dot.y = p.y
    reached.value = props.milestones.map((_, i) => i)
    return
  }
  const t0 = performance.now()
  const tick = (now: number) => {
    const t = Math.min(1, (now - t0) / props.duration)
    const e = easeOutExpo(t)
    progress.value = e
    const p = path.getPointAtLength(e * total)
    dot.x = p.x
    dot.y = p.y
    props.milestones.forEach((ms, i) => {
      if (ms.on === 'ghost') return
      if (!reached.value.includes(i) && p.x >= xFor(ms.m) - 0.5) reached.value = [...reached.value, i]
    })
    if (t < 1) requestAnimationFrame(tick)
    else if (props.compare) {
      const g0 = performance.now()
      const gtick = (n: number) => {
        const gt = Math.min(1, (n - g0) / (props.duration * 0.6))
        ghostProgress.value = easeOutExpo(gt)
        const gx = xFor(5) + ghostProgress.value * (xFor(MAX_M) - xFor(5))
        props.milestones.forEach((ms, i) => {
          if (ms.on !== 'ghost') return
          if (!reached.value.includes(i) && gx >= xFor(ms.m) - 0.5) reached.value = [...reached.value, i]
        })
        if (gt < 1) requestAnimationFrame(gtick)
      }
      requestAnimationFrame(gtick)
    }
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  if (props.autoplay) {
    setTimeout(play, 350)
    return
  }
  if (!('IntersectionObserver' in window)) return play()
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect()
        play()
      }
    },
    { threshold: 0.35 },
  )
  if (root.value) io.observe(root.value)
  onBeforeUnmount(() => io.disconnect())
})

/* ---- Interacción: el puntero recorre la curva ---- */
const hover = reactive({ active: false, m: 0, x: 0, y: 0 })
function onMove(e: PointerEvent) {
  if (!props.interactive || !drawn.value) return
  const svg = e.currentTarget as SVGSVGElement
  const rect = svg.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * W
  const m = mForX(x)
  hover.m = m
  hover.x = xFor(m)
  hover.y = yFor(weightAt(m))
  hover.active = true
}
function onLeave() {
  hover.active = false
}

const hoverFlip = computed(() => hover.x > W * 0.62)
</script>

<template>
  <figure ref="root" class="curve" :class="{ 'curve--drawn': drawn, 'curve--hover': hover.active }">
    <div v-if="compare" class="curve__legend" aria-hidden="true">
      <span class="curve__legend-item"><i class="curve__swatch curve__swatch--main"></i>{{ mainLabel }}</span>
      <span class="curve__legend-item"><i class="curve__swatch curve__swatch--ghost"></i>{{ compareLabel }}</span>
    </div>
    <div class="curve__frame">
      <svg
        class="curve__svg"
        :viewBox="`0 0 ${W} ${H}`"
        role="img"
        :aria-label="`Gráfica ilustrativa de evolución de peso a lo largo del tratamiento, del mes 0 al mes 12 y más${compare ? ', comparando con y sin seguimiento' : ''}.`"
        @pointermove="onMove"
        @pointerleave="onLeave"
      >
        <defs>
          <linearGradient id="curve-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="currentColor" stop-opacity="0.14" />
            <stop offset="1" stop-color="currentColor" stop-opacity="0" />
          </linearGradient>
          <filter id="curve-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <!-- Retícula clínica -->
        <g class="curve__grid">
          <line v-for="m in months" :key="m" :x1="xFor(m)" :x2="xFor(m)" :y1="PAD_TOP - 12" :y2="H - PAD_BOTTOM" />
          <line :x1="PAD_X" :x2="W - PAD_X" :y1="H - PAD_BOTTOM" :y2="H - PAD_BOTTOM" class="curve__axis" />
        </g>

        <!-- Área bajo la curva, aparece con el trazo -->
        <path
          :d="dArea"
          fill="url(#curve-area)"
          class="curve__area"
          :style="{ clipPath: `inset(0 ${100 - ((dot.x - PAD_X) / (W - 2 * PAD_X)) * 100}% 0 0)` }"
        />

        <!-- Curva sin seguimiento (reganancia) -->
        <path
          v-if="compare"
          ref="ghostPath"
          :d="dGhost"
          class="curve__ghost"
          :style="{ clipPath: `inset(0 ${100 - ((xFor(5) + ghostProgress * (xFor(MAX_M) - xFor(5))) / W) * 100}% 0 0)` }"
        />

        <!-- Curva principal -->
        <path
          ref="mainPath"
          :d="dMain"
          class="curve__main"
          pathLength="1"
          :style="{ strokeDashoffset: 1 - progress }"
        />

        <!-- Punto que dibuja -->
        <g class="curve__pen" :transform="`translate(${dot.x.toFixed(1)} ${dot.y.toFixed(1)})`">
          <circle r="14" class="curve__pen-halo" />
          <circle r="6" class="curve__pen-dot" />
        </g>

        <!-- Guía del puntero -->
        <g v-if="hover.active" class="curve__probe">
          <line :x1="hover.x" :x2="hover.x" :y1="PAD_TOP - 12" :y2="H - PAD_BOTTOM" />
          <circle :cx="hover.x" :cy="hover.y" r="7" />
        </g>

        <!-- Eje de meses -->
        <g class="curve__ticks">
          <template v-for="m in months" :key="`t${m}`">
            <text v-if="tickLabels[m]" :x="xFor(m)" :y="H - PAD_BOTTOM + 30" text-anchor="middle">
              {{ tickLabels[m] }}
            </text>
          </template>
          <text :x="W - PAD_X" :y="H - PAD_BOTTOM + 56" text-anchor="end" class="curve__axis-name">meses</text>
          <text :x="PAD_X" :y="PAD_TOP - 28" class="curve__axis-name">peso</text>
        </g>
      </svg>

      <!-- Hitos (HTML para tipografía responsiva) -->
      <ul class="curve__milestones" role="list">
        <li
          v-for="(ms, i) in milestones"
          :key="ms.m"
          class="curve__ms"
          :class="[
            `curve__ms--${ms.tone ?? 'plain'}`,
            `curve__ms--${ms.place ?? 'ne'}`,
            { 'is-in': reached.includes(i) },
          ]"
          :style="{ left: pct(xFor(ms.m), W), top: pct(yFor((ms.on === 'ghost' ? reboundAt : weightAt)(ms.m)), H) }"
        >
          <span class="curve__ms-pin" aria-hidden="true"></span>
          <span class="curve__ms-card">
            <strong>{{ ms.label }}</strong>
            <small v-if="ms.sub">{{ ms.sub }}</small>
          </span>
        </li>
      </ul>

      <!-- Tooltip del puntero -->
      <div
        v-if="interactive"
        class="curve__tip"
        :class="{ 'is-on': hover.active, 'is-flip': hoverFlip }"
        :style="{ left: pct(hover.x, W), top: pct(hover.y, H) }"
        aria-live="polite"
      >
        <strong class="num">{{ monthLabel(hover.m) }}</strong>
        <span>{{ phaseFor(hover.m) }}</span>
      </div>
    </div>
    <figcaption class="curve__caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.curve {
  --curve-ink: currentColor;
  position: relative;
  color: inherit;
  margin: 0;
}
.curve__frame {
  position: relative;
  aspect-ratio: 1000 / 600;
}
.curve__svg {
  width: 100%;
  height: 100%;
  overflow: visible;
  touch-action: pan-y;
  cursor: crosshair;
}
.curve__grid line {
  stroke: var(--line);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}
.curve__grid .curve__axis {
  stroke: var(--line-strong);
}
.curve__area {
  color: var(--curve-ink);
  transition: clip-path 60ms linear;
}
.curve__main {
  fill: none;
  stroke: var(--curve-ink);
  stroke-width: 3.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  vector-effect: non-scaling-stroke;
}
.curve__ghost {
  fill: none;
  stroke: var(--mark-500);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 2 9;
  vector-effect: non-scaling-stroke;
  opacity: 0.95;
}
.curve__pen-dot {
  fill: var(--curve-ink);
}
.curve__pen-halo {
  fill: var(--curve-ink);
  opacity: 0.18;
  transform-origin: center;
  animation: halo 2.2s var(--ease-out) infinite;
}
.curve--drawn .curve__pen-halo {
  animation-play-state: running;
}
@keyframes halo {
  0% {
    transform: scale(0.6);
    opacity: 0.35;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}
.curve__probe line {
  stroke: var(--curve-ink);
  stroke-width: 1;
  stroke-dasharray: 4 5;
  opacity: 0.6;
  vector-effect: non-scaling-stroke;
}
.curve__probe circle {
  fill: var(--bg);
  stroke: var(--curve-ink);
  stroke-width: 2.5;
  vector-effect: non-scaling-stroke;
}
.curve__ticks text {
  font-family: var(--font-body);
  font-size: 20px;
  font-weight: 500;
  fill: var(--fg-muted);
  font-variant-numeric: tabular-nums;
}
.curve__ticks .curve__axis-name {
  font-size: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.8;
}

/* Hitos */
.curve__milestones {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.curve__ms {
  position: absolute;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition:
    opacity var(--dur-base) var(--ease-out),
    transform var(--dur-slow) var(--ease-ballistic);
}
.curve__ms.is-in {
  opacity: 1;
}
.curve__ms-pin {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg);
  border: 3px solid var(--curve-ink);
  transform: translate(-50%, -50%) scale(0.2);
  transition: transform var(--dur-slow) var(--ease-ballistic);
}
.curve__ms.is-in .curve__ms-pin {
  transform: translate(-50%, -50%) scale(1);
}
.curve__ms-card {
  --ms-shift: translate(0, 0);
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0.5rem 0.7rem;
  border-radius: var(--radius-md);
  background: var(--bg);
  color: var(--fg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--line);
  min-width: 9.5rem;
  max-width: 14rem;
  line-height: 1.2;
  transform: var(--ms-shift) translateY(8px);
  transition: transform var(--dur-slow) var(--ease-ballistic);
}
.curve__ms.is-in .curve__ms-card {
  transform: var(--ms-shift) translateY(0);
}
.curve__ms-card strong {
  font-family: var(--font-display);
  font-size: clamp(0.8rem, 0.7rem + 0.5vw, 1rem);
  font-weight: 700;
  letter-spacing: -0.01em;
}
.curve__ms-card small {
  font-size: clamp(0.68rem, 0.62rem + 0.3vw, 0.8rem);
  color: var(--fg-muted);
}
.curve__ms--ne .curve__ms-card {
  left: 16px;
  bottom: 12px;
}
.curve__ms--se .curve__ms-card {
  left: 16px;
  top: 12px;
}
.curve__ms--sw .curve__ms-card {
  right: 16px;
  top: 12px;
  text-align: right;
  align-items: flex-end;
}
.curve__ms--nw .curve__ms-card {
  right: 16px;
  bottom: 12px;
  text-align: right;
  align-items: flex-end;
}
.curve__ms--e .curve__ms-card,
.curve__ms--w .curve__ms-card {
  top: 50%;
  --ms-shift: translateY(-50%);
}
.curve__ms--e .curve__ms-card {
  left: 20px;
}
.curve__ms--w .curve__ms-card {
  right: 20px;
  text-align: right;
  align-items: flex-end;
}
.curve__ms--n .curve__ms-card,
.curve__ms--s .curve__ms-card {
  left: 50%;
  --ms-shift: translateX(-50%);
  text-align: center;
  align-items: center;
}
.curve__ms--n .curve__ms-card {
  bottom: 16px;
}
.curve__ms--s .curve__ms-card {
  top: 16px;
}
.curve__ms--mark .curve__ms-pin {
  border-color: var(--mark-500);
  background: var(--mark-500);
  box-shadow: 0 0 0 5px color-mix(in oklab, var(--mark-500) 28%, transparent);
}
.curve__ms--mark .curve__ms-card {
  background: var(--mark-500);
  color: var(--field-900);
  border-color: transparent;
}
.curve__ms--mark .curve__ms-card small {
  color: color-mix(in oklab, var(--field-900) 72%, transparent);
}

/* Leyenda */
.curve__legend {
  margin-bottom: var(--space-3);
  justify-content: flex-end;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1.2rem;
  font-size: var(--fs-small);
  color: var(--fg-muted);
}
.curve__legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.curve__swatch {
  width: 22px;
  height: 3px;
  background: var(--curve-ink);
}
.curve__swatch--ghost {
  background: repeating-linear-gradient(90deg, var(--mark-500) 0 3px, transparent 3px 7px);
}

/* Tooltip */
.curve__tip {
  position: absolute;
  transform: translate(14px, -120%);
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 0.45rem 0.7rem;
  border-radius: var(--radius-md);
  background: var(--fg);
  color: var(--bg);
  font-size: var(--fs-small);
  line-height: 1.25;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition:
    opacity var(--dur-fast) var(--ease-out),
    transform var(--dur-fast) var(--ease-out);
  box-shadow: var(--shadow-md);
}
.curve__tip.is-on {
  opacity: 1;
}
.curve__tip.is-flip {
  transform: translate(calc(-100% - 14px), -120%);
}
.curve__tip strong {
  font-family: var(--font-display);
  font-size: 0.95rem;
}
.curve__tip span {
  opacity: 0.85;
}

.curve__caption {
  margin-top: var(--space-3);
  font-size: var(--fs-micro);
  color: var(--fg-muted);
  letter-spacing: 0.01em;
}

@media (max-width: 700px) {
  .curve__frame {
    aspect-ratio: 1000 / 640;
  }
  .curve__ticks text {
    font-size: 30px;
  }
  .curve__ticks .curve__axis-name {
    font-size: 24px;
  }
  .curve__ms-card {
    min-width: 7.5rem;
    padding: 0.4rem 0.55rem;
  }
  .curve__legend {
    justify-content: flex-start;
  }
  .curve__svg {
    cursor: default;
  }
  /* Tarjetas compactas: solo el titulo, sin subtitulo */
  .curve__ms-card small {
    display: none;
  }
  .curve__ms-card {
    gap: 0;
    padding: 0.3rem 0.5rem;
    min-width: 0;
    white-space: nowrap;
    border-radius: var(--radius-sm);
  }
  /* Cerca del borde derecho, los hitos centrados se anclan a la derecha */
  .curve__ms--n .curve__ms-card,
  .curve__ms--s .curve__ms-card {
    left: auto;
    right: -6px;
    --ms-shift: translate(0, 0);
    text-align: right;
    align-items: flex-end;
  }
}
</style>
