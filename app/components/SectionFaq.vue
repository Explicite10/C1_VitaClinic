<script setup lang="ts">
import { faqs } from '~/data/faq'
</script>

<template>
  <section id="faq" class="faq" aria-labelledby="faq-title">
    <div class="container faq__grid">
      <h2 id="faq-title" data-reveal>Preguntas frecuentes</h2>
      <div class="faq__list">
        <details v-for="(f, i) in faqs" :key="f.q" class="faq__item" :open="i === 0">
          <summary>
            <span>{{ f.q }}</span>
            <IconGlyph name="chevron" :size="20" class="faq__chev" />
          </summary>
          <p>{{ f.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  padding-block: var(--section-y);
  background: #fff;
}
.faq__grid {
  display: grid;
  gap: var(--space-6);
}
.faq__list {
  display: grid;
  border-top: 1px solid var(--line-strong);
}
.faq__item {
  border-bottom: 1px solid var(--line);
}
.faq__item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-5) 0;
  cursor: pointer;
  list-style: none;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--fs-h3);
  letter-spacing: -0.01em;
}
.faq__item summary::-webkit-details-marker {
  display: none;
}
.faq__chev {
  flex: none;
  color: var(--brand-teal);
  transition: transform var(--dur-base) var(--ease-ballistic);
}
.faq__item[open] .faq__chev {
  transform: rotate(180deg);
}
.faq__item p {
  padding-bottom: var(--space-5);
  max-width: var(--measure);
  color: var(--fg-muted);
}
@media (min-width: 960px) {
  .faq__grid {
    grid-template-columns: minmax(0, 4fr) minmax(0, 8fr);
    align-items: start;
  }
}
</style>
