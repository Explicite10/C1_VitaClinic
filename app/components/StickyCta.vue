<script setup lang="ts">
const visible = ref(false)
onMounted(() => {
  const hero = document.getElementById('inicio')
  const close = document.getElementById('contacto')
  if (!hero || !('IntersectionObserver' in window)) {
    visible.value = true
    return
  }
  const state = { heroOut: false, closeIn: false }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.target === hero) state.heroOut = !e.isIntersecting
        if (e.target === close) state.closeIn = e.isIntersecting
      }
      visible.value = state.heroOut && !state.closeIn
    },
    { threshold: 0.08 },
  )
  io.observe(hero)
  if (close) io.observe(close)
  onBeforeUnmount(() => io.disconnect())
})
</script>

<template>
  <div class="sticky" :class="{ 'is-visible': visible }">
    <WaButton block />
  </div>
</template>

<style scoped>
.sticky {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  padding: var(--space-3) var(--space-4) calc(var(--space-3) + env(safe-area-inset-bottom));
  background: linear-gradient(180deg, transparent, color-mix(in oklab, var(--field-900) 92%, transparent) 40%);
  transform: translateY(110%);
  transition: transform var(--dur-base) var(--ease-ballistic);
}
.sticky.is-visible {
  transform: translateY(0);
}
@media (min-width: 641px) {
  .sticky {
    display: none;
  }
}
</style>
