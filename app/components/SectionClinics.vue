<script setup lang="ts">
import { clinics, brand } from '~/data/clinic'
</script>

<template>
  <section id="clinicas" class="clinics" aria-labelledby="clinics-title">
    <div class="container">
      <div class="sec-head">
        <h2 id="clinics-title" data-reveal>Dos clínicas en la Ciudad de México</h2>
        <MonthPin :m="0" label="Mes 0 · tu primera consulta, presencial" />
      </div>
      <div class="clinics__head">
        <p data-reveal>Elige la que te quede más cerca. Mismo equipo, mismo plan, mismos horarios.</p>
      </div>
      <div class="clinics__grid">
        <article v-for="c in clinics" :key="c.id" class="clinic">
          <div class="clinic__head on-field">
            <span class="clinic__badge">{{ c.short }}</span>
            <img src="/brand/heart.svg" alt="" width="640" height="584" class="clinic__heart" />
          </div>
          <div class="clinic__body">
            <h3>{{ c.name }}</h3>
            <p class="clinic__addr">
              <IconGlyph name="pin" :size="18" />
              <span>{{ c.address }}<br />{{ c.locality }}</span>
            </p>
            <p class="clinic__landmark">{{ c.landmark }}</p>
            <dl class="hours">
              <template v-for="h in c.hours" :key="h.days">
                <dt>{{ h.days }}</dt>
                <dd class="num">{{ h.time }}</dd>
              </template>
            </dl>
            <div class="clinic__actions">
              <a :href="c.mapsUrl" target="_blank" rel="noopener" class="clinic__link">
                <IconGlyph name="external" :size="16" /> Cómo llegar
              </a>
              <a :href="brand.phoneHref" class="clinic__link"><IconGlyph name="phone" :size="16" /> {{ brand.phone }}</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clinics {
  padding-block: var(--section-y);
  background: var(--bg);
}
.clinics__head {
  max-width: var(--measure);
  display: grid;
  gap: var(--space-4);
}
.clinics__head p {
  font-size: var(--fs-lead);
  color: var(--fg-muted);
}
.clinics__grid {
  margin-top: var(--space-7);
  display: grid;
  gap: var(--space-5);
}
.clinic {
  display: grid;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--dur-base) var(--ease-ballistic),
    box-shadow var(--dur-base) var(--ease-out);
}
.clinic:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}
.clinic__head {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-5);
  background: var(--field-700);
}
.clinic__heart {
  width: 34px;
  height: auto;
  color: var(--field-300);
}
.clinic__badge {
  padding: 0.3em 0.8em;
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--line-strong);
  color: var(--field-050);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--fs-small);
}
.clinic__body {
  padding: var(--space-5);
}
.clinic__body h3 {
  font-size: var(--fs-h3);
}
.clinic__addr {
  margin-top: var(--space-3);
  display: flex;
  gap: 0.5em;
  align-items: flex-start;
}
.clinic__addr svg {
  flex: none;
  margin-top: 0.2em;
  color: var(--brand-teal);
}
.clinic__landmark {
  margin-top: var(--space-2);
  padding-left: calc(18px + 0.5em);
  font-size: var(--fs-small);
  color: var(--fg-muted);
}
.hours {
  margin: var(--space-5) 0 0;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-2) var(--space-5);
  padding-top: var(--space-4);
  border-top: 1px solid var(--line);
  font-size: var(--fs-small);
}
.hours dt {
  color: var(--fg-muted);
}
.hours dd {
  margin: 0;
  font-weight: 600;
  text-align: right;
}
.clinic__actions {
  margin-top: var(--space-5);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3) var(--space-5);
}
.clinic__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  font-weight: 600;
  font-size: var(--fs-small);
  color: var(--field-700);
}
.clinic__link svg {
  color: var(--brand-teal);
}
@media (min-width: 760px) {
  .clinics__grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
