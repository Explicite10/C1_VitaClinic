<script setup lang="ts">
import { brand } from '~/data/clinic'

const props = withDefaults(
  defineProps<{
    label?: string
    size?: 'md' | 'lg'
    variant?: 'wa' | 'ghost'
    message?: string
    block?: boolean
  }>(),
  { label: brand.ctaLabel, size: 'md', variant: 'wa', block: false },
)

const { href } = useWhatsApp(props.message)
</script>

<template>
  <a
    class="wa"
    :class="[`wa--${size}`, `wa--${variant}`, { 'wa--block': block }]"
    :href="href"
    target="_blank"
    rel="noopener"
    data-cta="whatsapp"
  >
    <IconGlyph name="whatsapp" :size="size === 'lg' ? 24 : 20" class="wa__icon" />
    <span class="wa__label">{{ label }}</span>
    <IconGlyph name="arrow" :size="18" class="wa__arrow" />
  </a>
</template>

<style scoped>
.wa {
  --wa-bg: var(--wa);
  --wa-fg: #06281a;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  padding: 0.85em 1.35em 0.85em 1.15em;
  border-radius: var(--radius-pill);
  background: var(--wa-bg);
  color: var(--wa-fg);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1;
  letter-spacing: -0.01em;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: var(--shadow-wa);
  transition:
    transform var(--dur-base) var(--ease-ballistic),
    box-shadow var(--dur-base) var(--ease-out),
    background var(--dur-fast) var(--ease-out);
  isolation: isolate;
  overflow: hidden;
}
.wa::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.35) 50%, transparent 70%);
  transform: translateX(-120%);
  transition: transform 0.9s var(--ease-out);
  pointer-events: none;
}
.wa:hover {
  transform: translateY(-2px);
  box-shadow:
    0 16px 36px rgba(18, 140, 94, 0.4),
    0 4px 10px rgba(18, 140, 94, 0.25);
}
.wa:hover::after {
  transform: translateX(120%);
}
.wa:active {
  transform: translateY(0) scale(0.985);
}
.wa--lg {
  font-size: clamp(1.05rem, 1rem + 0.4vw, 1.25rem);
  padding: 1em 1.5em 1em 1.25em;
}
.wa--ghost {
  --wa-bg: transparent;
  --wa-fg: var(--fg);
  box-shadow: inset 0 0 0 1.5px var(--line-strong);
}
.wa--ghost:hover {
  box-shadow: inset 0 0 0 1.5px var(--fg);
}
.wa--block {
  display: flex;
  justify-content: center;
  width: 100%;
}
.wa__arrow {
  transition: transform var(--dur-base) var(--ease-ballistic);
}
.wa:hover .wa__arrow {
  transform: translateX(4px);
}
@media (max-width: 420px) {
  .wa {
    white-space: normal;
    text-align: left;
  }
}
</style>
