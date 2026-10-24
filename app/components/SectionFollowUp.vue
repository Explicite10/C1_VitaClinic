<script setup lang="ts">
import type { Milestone } from '~/utils/curve'
import type { IconName } from '~/utils/icons'

const team: { icon: IconName; name: string; does: string; when: string }[] = [
  {
    icon: 'stethoscope',
    name: 'Seguimiento médico',
    does: 'Valora si eres candidato, elige el medicamento, ajusta la dosis y vigila efectos secundarios y laboratorios.',
    when: 'Durante todo el tratamiento',
  },
  {
    icon: 'nutrition',
    name: 'Seguimiento nutricional',
    does: 'Diseña un plan de alimentación realista para tu rutina y protege tu masa muscular mientras bajas de peso.',
    when: 'Durante todo el tratamiento',
  },
  {
    icon: 'mind',
    name: 'Seguimiento psicológico',
    does: 'Trabaja la relación con la comida, la ansiedad y los hábitos que, sin atender, provocan la reganancia.',
    when: 'Durante todo el tratamiento',
  },
]

const milestones: Milestone[] = [
  { m: 5, label: 'Aquí se separan', sub: 'Con y sin seguimiento', tone: 'plain', place: 'sw' },
  { m: 12, label: 'Peso estable', sub: 'Hábitos consolidados', tone: 'plain', place: 'n' },
  { m: 12, label: 'Reganancia', sub: 'Al suspender sin seguimiento', tone: 'mark', place: 'nw', on: 'ghost' },
]
</script>

<template>
  <section id="seguimiento" class="follow on-field" aria-labelledby="follow-title">
    <div class="container">
      <div class="sec-head">
        <h2 id="follow-title" data-reveal>El medicamento baja el peso. El seguimiento evita que regrese.</h2>
      </div>
      <div class="follow__head">
        <p data-reveal>
          Sin acompañamiento, al suspender el GLP‑1 el apetito vuelve y con él gran parte del peso perdido. Por eso
          en VitaClinic el tratamiento incluye a tres especialistas trabajando sobre el mismo plan: mejores
          resultados durante, y menos reganancia al concluir.
        </p>
      </div>

      <div class="follow__chart" data-reveal>
        <WeightCurve
          :milestones="milestones"
          compare
          :duration="2400"
          caption="Curva ilustrativa: la línea punteada muestra la reganancia habitual al suspender sin seguimiento. Los resultados varían según cada paciente."
        />
      </div>

      <dl class="team">
        <template v-for="t in team" :key="t.name">
          <dt class="team__name">
            <IconGlyph :name="t.icon" :size="22" />
            <span>{{ t.name }}</span>
            <span class="team__when num">{{ t.when }}</span>
          </dt>
          <dd class="team__does">{{ t.does }}</dd>
        </template>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.follow {
  padding-block: var(--section-y);
  background: linear-gradient(180deg, var(--field-700), var(--field-800));
}
.follow__head {
  max-width: var(--measure);
  display: grid;
  gap: var(--space-5);
}
.follow__head p {
  font-size: var(--fs-lead);
  color: var(--field-100);
}
.follow__chart {
  --curve-ink: var(--field-050);
  margin-top: var(--space-7);
  max-width: 62rem;
}
.team {
  margin: var(--space-8) 0 0;
  display: grid;
  border-top: 1px solid var(--line-strong);
}
.team__name {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
  padding-top: var(--space-5);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--fs-h3);
  letter-spacing: -0.01em;
}
.team__name svg {
  color: var(--field-050);
}
.team__when {
  margin-left: auto;
  font-family: var(--font-body);
  font-size: var(--fs-small);
  font-weight: 500;
  color: var(--field-300);
}
.team__does {
  margin: var(--space-2) 0 0;
  padding-bottom: var(--space-5);
  border-bottom: 1px solid var(--line);
  color: var(--field-200);
  max-width: var(--measure);
}
.follow__head {
  display: grid;
  gap: var(--space-4);
}
@media (min-width: 820px) {
  .team {
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--space-6);
  }
  .team__name {
    grid-row: 1;
  }
  .team__does {
    grid-row: 2;
  }
  .team__when {
    margin-left: 0;
    flex-basis: 100%;
  }
}
</style>
