<script setup lang="ts">
type Role = 'medico' | 'nutricion' | 'psicologia' | 'enfermeria'

const team: { role: Role; name: string; text: string }[] = [
  {
    role: 'medico',
    name: 'Valoración y seguimiento médico',
    text: 'Evaluamos tu estado de salud, determinamos si eres candidato al tratamiento con GLP‑1 y supervisamos tu evolución, dosis y posibles efectos secundarios.',
  },
  {
    role: 'nutricion',
    name: 'Nutrición personalizada',
    text: 'Diseñamos un plan de alimentación adaptado a tus necesidades para favorecer una pérdida de peso saludable, cuidar tu masa muscular y mejorar tus hábitos alimenticios.',
  },
  {
    role: 'psicologia',
    name: 'Acompañamiento psicológico',
    text: 'Trabajamos los aspectos emocionales y conductuales relacionados con la alimentación, la motivación y la construcción de hábitos que puedas mantener a largo plazo.',
  },
  {
    role: 'enfermeria',
    name: 'Enfermería',
    text: 'Nuestro personal aplica tu medicamento GLP‑1 de forma presencial cada semana y vigila tu tolerancia en cada aplicación.',
  },
]
</script>

<template>
  <section id="diferente" class="team on-field" aria-labelledby="team-title">
    <div class="container">
      <div class="sec-head">
        <h2 id="team-title" data-reveal>¿Qué hace diferente nuestro tratamiento?</h2>
        <MonthPin :m="0" :to="12" label="Mes 0 – 12+ · en persona" />
      </div>
      <ul class="team__facts" role="list" data-reveal>
        <li><IconGlyph name="pin" :size="18" /> 100% presencial en nuestras dos clínicas</li>
        <li><IconGlyph name="check" :size="18" /> Todo el equipo incluido en tu paquete</li>
      </ul>

      <ul class="team__grid" role="list">
        <li v-for="t in team" :key="t.role" class="member">
          <div class="member__fig"><TeamFigure :role="t.role" /></div>
          <h3>{{ t.name }}</h3>
          <p>{{ t.text }}</p>
        </li>
      </ul>

      <div class="team__end">
        <p>
          No se trata solamente de perder kilos, sino de transformar tu salud con el respaldo de un equipo
          profesional.
        </p>
        <WaButton
          size="lg"
          label="Agenda tu valoración"
          message="Hola, quiero agendar mi valoración presencial para el tratamiento GLP-1 de VitaClinic."
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.team {
  padding-block: var(--section-y);
  background: linear-gradient(180deg, var(--field-800), var(--field-700));
}
.team__facts {
  margin-top: var(--space-5);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}
.team__facts li {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em 1em;
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--line-strong);
  font-size: var(--fs-small);
  font-weight: 600;
}
.team__facts svg {
  color: var(--field-300);
}
.team__grid {
  margin-top: var(--space-7);
  display: grid;
  gap: var(--space-6) var(--space-5);
}
.member {
  display: grid;
  gap: var(--space-3);
  align-content: start;
}
.member__fig {
  width: min(180px, 60%);
  transition: transform var(--dur-slow) var(--ease-ballistic);
}
.member:hover .member__fig {
  transform: translateY(-4px);
}
.member h3 {
  margin-top: var(--space-2);
  font-size: var(--fs-h3);
}
.member p {
  color: var(--field-200);
  max-width: 40ch;
}
.team__end {
  margin-top: var(--space-8);
  padding-top: var(--space-6);
  border-top: 1px solid var(--line);
  display: grid;
  gap: var(--space-5);
  justify-items: start;
}
.team__end p {
  max-width: 30ch;
  font-family: var(--font-display);
  font-size: var(--fs-h2);
  font-weight: 700;
  line-height: var(--lh-snug);
  letter-spacing: var(--track-tight);
  text-wrap: balance;
}
@media (min-width: 640px) {
  .team__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1100px) {
  .team__grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .member__fig {
    width: min(180px, 80%);
  }
}
</style>
