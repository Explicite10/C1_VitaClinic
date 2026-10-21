<script setup lang="ts">
const benefits = [
  {
    when: 'Mes 1',
    title: 'Menos hambre, sin pelear contigo',
    text: 'El GLP‑1 actúa sobre las señales de saciedad: comes menos porque tu cuerpo lo pide menos, no por fuerza de voluntad.',
  },
  {
    when: 'Semana 1',
    title: 'Una aplicación a la semana',
    text: 'Pluma precargada, dosis que tu médico ajusta mes a mes según tu respuesta y tolerancia.',
  },
  {
    when: 'Mes 3',
    title: 'Mejora metabólica, no solo la báscula',
    text: 'Glucosa, presión y marcadores inflamatorios suelen mejorar junto con el peso. Lo medimos en cada control.',
  },
  {
    when: 'Mes 0',
    title: 'Un plan que es tuyo',
    text: 'Medicamento, dosis, alimentación y duración se deciden con tu historia clínica, no con un paquete genérico.',
  },
]
</script>

<template>
  <section id="tratamiento" class="benefits" aria-labelledby="benefits-title">
    <div class="container benefits__grid">
      <div class="benefits__intro">
        <h2 id="benefits-title" data-reveal>Por qué el GLP‑1 cambia la conversación con la comida</h2>
        <MonthPin :m="1" :to="3" label="Mes 1 – 3 · lo que notas primero" />
        <p data-reveal>
          Los agonistas de GLP‑1 (semaglutida, tirzepatida) son medicamentos de prescripción que imitan una hormona
          intestinal: regulan el apetito y la velocidad con la que el estómago se vacía. Con supervisión médica, son
          hoy la herramienta más efectiva para el control de peso.
        </p>
        <p class="benefits__note">Solo con receta y valoración médica previa.</p>
      </div>
      <ol class="benefits__list" role="list">
        <li v-for="b in benefits" :key="b.title" class="benefit">
          <span class="benefit__tick num">{{ b.when }}</span>
          <h3>{{ b.title }}</h3>
          <p>{{ b.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.benefits {
  padding-block: var(--section-y);
  background: var(--bg);
}
.benefits__grid {
  display: grid;
  gap: var(--space-7);
}
.benefits__intro {
  max-width: 48ch;
  display: grid;
  gap: var(--space-4);
}
.benefits__intro p {
  margin-top: var(--space-2);
  font-size: var(--fs-lead);
  color: var(--fg-muted);
}
.benefits__note {
  font-size: var(--fs-small) !important;
  color: var(--ink-500);
}
.benefits__list {
  display: grid;
  border-top: 1px solid var(--line-strong);
}
.benefit {
  display: grid;
  grid-template-columns: 5.5rem 1fr;
  grid-template-rows: auto auto;
  column-gap: var(--space-4);
  padding-block: var(--space-5);
  border-bottom: 1px solid var(--line);
}
.benefit__tick {
  grid-row: 1 / 3;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--fs-small);
  color: var(--brand-teal);
  padding-top: 0.35em;
}
.benefit h3 {
  font-size: var(--fs-h3);
}
.benefit p {
  margin-top: var(--space-2);
  color: var(--fg-muted);
  max-width: 52ch;
}
@media (min-width: 960px) {
  .benefits__grid {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    align-items: start;
  }
  .benefits__intro {
    position: sticky;
    top: 100px;
  }
}
</style>
