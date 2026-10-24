<script setup lang="ts">
import type { Milestone } from '~/utils/curve'

const milestones: Milestone[] = [
  { m: 0, label: 'Inicio', sub: 'Tu peso de partida', tone: 'plain', place: 'e' },
  { m: 12, label: 'Hasta −25%', sub: 'de tu peso inicial', tone: 'mark', place: 'n' },
]

const people = [
  { src: '/team/psicologa.webp', role: 'Psicología', cls: 'p--left' },
  { src: '/team/medico.webp', role: 'Médico', cls: 'p--center' },
  { src: '/team/nutriologa.webp', role: 'Nutrición', cls: 'p--right' },
]
</script>

<template>
  <section id="inicio" class="hero on-field">
    <div class="container hero__grid">
      <div class="hero__copy">
        <h1 class="hero__title" data-reveal>
          Baja de peso con GLP‑1 <span class="hero__title-soft">y un equipo que te acompaña</span>
        </h1>
        <a href="#paquetes" class="hero__price" data-reveal>
          <span>Desde</span>
          <strong class="num">$3,499</strong>
          <span>MXN</span>
        </a>
        <p class="hero__lead" data-reveal>
          Nuestro programa combina valoración médica, nutrición clínica y acompañamiento psicológico, para ayudarte a
          mejorar tu salud, desarrollar hábitos sostenibles y avanzar hacia tus objetivos de forma personalizada.
        </p>
        <div class="hero__actions" data-reveal>
          <WaButton size="lg" />
        </div>
        <ul class="hero__facts" role="list">
          <li><IconGlyph name="stethoscope" :size="18" /> Médico</li>
          <li><IconGlyph name="nutrition" :size="18" /> Nutrición</li>
          <li><IconGlyph name="mind" :size="18" /> Psicología</li>
          <li><IconGlyph name="pen" :size="18" /> Enfermería</li>
          <li><IconGlyph name="pin" :size="18" /> Presencial</li>
        </ul>
      </div>

      <div class="hero__people" aria-label="Equipo de médico, psicología y nutrición">
        <figure v-for="p in people" :key="p.role" class="person" :class="p.cls">
          <img :src="p.src" :alt="`Especialista de ${p.role.toLowerCase()}`" width="800" height="1100" />
          <figcaption>{{ p.role }}</figcaption>
        </figure>
      </div>
    </div>

    <div class="container hero__chart">
      <p class="hero__claim" data-reveal>Puedes perder <strong>hasta un 25%</strong> de tu peso</p>
      <WeightCurve
        :milestones="milestones"
        :duration="3000"
        caption="Los resultados dependen del medicamento, dosis, tiempo de tratamiento y características individuales."
      />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding-block: clamp(2.5rem, 2rem + 4vw, 5rem) clamp(3rem, 2rem + 5vw, 6rem);
  background:
    radial-gradient(120% 90% at 85% 10%, color-mix(in oklab, var(--field-500) 55%, transparent) 0%, transparent 60%),
    linear-gradient(180deg, var(--field-800) 0%, var(--field-700) 55%, var(--field-800) 100%);
}
.hero__grid {
  position: relative;
  display: grid;
  gap: clamp(2rem, 1rem + 4vw, 3.5rem);
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
.hero__price {
  margin-top: var(--space-5);
  display: inline-flex;
  align-items: baseline;
  gap: 0.35em;
  text-decoration: none;
  font-family: var(--font-display);
  color: var(--field-050);
}
.hero__price span {
  font-size: clamp(1.1rem, 1rem + 0.6vw, 1.5rem);
  font-weight: 600;
  color: var(--field-200);
}
.hero__price strong {
  font-size: clamp(2.6rem, 1.4rem + 5vw, 4.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.95;
  color: var(--mark-500);
}
.hero__lead {
  margin-top: var(--space-5);
  max-width: 46ch;
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
.hero__facts {
  margin-top: var(--space-6);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3) var(--space-5);
  font-size: var(--fs-small);
  font-weight: 500;
  color: var(--field-100);
}
.hero__facts li {
  display: inline-flex;
  align-items: center;
  gap: 0.45em;
}
.hero__facts svg {
  color: var(--field-050);
}

/* Equipo recortado */
.hero__people {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  margin-bottom: calc(-1 * clamp(3rem, 2rem + 4vw, 5rem));
  align-items: end;
  min-height: 0;
}
.hero__people::before {
  content: '';
  position: absolute;
  left: 6%;
  right: 6%;
  bottom: 0;
  height: 78%;
  border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
  background: radial-gradient(80% 70% at 50% 100%, color-mix(in oklab, var(--field-400) 60%, transparent), transparent 75%);
}
.person {
  position: relative;
  margin: 0;
  display: grid;
  justify-items: center;
}
.person img {
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.35));
}
.p--left {
  margin-right: -24%;
  z-index: 1;
}
.p--center {
  z-index: 2;
}
.p--right {
  margin-left: -24%;
  z-index: 1;
}
.person figcaption {
  position: absolute;
  bottom: 6%;
  padding: 0.35em 0.85em;
  border-radius: var(--radius-pill);
  background: var(--field-050);
  color: var(--field-900);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--fs-small);
  box-shadow: var(--shadow-md);
  white-space: nowrap;
}

.hero__chart {
  --curve-ink: var(--field-050);
  margin-top: clamp(3rem, 2rem + 4vw, 5rem);
  padding-top: var(--space-6);
  border-top: 1px solid var(--line);
  color: var(--field-050);
}
.hero__claim {
  margin-bottom: var(--space-4);
  font-family: var(--font-display);
  font-size: var(--fs-h3);
  font-weight: 500;
  color: var(--field-100);
}
.hero__claim strong {
  font-weight: 800;
  color: var(--mark-500);
}
.hero__chart :deep(.curve) {
  max-width: 62rem;
}

@media (min-width: 900px) {
  .hero__grid {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  }
  .hero__title {
    max-width: 12ch;
  }
}
@media (max-width: 899px) {
  .hero__people {
    max-width: 520px;
    width: 100%;
    margin-inline: auto;
  }
}
</style>
