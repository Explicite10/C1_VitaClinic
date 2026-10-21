<script setup lang="ts">
import { durations, pricing, promos } from '~/data/clinic'

const priceEl = ref<HTMLElement | null>(null)
const price = useCountUp(priceEl, pricing.from, {
  duration: 1600,
  format: (n) => `$${Math.round(n).toLocaleString('es-MX')}`,
})

const includes = [
  'Valoración médica inicial y receta',
  'Medicamento GLP‑1 original indicado para ti',
  'Controles médicos durante el tratamiento',
  'Plan de alimentación personalizado',
  'Acompañamiento psicológico',
  'Plan de mantenimiento al concluir',
]

const active = ref(0)
</script>

<template>
  <section id="paquetes" class="plans" aria-labelledby="plans-title">
    <div class="container">
      <div class="sec-head">
        <h2 id="plans-title" data-reveal>Paquetes y precio transparente</h2>
        <MonthPin :m="3" :to="12" label="Mes 3 – 12+ · tu plan" />
      </div>
      <p class="plans__lead" data-reveal>
        Todos los paquetes incluyen medicamento, consultas y seguimiento completo. La duración la define tu médico
        contigo según tu meta y cómo respondes al tratamiento.
      </p>

      <div class="plans__price" data-reveal>
        <span class="plans__from">Desde</span>
        <strong ref="priceEl" class="plans__amount num">{{ price }}</strong>
        <span class="plans__cur">MXN</span>
        <span class="plans__tag">100% personalizado</span>
      </div>

      <ol class="grid" role="list">
        <li
          v-for="(d, i) in durations"
          :key="d.months"
          class="plan"
          :class="{ 'is-active': active === i, 'plan--promo': d.months === 3 }"
          @pointerenter="active = i"
          @click="active = i"
        >
          <span v-if="d.months === 3" class="plan__promo num">{{ promos[1].pct }}% OFF de contado</span>
          <strong class="plan__months num">{{ d.label }}</strong>
          <span class="plan__who">{{ d.who }}</span>
          <span class="plan__price">Cotización personalizada</span>
          <WaButton
            :label="`Quiero el plan de ${d.label.toLowerCase()}`"
            :message="`Hola, me interesa el plan de ${d.label.toLowerCase()} del tratamiento GLP-1 y quiero saber si soy candidato.`"
            :variant="active === i ? 'wa' : 'ghost'"
            class="plan__cta"
          />
        </li>
      </ol>

      <div class="plans__includes">
        <h3>Todo lo que incluye tu paquete</h3>
        <ul role="list">
          <li v-for="item in includes" :key="item"><IconGlyph name="check" :size="18" />{{ item }}</li>
        </ul>
        <p class="plans__note">{{ pricing.note }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.plans {
  padding-block: var(--section-y);
  background: #fff;
}
.plans__lead {
  margin-top: var(--space-4);
  max-width: var(--measure);
  font-size: var(--fs-lead);
  color: var(--fg-muted);
}
.plans__price {
  margin-top: var(--space-6);
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.2em 0.45em;
  font-family: var(--font-display);
}
.plans__from {
  font-size: var(--fs-lead);
  color: var(--fg-muted);
}
.plans__amount {
  font-size: clamp(2.6rem, 1.4rem + 5vw, 4.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.95;
  color: var(--field-700);
}
.plans__cur {
  font-weight: 600;
  color: var(--field-700);
}
.plans__tag {
  margin-left: var(--space-3);
  padding: 0.35em 0.8em;
  border-radius: var(--radius-pill);
  background: var(--field-700);
  color: var(--field-050);
  font-size: var(--fs-small);
  font-weight: 700;
  align-self: center;
}
.grid {
  margin-top: var(--space-6);
  display: grid;
  gap: var(--space-4);
}
.plan {
  position: relative;
  display: grid;
  gap: var(--space-2);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  border: 1.5px solid var(--line);
  background: var(--field-050);
  transition:
    border-color var(--dur-base) var(--ease-out),
    transform var(--dur-base) var(--ease-ballistic),
    box-shadow var(--dur-base) var(--ease-out),
    background var(--dur-base) var(--ease-out);
}
.plan.is-active {
  border-color: var(--field-700);
  background: var(--field-700);
  color: var(--field-050);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
.plan__promo {
  justify-self: start;
  padding: 0.3em 0.7em;
  border-radius: var(--radius-pill);
  background: var(--mark-500);
  color: var(--field-900);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--fs-micro);
  letter-spacing: 0.01em;
}
.plan__months {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 1.3rem + 1.2vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-top: var(--space-2);
}
.plan__who {
  color: var(--fg-muted);
  font-size: var(--fs-small);
  min-height: 2.6em;
}
.plan.is-active .plan__who {
  color: var(--field-200);
}
.plan__price {
  margin-top: var(--space-2);
  padding-top: var(--space-3);
  border-top: 1px solid var(--line);
  font-weight: 600;
  font-size: var(--fs-small);
}
.plan__cta {
  margin-top: var(--space-3);
  font-size: 0.9rem;
  justify-content: center;
}
.plans__includes {
  margin-top: var(--space-7);
  padding-top: var(--space-6);
  border-top: 1px solid var(--line-strong);
}
.plans__includes h3 {
  font-size: var(--fs-h3);
}
.plans__includes ul {
  margin-top: var(--space-4);
  display: grid;
  gap: var(--space-3);
}
.plans__includes li {
  display: flex;
  align-items: flex-start;
  gap: 0.6em;
}
.plans__includes svg {
  flex: none;
  margin-top: 0.2em;
  color: var(--brand-teal);
}
.plans__note {
  margin-top: var(--space-5);
  font-size: var(--fs-small);
  color: var(--fg-muted);
  max-width: var(--measure);
}
@media (min-width: 720px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .plans__includes ul {
    grid-template-columns: 1fr 1fr;
    column-gap: var(--space-6);
  }
}
@media (min-width: 1100px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .plans__includes ul {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
