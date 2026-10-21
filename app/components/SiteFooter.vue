<script setup lang="ts">
import { brand, clinics } from '~/data/clinic'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer on-field">
    <div class="container footer__grid">
      <div class="footer__brand">
        <img src="/brand/logo-white.png" :alt="`${brand.name}, ${brand.tagline}`" width="731" height="211" class="footer__logo" />
        <p>Control de peso y salud metabólica con tratamiento médico personalizado.</p>
      </div>
      <div v-for="c in clinics" :key="c.id" class="footer__col">
        <h3>{{ c.name }}</h3>
        <p>{{ c.address }}<br />{{ c.locality }}</p>
        <p class="num">Lun–Vie 9:00–18:00 · Sáb 9:00–15:00</p>
      </div>
      <div class="footer__col">
        <h3>Contacto</h3>
        <p><a :href="useWhatsApp().href" target="_blank" rel="noopener">WhatsApp {{ brand.whatsappDisplay }}</a></p>
        <p><a :href="brand.phoneHref">Tel. {{ brand.phone }}</a></p>
        <p><a :href="brand.instagram" target="_blank" rel="noopener">Instagram @vitaclinic_cdmx</a></p>
      </div>
    </div>
    <div class="container footer__legal">
      <p>© {{ year }} {{ brand.name }} · {{ brand.tagline }}. Todos los derechos reservados.</p>
      <p>
        Los medicamentos GLP‑1 requieren receta y supervisión médica. La información de este sitio no sustituye una
        consulta. Resultados individuales varían.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--field-900);
  padding-block: var(--space-8) var(--space-6);
  font-size: var(--fs-small);
  color: var(--field-200);
}
.footer__grid {
  display: grid;
  gap: var(--space-6);
}
.footer__logo {
  width: 170px;
  height: auto;
}
.footer__brand p {
  margin-top: var(--space-4);
  max-width: 32ch;
}
.footer__col h3 {
  font-size: 1rem;
  color: var(--field-050);
  margin-bottom: var(--space-3);
}
.footer__col p + p {
  margin-top: var(--space-2);
}
.footer__col a {
  color: var(--field-100);
}
.footer__legal {
  margin-top: var(--space-7);
  padding-top: var(--space-5);
  border-top: 1px solid var(--line);
  display: grid;
  gap: var(--space-2);
  font-size: var(--fs-micro);
  color: var(--field-300);
}
@media (min-width: 820px) {
  .footer__grid {
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
  }
}
</style>
