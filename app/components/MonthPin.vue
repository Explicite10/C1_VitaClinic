<script setup lang="ts">
/**
 * Anotación de mes sobre la curva compartida: un fragmento de la curva con el
 * punto clavado en el mes que la sección trata. Es el hilo que une las secciones.
 */
import { weightAt, xFor, yFor, pathFor, MAX_M } from '~/utils/curve'

const props = withDefaults(defineProps<{ m: number; label?: string; to?: number }>(), { label: '' })

const d = pathFor(weightAt)
const x = xFor(props.m)
const y = yFor(weightAt(props.m))
const x2 = props.to != null ? xFor(Math.min(props.to, MAX_M)) : null
const text = computed(() => {
  if (props.label) return props.label
  if (props.to != null) return `Mes ${props.m} – ${props.to >= 12 ? '12+' : props.to}`
  return props.m >= 12 ? 'Mes 12+' : `Mes ${props.m}`
})
</script>

<template>
  <span class="pin" aria-hidden="true">
    <svg viewBox="0 0 1000 600" class="pin__svg" preserveAspectRatio="none">
      <path :d="d" class="pin__curve" />
      <line v-if="x2 != null" :x1="x" :x2="x2" :y1="560" :y2="560" class="pin__range" />
      <line :x1="x" :x2="x" :y1="40" :y2="560" class="pin__guide" />
      <circle :cx="x" :cy="y" r="26" class="pin__dot" />
    </svg>
    <span class="pin__label num">{{ text }}</span>
  </span>
</template>

<style scoped>
.pin {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--fg-muted);
  font-size: var(--fs-small);
  font-weight: 600;
  white-space: nowrap;
}
.pin__svg {
  width: 64px;
  height: 34px;
  overflow: visible;
}
.pin__curve {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.5;
  vector-effect: non-scaling-stroke;
  opacity: 0.55;
}
.pin__guide {
  stroke: currentColor;
  stroke-width: 1;
  stroke-dasharray: 3 4;
  vector-effect: non-scaling-stroke;
  opacity: 0.5;
}
.pin__range {
  stroke: currentColor;
  stroke-width: 3;
  vector-effect: non-scaling-stroke;
  opacity: 0.7;
}
.pin__dot {
  fill: var(--bg);
  stroke: var(--fg);
  stroke-width: 3;
  vector-effect: non-scaling-stroke;
}
.pin__label {
  color: var(--fg);
}
</style>
