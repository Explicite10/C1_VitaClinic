<script setup lang="ts">
import { promos } from '~/data/clinic'

const promo = promos[0]
const pctEl = ref<HTMLElement | null>(null)
const pct = useCountUp(pctEl, promo.pct, { format: (n) => `${Math.round(n)}%` })
</script>

<template>
  <section id="promociones" class="promos on-field" aria-labelledby="promos-title">
    <div class="container">
      <div class="sec-head">
        <h2 id="promos-title" data-reveal>Promoción por tiempo limitado</h2>
        <MonthPin :m="3" label="Mes 3 · tu ahorro" />
      </div>
      <article class="promo">
        <div class="promo__pct"><span ref="pctEl" class="num">{{ pct }}</span><em>OFF</em></div>
        <div class="promo__body">
          <h3>{{ promo.title }}</h3>
          <p>{{ promo.detail }}</p>
          <small>{{ promo.condition }}</small>
        </div>
        <div class="promo__cta">
          <WaButton
            label="Quiero mi 15% de descuento"
            message="Hola, quiero aprovechar el 15% de descuento pagando 3 meses del tratamiento GLP-1 y saber si soy candidato."
          />
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.promos {
  padding-block: var(--section-y);
  background: var(--field-900);
  border-top: 1px solid var(--line);
}
.promo {
  position: relative;
  margin-top: var(--space-6);
  display: grid;
  gap: var(--space-5) var(--space-6);
  align-items: center;
  padding: clamp(1.5rem, 1rem + 2vw, 3rem);
  border-radius: var(--radius-lg);
  background: var(--mark-500);
  color: var(--field-900);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}
.promo::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(90% 120% at 100% 0%, rgba(255, 255, 255, 0.35), transparent 60%);
  pointer-events: none;
}
.promo > * {
  position: relative;
}
.promo__pct {
  display: flex;
  align-items: baseline;
  gap: 0.15em;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.6rem, 1.4rem + 5vw, 4.75rem);
  line-height: 0.9;
  letter-spacing: -0.04em;
}
.promo__pct em {
  font-style: normal;
  font-size: 0.34em;
  letter-spacing: 0.02em;
}
.promo__body h3 {
  font-size: var(--fs-h3);
}
.promo__body p {
  margin-top: var(--space-2);
  max-width: 48ch;
}
.promo__body small {
  display: block;
  margin-top: var(--space-3);
  font-size: var(--fs-small);
  color: color-mix(in oklab, var(--field-900) 72%, transparent);
}
@media (min-width: 900px) {
  .promo {
    grid-template-columns: auto 1fr auto;
  }
}
</style>
