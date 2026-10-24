<script setup lang="ts">
const steps = [
  {
    when: 'Hoy',
    title: 'Escríbenos por WhatsApp',
    text: 'Cuéntanos tu caso en un mensaje. Te decimos qué necesitas para tu primera consulta y agendamos en la clínica que te quede más cerca.',
  },
  {
    when: 'Presencial en clínica',
    title: 'Valoración médica',
    text: 'Historia clínica, mediciones y estudios. El médico confirma si eres candidato y elige el medicamento y la dosis inicial.',
  },
  {
    when: 'Semana 1',
    title: 'Arrancas tu plan',
    text: 'Inicias tu medicamento GLP‑1 con aplicación presencial y programamos tus citas con nutrición y psicología. Una dosis a la semana.',
  },
  {
    when: 'Cada mes',
    title: 'Seguimiento completo',
    text: 'Controles médicos, ajustes de dosis, nutrición y psicología sobre el mismo plan hasta concluir, y luego mantenimiento.',
  },
]
</script>

<template>
  <section id="como-funciona" class="steps" aria-labelledby="steps-title">
    <div class="container">
      <div class="sec-head">
        <h2 id="steps-title" data-reveal>Cómo funciona</h2>
      </div>
      <ol class="steps__list" role="list">
        <li v-for="(s, i) in steps" :key="s.title" class="step">
          <span class="step__n num" aria-hidden="true">{{ i + 1 }}</span>
          <h3>{{ s.title }}</h3>
          <span class="step__when">{{ s.when }}</span>
          <p>{{ s.text }}</p>
        </li>
      </ol>
      <div class="steps__cta">
        <WaButton size="lg" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.steps {
  padding-block: var(--section-y);
  background: var(--bg);
}
.steps__list {
  margin-top: var(--space-6);
  display: grid;
  gap: var(--space-5);
  counter-reset: step;
}
.step {
  position: relative;
  display: grid;
  gap: var(--space-2);
  padding: var(--space-5) 0 var(--space-5) 3.6rem;
  border-top: 1px solid var(--line-strong);
}
.step__n {
  position: absolute;
  left: 0;
  top: var(--space-5);
  width: 2.4rem;
  height: 2.4rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--field-700);
  color: var(--field-050);
  font-family: var(--font-display);
  font-weight: 800;
}
.step__when {
  font-size: var(--fs-small);
  font-weight: 600;
  color: var(--brand-teal);
}
.step h3 {
  font-size: var(--fs-h3);
}
.step p {
  color: var(--fg-muted);
  max-width: 40ch;
}
.steps__cta {
  margin-top: var(--space-6);
}
@media (min-width: 900px) {
  .steps__list {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-5);
  }
  .step {
    padding-left: 0;
    padding-top: var(--space-6);
  }
  .step__n {
    position: static;
    margin-bottom: var(--space-2);
  }
}
</style>
