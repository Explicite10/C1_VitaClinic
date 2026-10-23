<script setup lang="ts">
import { brand } from '~/data/clinic'
</script>

<template>
  <section id="contacto" class="close on-field" aria-labelledby="close-title">
    <div class="container close__inner">
      <img src="/brand/heart.svg" alt="" width="640" height="584" class="close__heart" />
      <h2 id="close-title" data-reveal>Empieza tu curva hoy</h2>
      <p>
        Cuéntanos tu caso por WhatsApp. Te decimos si eres candidato, qué incluye tu paquete y agendamos tu
        valoración presencial en la clínica que prefieras.
      </p>
      <div class="close__actions">
        <WaButton size="lg" />
        <span class="close__num num">WhatsApp {{ brand.whatsappDisplay }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.close {
  position: relative;
  padding-block: var(--section-y);
  background:
    radial-gradient(70% 80% at 50% 100%, color-mix(in oklab, var(--field-500) 60%, transparent), transparent 70%),
    var(--field-800);
  overflow: hidden;
}
.close__inner {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: var(--space-5);
}
.close__heart {
  width: clamp(72px, 10vw, 120px);
  height: auto;
  color: var(--field-050);
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.35));
}
.close__inner h2 {
  font-size: var(--fs-display);
  letter-spacing: var(--track-display);
  font-weight: 800;
}
.close__inner p {
  max-width: 46ch;
  font-size: var(--fs-lead);
  color: var(--field-100);
}
.close__actions {
  display: grid;
  justify-items: center;
  gap: var(--space-3);
  margin-top: var(--space-3);
}
.close__num {
  font-size: var(--fs-small);
  color: var(--field-200);
}
</style>
