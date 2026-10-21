<script setup lang="ts">
import { promos } from '~/data/clinic'

const a = ref<HTMLElement | null>(null)
const b = ref<HTMLElement | null>(null)
const na = useCountUp(a, promos[0].pct, { format: (n) => `${Math.round(n)}%` })
const nb = useCountUp(b, promos[1].pct, { format: (n) => `${Math.round(n)}%`, delay: 150 })
</script>

<template>
  <section id="promociones" class="promos on-field" aria-labelledby="promos-title">
    <div class="container">
      <div class="sec-head">
        <h2 id="promos-title" data-reveal>Promociones por tiempo limitado</h2>
        <MonthPin :m="0" :to="3" label="Mes 0 y mes 3 · dos hitos" />
      </div>
      <div class="promos__head">
        <p data-reveal>Dos hitos marcados en tu curva: al empezar y al comprometerte con tres meses.</p>
      </div>
      <ol class="promos__list" role="list">
        <li class="promo">
          <div class="promo__pct"><span ref="a" class="num">{{ na }}</span><em>OFF</em></div>
          <div class="promo__body">
            <h3>{{ promos[0].title }}</h3>
            <p>{{ promos[0].detail }}</p>
            <small>{{ promos[0].condition }}</small>
          </div>
          <span class="promo__month num">Mes 0</span>
        </li>
        <li class="promo">
          <div class="promo__pct"><span ref="b" class="num">{{ nb }}</span><em>OFF</em></div>
          <div class="promo__body">
            <h3>{{ promos[1].title }}</h3>
            <p>{{ promos[1].detail }}</p>
            <small>{{ promos[1].condition }}</small>
          </div>
          <span class="promo__month num">Mes 3</span>
        </li>
      </ol>
      <div class="promos__cta">
        <WaButton message="Hola, quiero aprovechar la promoción y saber si soy candidato al tratamiento GLP-1." />
        <span>Menciona la promoción al escribirnos.</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.promos {
  padding-block: var(--section-y);
  background: var(--field-900);
  border-top: 1px solid var(--line);
}
.promos__head {
  margin-top: var(--space-4);
  max-width: var(--measure);
  margin-bottom: var(--space-7);
}
.promos__head p {
  color: var(--field-200);
  font-size: var(--fs-lead);
}
.promos__list {
  display: grid;
  gap: var(--space-5);
}
.promo {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-5);
  align-items: start;
  padding: var(--space-6);
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
.promo__pct {
  display: flex;
  align-items: baseline;
  gap: 0.15em;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.6rem, 1.6rem + 4vw, 4.5rem);
  line-height: 0.9;
  letter-spacing: -0.04em;
}
.promo__pct em {
  font-style: normal;
  font-size: 0.38em;
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
  color: color-mix(in oklab, var(--field-900) 70%, transparent);
}
.promo__month {
  position: absolute;
  right: var(--space-5);
  top: var(--space-4);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--fs-small);
  padding: 0.3em 0.7em;
  border-radius: var(--radius-pill);
  background: var(--field-900);
  color: var(--mark-500);
}
.promos__cta {
  margin-top: var(--space-7);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4) var(--space-5);
  color: var(--field-200);
  font-size: var(--fs-small);
}
@media (min-width: 820px) {
  .promos__list {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 520px) {
  .promo {
    grid-template-columns: 1fr;
    padding: var(--space-5);
  }
  .promo__month {
    position: static;
    justify-self: start;
    order: -1;
  }
}
</style>
