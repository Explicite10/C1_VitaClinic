<script setup lang="ts">
import type { IconName } from '~/utils/icons'

interface Line {
  icon?: IconName
  lead: string
  text?: string
  items?: { role: string; text: string }[]
}
interface Step {
  when: string
  title: string
  text: string
  intro?: string
  lines?: Line[]
  closing?: string
}

const steps: Step[] = [
  {
    when: 'Mes 1',
    title: 'Comienza tu transformación',
    text: 'Iniciamos con una valoración integral para conocer tu estado de salud, tus hábitos y tus objetivos. Si eres candidato, diseñamos un tratamiento médico personalizado.',
    intro: 'Durante las primeras 4 semanas recibirás:',
    lines: [
      {
        icon: 'pen',
        lead: 'Aplicaciones semanales de GLP‑1:',
        text: 'administración del medicamento conforme a la indicación médica y seguimiento de tu tolerancia.',
      },
      {
        icon: 'stethoscope',
        lead: 'Citas presenciales con nuestros especialistas:',
        items: [
          { role: 'Médico', text: 'valoración, supervisión del tratamiento y ajustes cuando sean necesarios.' },
          { role: 'Nutrición', text: 'plan de alimentación personalizado para cuidar tu salud y masa muscular.' },
          { role: 'Psicología', text: 'acompañamiento para trabajar hábitos, conducta alimentaria y bienestar emocional.' },
        ],
      },
    ],
    closing: 'Un equipo de profesionales acompañándote desde el primer mes.',
  },
  {
    when: 'Mes 2',
    title: 'Evaluamos tu progreso',
    text: 'Revisamos tus avances, evolución del peso, alimentación y tolerancia al medicamento. Realizamos los ajustes necesarios para continuar avanzando de acuerdo con tus objetivos, y continúas con tu seguimiento médico, nutricional y psicológico.',
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
        <h2 id="benefits-title" data-reveal>Tu tratamiento, paso a paso</h2>
        <MonthPin :m="0" :to="3" label="Mes 0 – 3 · paso a paso" />
        <p data-reveal>
          Los agonistas de GLP‑1 (semaglutida, tirzepatida) son medicamentos que imitan una hormona intestinal:
          regulan el apetito y la velocidad con la que el estómago se vacía. Con supervisión médica, son hoy la
          herramienta más efectiva para el control de peso.
        </p>
        <p class="benefits__note">Requiere valoración médica previa.</p>
      </div>
      <div>
        <ol class="benefits__list" role="list">
          <li v-for="s in steps" :key="s.title" class="benefit">
            <span class="benefit__tick num">{{ s.when }}</span>
            <h3>{{ s.title }}</h3>
            <div class="benefit__body">
              <p>{{ s.text }}</p>
              <p v-if="s.intro" class="benefit__intro">{{ s.intro }}</p>
              <ul v-if="s.lines" class="lines" role="list">
                <li v-for="l in s.lines" :key="l.lead" class="line">
                  <IconGlyph v-if="l.icon" :name="l.icon" :size="20" class="line__icon" />
                  <div>
                    <p>
                      <strong>{{ l.lead }}</strong>{{ l.text ? ` ${l.text}` : '' }}
                    </p>
                    <ul v-if="l.items" class="line__items" role="list">
                      <li v-for="it in l.items" :key="it.role">
                        <strong>{{ it.role }}:</strong>{{ ` ${it.text}` }}
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <p v-if="s.closing" class="benefit__closing">{{ s.closing }}</p>
            </div>
          </li>
        </ol>
        <div class="benefits__end">
          <p>
            En VitaClinic no solo buscamos que pierdas peso, sino que mejores tu salud y aprendas a cuidarla a largo
            plazo.
          </p>
          <WaButton
            size="lg"
            label="Agenda tu valoración"
            message="Hola, quiero agendar mi valoración para el tratamiento GLP-1 de VitaClinic."
          />
        </div>
      </div>
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
  align-content: start;
}
.benefits__intro p {
  margin-top: var(--space-2);
  font-size: var(--fs-lead);
  color: var(--fg-muted);
}
.benefits__intro .benefits__note {
  font-size: var(--fs-small);
  color: var(--ink-500);
}
.benefits__list {
  display: grid;
  border-top: 1px solid var(--line-strong);
}
.benefit {
  display: grid;
  grid-template-columns: 5rem 1fr;
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
.benefit__body {
  grid-column: 2;
}
.benefit__body > p {
  margin-top: var(--space-2);
  color: var(--fg-muted);
  max-width: 58ch;
}
.benefit__body .benefit__intro {
  margin-top: var(--space-4);
  color: var(--fg);
  font-weight: 600;
}
.lines {
  margin: var(--space-3) 0 0;
  padding: 0;
  display: grid;
  gap: var(--space-4);
}
.line {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-3);
  align-items: start;
  color: var(--fg-muted);
}
.line strong {
  color: var(--fg);
  font-weight: 600;
}
.line__icon {
  margin-top: 0.15em;
  color: var(--brand-teal);
}
.line__items {
  margin: var(--space-2) 0 0;
  padding-left: 1.1em;
  display: grid;
  gap: var(--space-2);
  list-style: disc;
}
.line__items li::marker {
  color: var(--brand-teal);
}
.benefit__body .benefit__closing {
  margin-top: var(--space-4);
  color: var(--field-700);
  font-weight: 600;
}
.benefits__end {
  margin-top: var(--space-6);
  display: grid;
  gap: var(--space-5);
  justify-items: start;
}
.benefits__end p {
  max-width: 48ch;
  font-family: var(--font-display);
  font-size: var(--fs-h3);
  font-weight: 600;
  line-height: var(--lh-snug);
  letter-spacing: -0.01em;
  text-wrap: balance;
}
@media (max-width: 520px) {
  .benefit {
    grid-template-columns: 1fr;
  }
  .benefit__tick {
    grid-row: auto;
    padding-top: 0;
    margin-bottom: var(--space-1);
  }
  .benefit__body {
    grid-column: 1;
  }
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
