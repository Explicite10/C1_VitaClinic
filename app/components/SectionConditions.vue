<script setup lang="ts">
import { conditions } from '~/data/seo'
</script>

<template>
  <section id="condiciones" class="cond" aria-labelledby="cond-title">
    <div class="container cond__grid">
      <div class="cond__intro">
        <h2 id="cond-title" data-reveal>¿Subiste de peso y las dietas ya no funcionan?</h2>
        <p data-reveal>
          En VitaClinic somos una clínica metabólica: no solo buscamos que bajes de peso, revisamos tu metabolismo
          completo. El control del peso suele ir de la mano con otras condiciones, y las atendemos en conjunto con
          tratamiento médico, nutrición y nuevos hábitos.
        </p>
        <p class="cond__note">
          Tu médico valora en consulta si el tratamiento con GLP‑1 (semaglutida o tirzepatida) es adecuado para ti.
        </p>
      </div>
      <div>
        <h3 class="cond__list-title">Condiciones que atendemos</h3>
        <ul class="cond__list" role="list">
          <li v-for="c in conditions" :key="c.name">
            <IconGlyph name="check" :size="18" />
            <span>{{ c.name }}</span>
          </li>
        </ul>
        <WaButton
          class="cond__cta"
          label="Agenda tu valoración"
          message="Hola, quiero agendar una valoración en la clínica metabólica de VitaClinic."
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.cond {
  padding-block: var(--section-y);
  background: #fff;
}
.cond__grid {
  display: grid;
  gap: var(--space-7);
}
.cond__intro {
  display: grid;
  gap: var(--space-4);
  align-content: start;
  max-width: 48ch;
}
.cond__intro p {
  font-size: var(--fs-lead);
  color: var(--fg-muted);
}
.cond__intro .cond__note {
  font-size: var(--fs-small);
  color: var(--ink-500);
}
.cond__list-title {
  font-size: var(--fs-h3);
}
.cond__list {
  margin: var(--space-4) 0 0;
  display: grid;
  gap: var(--space-3);
}
.cond__list li {
  display: flex;
  align-items: center;
  gap: 0.6em;
  padding: 0.75em 1em;
  border-radius: var(--radius-md);
  background: var(--field-050);
  border: 1px solid var(--line);
  font-weight: 500;
}
.cond__list svg {
  flex: none;
  color: var(--brand-teal);
}
.cond__cta {
  margin-top: var(--space-6);
}
@media (min-width: 720px) {
  .cond__list {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 960px) {
  .cond__grid {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  }
}
</style>
