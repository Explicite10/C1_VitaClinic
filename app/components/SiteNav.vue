<script setup lang="ts">
import { brand } from '~/data/clinic'

const scrolled = ref(false)
onMounted(() => {
  const onScroll = () => (scrolled.value = window.scrollY > 24)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})

const links = [
  { href: '#tratamiento', label: 'Tratamiento' },
  { href: '#paquetes', label: 'Paquetes' },
  { href: '#seguimiento', label: 'Seguimiento' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#clinicas', label: 'Clínicas' },
]
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="container nav__inner">
      <a href="#inicio" class="nav__brand" :aria-label="`${brand.name}, ${brand.tagline}, ir al inicio`">
        <img src="/brand/logo-white.png" alt="" width="731" height="211" class="nav__logo" />
      </a>
      <nav class="nav__links" aria-label="Secciones">
        <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
      </nav>
      <WaButton label="Quiero saber si soy candidato" class="nav__cta" />
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 40;
  color: var(--field-050);
  background: var(--field-800);
  transition:
    background var(--dur-base) var(--ease-out),
    box-shadow var(--dur-base) var(--ease-out),
    backdrop-filter var(--dur-base) var(--ease-out);
}
.nav--scrolled {
  background: color-mix(in oklab, var(--field-800) 82%, transparent);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  box-shadow: 0 1px 0 var(--line);
}
.nav__inner {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  min-height: 72px;
}
.nav__brand {
  display: inline-flex;
  flex: 0 0 auto;
}
.nav__logo {
  width: clamp(150px, 12vw, 190px);
  height: auto;
}
.nav__links {
  display: none;
  margin-left: auto;
  gap: var(--space-5);
  font-size: var(--fs-small);
  font-weight: 500;
}
.nav__links a {
  text-decoration: none;
  color: var(--field-200);
  padding: 0.4em 0;
  position: relative;
}
.nav__links a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: var(--field-050);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur-base) var(--ease-out);
}
.nav__links a:hover {
  color: var(--field-050);
}
.nav__links a:hover::after {
  transform: scaleX(1);
}
.nav__cta {
  margin-left: auto;
  font-size: 0.9rem;
  padding: 0.7em 1.1em 0.7em 0.95em;
}
@media (min-width: 900px) {
  .nav__links {
    display: flex;
  }
  .nav__cta {
    margin-left: 0;
  }
}
@media (max-width: 640px) {
  .nav__cta {
    display: none;
  }
}
</style>
