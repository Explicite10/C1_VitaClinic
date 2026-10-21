<script setup lang="ts">
/**
 * Sistema de iconos propio: un solo trazo (1.75) con remates redondos,
 * mismo lenguaje que la línea de ECG del isotipo.
 */
import type { IconName } from '~/utils/icons'

withDefaults(defineProps<{ name: IconName; size?: number | string }>(), { size: 24 })


const paths: Record<IconName, string> = {
  whatsapp:
    'M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z M9.2 8.6c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.5l-.5.6c-.1.2-.2.3 0 .6a6.2 6.2 0 0 0 3 2.7c.3.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.2.4.4a2 2 0 0 1-.6 1.6c-.4.4-1 .6-1.6.5-1.1-.1-2.6-.6-4.1-2.1-1.6-1.5-2.3-3-2.5-3.9-.2-.8 0-1.6.4-2.2Z',
  stethoscope:
    'M6 3v6a4 4 0 0 0 8 0V3 M10 13v2a5 5 0 0 0 10 0v-1 M20 11a2 2 0 1 0 0 .01',
  nutrition:
    'M12 8c-1.5-1.6-4.2-1.6-5.8 0C4 10.2 4.3 14.4 6.4 17.5 7.6 19.3 8.9 20 10 20c.7 0 1.3-.3 2-.3s1.3.3 2 .3c1.1 0 2.4-.7 3.6-2.5 2.1-3.1 2.4-7.3.2-9.5-1.6-1.6-4.3-1.6-5.8 0Z M12 8V5.5 M12 5.5c0-1.5 1.2-2.5 2.7-2.5',
  mind: 'M9 20v-2.2A7 7 0 0 1 5 11.5V11a7 7 0 0 1 14 0v.5c0 1.3-.4 2.6-1.1 3.7L17 17v3 M12 7.5a3.5 3.5 0 0 0 0 7 M12 11h2',
  pin: 'M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3 2',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  calendar: 'M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v10a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-10Z M4 10h16 M8 3v4 M16 3v4',
  pen: 'M8 4h8v3H8z M9 7v9l3 4 3-4V7 M12 7v6',
  shield: 'M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3Z M9.5 12l2 2 3.5-4',
  chevron: 'M6 9l6 6 6-6',
  phone: 'M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L17 13l4 1.5v3a2.5 2.5 0 0 1-2.5 2.5C10.5 20 4 13.5 4 5.5A2.5 2.5 0 0 1 6.5 3Z',
  star: 'M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8L12 3.5Z',
  heart:
    'M11.9 6.6c1.3-2.3 3.1-3.3 5-3.3 2.8 0 4.6 2.2 4.6 5 0 2.2-1.1 3.8-2.4 5.3-1.5 2-4.6 5-7.2 7.2 M11.9 6.6C11.1 4.8 9.5 3.3 7.3 3.3c-3.1 0-5 2.9-4.7 5.9 M8.6 17.9l3.3 2.9 M3.6 13.3h4.2l1.4-4.5 2.7 7.7 1.9-4.5 1.6 1.3h3.6',
  external: 'M14 5h5v5 M19 5l-8 8 M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4',
}
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path :d="paths[name]" />
  </svg>
</template>
