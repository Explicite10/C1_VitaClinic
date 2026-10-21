<script setup lang="ts">
import type { Milestone } from '~/utils/curve'

const milestones: Milestone[] = [
  { m: 0, label: '10% OFF', sub: 'Primera consulta', tone: 'mark', place: 'e' },
  { m: 3, label: '15% OFF', sub: '3 meses de contado', tone: 'mark', place: 'ne' },
  { m: 12, label: 'Menos reganancia', sub: 'Mantenimiento guiado', tone: 'plain', place: 'n' },
]
</script>

<template>
  <section id="inicio" class="hero on-field">
    <div class="container hero__grid">
      <div class="hero__copy">
        <h1 class="hero__title" data-reveal>
          Baja de peso con GLP‑1 <span class="hero__title-soft">y un equipo que te acompaña</span>
        </h1>
        <p class="hero__lead" data-reveal>
          Tratamiento médico con semaglutida o tirzepatida, seguimiento médico, nutricional y psicológico y paquetes
          de 3, 5, 7 meses o más de un año. Desde $4,500 MXN, en dos clínicas de la Ciudad de México.
        </p>
        <div class="hero__actions" data-reveal>
          <WaButton size="lg" />
          <a href="#paquetes" class="hero__secondary">
            Desde <strong class="num">$4,500 MXN</strong>
            <IconGlyph name="chevron" :size="16" />
          </a>
        </div>
        <ul class="hero__facts" role="list">
          <li><IconGlyph name="stethoscope" :size="18" /> Médico</li>
          <li><IconGlyph name="nutrition" :size="18" /> Nutrición</li>
          <li><IconGlyph name="mind" :size="18" /> Psicología</li>
        </ul>
      </div>

      <div class="hero__chart">
        <WeightCurve :milestones="milestones" autoplay :duration="3000" caption="Curva ilustrativa del acompañamiento mes a mes. Los resultados varían según cada paciente." />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(2.5rem, 2rem + 4vw, 6rem) clamp(3rem, 2rem + 5vw, 7rem);
  background:
    radial-gradient(120% 90% at 85% 10%, color-mix(in oklab, var(--field-500) 55%, transparent) 0%, transparent 60%),
    linear-gradient(180deg, var(--field-800) 0%, var(--field-700) 55%, var(--field-800) 100%);
}
.hero__grid {
  position: relative;
  display: grid;
  gap: clamp(2rem, 1rem + 4vw, 4rem);
  align-items: center;
}
.hero__title {
  max-width: 14ch;
}
.hero__title-soft {
  display: block;
  color: var(--field-200);
  font-weight: 500;
}
.hero__lead {
  margin-top: var(--space-5);
  max-width: 44ch;
  font-size: var(--fs-lead);
  color: var(--field-100);
}
.hero__actions {
  margin-top: var(--space-6);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4) var(--space-5);
}
.hero__secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  text-decoration: none;
  color: var(--field-100);
  font-size: var(--fs-small);
}
.hero__secondary strong {
  font-family: var(--font-display);
  font-size: 1.1em;
  color: var(--field-050);
}
.hero__secondary svg {
  transform: rotate(-90deg);
  transition: transform var(--dur-base) var(--ease-ballistic);
}
.hero__secondary:hover svg {
  transform: rotate(-90deg) translateY(3px);
}
.hero__facts {
  margin-top: var(--space-6);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3) var(--space-5);
  font-size: var(--fs-small);
  font-weight: 500;
  color: var(--field-200);
}
.hero__facts li {
  display: inline-flex;
  align-items: center;
  gap: 0.45em;
}
.hero__facts svg {
  color: var(--field-300);
}
.hero__chart {
  --curve-ink: var(--field-050);
  color: var(--field-050);
}

@media (min-width: 900px) {
  .hero__grid {
    grid-template-columns: minmax(0, 6fr) minmax(0, 6fr);
  }
  .hero__title {
    max-width: 12ch;
  }
}
@media (min-width: 1200px) {
  .hero__grid {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  }
  .hero {
    min-height: calc(100svh - 72px);
    display: flex;
    align-items: center;
  }
}
</style>
