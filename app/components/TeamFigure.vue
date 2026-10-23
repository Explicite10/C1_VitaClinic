<script setup lang="ts">
/**
 * Ilustración propia (sin rostro) de cada rol del equipo presencial.
 * No representa a una persona real del equipo: sustituir por fotografía real cuando exista.
 */
defineProps<{ role: 'medico' | 'nutricion' | 'psicologia' | 'enfermeria' }>()
const uid = useId()
</script>

<template>
  <svg viewBox="0 0 200 200" class="fig" aria-hidden="true" focusable="false">
    <defs>
      <clipPath :id="`c-${uid}`"><circle cx="100" cy="100" r="96" /></clipPath>
    </defs>
    <circle cx="100" cy="100" r="96" class="fig__bg" />
    <g :clip-path="`url(#c-${uid})`">
      <!-- Médico: bata blanca, estetoscopio -->
      <template v-if="role === 'medico'">
        <rect x="88" y="116" width="24" height="26" rx="8" fill="#c9a07f" />
        <path d="M26 212 C26 160 58 138 100 138 C142 138 174 160 174 212 Z" fill="#fff" />
        <path d="M84 139 L100 166 L116 139 Z" fill="var(--field-400)" />
        <path d="M84 139 L96 212 M116 139 L104 212" stroke="var(--field-200)" stroke-width="3" fill="none" />
        <path d="M82 142 C76 172 90 184 100 184 C110 184 124 172 118 142" stroke="var(--field-700)" stroke-width="4.5" fill="none" stroke-linecap="round" />
        <circle cx="100" cy="188" r="7" fill="var(--field-700)" />
        <rect x="128" y="168" width="18" height="4" rx="2" fill="var(--field-300)" />
        <circle cx="100" cy="90" r="30" fill="#c9a07f" />
        <path d="M70 88 C70 62 86 56 100 56 C118 56 131 66 130 88 C124 76 112 71 100 71 C88 71 76 76 70 88 Z" fill="var(--brand-ink)" />
      </template>

      <!-- Nutrición: filipina teal, manzana -->
      <template v-else-if="role === 'nutricion'">
        <rect x="88" y="116" width="24" height="26" rx="8" fill="#e0bf9f" />
        <path d="M26 212 C26 160 58 138 100 138 C142 138 174 160 174 212 Z" fill="var(--field-400)" />
        <path d="M80 140 C88 154 112 154 120 140" stroke="var(--field-050)" stroke-width="3" fill="none" />
        <path d="M68 212 L70 168 L130 168 L132 212 Z" fill="var(--field-050)" opacity="0.9" />
        <path d="M100 172 c-6 -6 -18 -3 -18 9 c0 10 8 18 12 18 c2 0 4 -1 6 -1 s4 1 6 1 c4 0 12 -8 12 -18 c0 -12 -12 -15 -18 -9 Z" fill="var(--mark-500)" />
        <path d="M100 172 c0 -6 3 -9 8 -10" stroke="var(--field-700)" stroke-width="3" fill="none" stroke-linecap="round" />
        <circle cx="100" cy="90" r="30" fill="#e0bf9f" />
        <path d="M66 96 C62 62 84 52 100 52 C120 52 138 62 134 96 C130 84 126 78 122 76 C112 82 88 82 78 76 C74 78 70 84 66 96 Z" fill="#5a4334" />
      </template>

      <!-- Psicología: suéter oscuro, libreta, burbuja de diálogo -->
      <template v-else-if="role === 'psicologia'">
        <path d="M64 98 C60 60 82 50 100 50 C120 50 140 60 136 98 L140 150 L60 150 Z" fill="var(--brand-ink)" />
        <rect x="88" y="116" width="24" height="26" rx="8" fill="#b98b69" />
        <path d="M26 212 C26 160 58 138 100 138 C142 138 174 160 174 212 Z" fill="var(--field-700)" />
        <path d="M86 140 C92 150 108 150 114 140" stroke="var(--field-400)" stroke-width="3" fill="none" />
        <rect x="112" y="160" width="30" height="38" rx="3" fill="var(--field-050)" transform="rotate(-8 127 179)" />
        <path d="M118 172 h18 M118 180 h18 M118 188 h12" stroke="var(--field-300)" stroke-width="2.5" transform="rotate(-8 127 179)" />
        <circle cx="100" cy="90" r="30" fill="#b98b69" />
        <path d="M70 90 C70 64 88 56 102 56 C120 56 132 68 130 90 C118 78 96 74 70 90 Z" fill="var(--brand-ink)" />
        <path d="M140 40 h36 a8 8 0 0 1 8 8 v16 a8 8 0 0 1 -8 8 h-20 l-10 9 v-9 h-6 a8 8 0 0 1 -8 -8 v-16 a8 8 0 0 1 8 -8 Z" fill="#fff" />
        <circle cx="150" cy="56" r="3" fill="var(--field-400)" />
        <circle cx="160" cy="56" r="3" fill="var(--field-400)" />
        <circle cx="170" cy="56" r="3" fill="var(--field-400)" />
      </template>

      <!-- Enfermería: uniforme claro, pluma de aplicación -->
      <template v-else>
        <rect x="88" y="116" width="24" height="26" rx="8" fill="#d4ad8a" />
        <path d="M26 212 C26 160 58 138 100 138 C142 138 174 160 174 212 Z" fill="var(--field-300)" />
        <path d="M84 139 L100 160 L116 139" stroke="var(--field-050)" stroke-width="3.5" fill="none" stroke-linejoin="round" />
        <rect x="118" y="166" width="26" height="22" rx="3" fill="var(--field-200)" />
        <rect x="124" y="150" width="7" height="30" rx="3.5" fill="var(--field-700)" />
        <rect x="124" y="150" width="7" height="8" rx="3" fill="var(--mark-500)" />
        <circle cx="100" cy="90" r="30" fill="#d4ad8a" />
        <circle cx="100" cy="54" r="13" fill="#3b2d24" />
        <path d="M70 90 C70 64 86 58 100 58 C116 58 130 66 130 90 C124 78 112 72 100 72 C88 72 76 78 70 90 Z" fill="#3b2d24" />
      </template>
    </g>
  </svg>
</template>

<style scoped>
.fig {
  width: 100%;
  height: auto;
  display: block;
}
.fig__bg {
  fill: var(--field-100);
}
</style>
