import { easeOutExpo } from '~/utils/curve'

/**
 * Cuenta de 0 al valor con easing expo-out cuando el elemento entra al viewport.
 * Devuelve el valor formateado; SSR entrega el valor final (sin parpadeo).
 */
export function useCountUp(
  target: Ref<HTMLElement | null>,
  value: number,
  opts: { duration?: number; format?: (n: number) => string; delay?: number } = {},
) {
  const { duration = 1400, format = (n) => Math.round(n).toLocaleString('es-MX'), delay = 0 } = opts
  const text = ref(format(value))

  onMounted(() => {
    const el = target.value
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        const start = performance.now() + delay
        text.value = format(0)
        const tick = (now: number) => {
          const t = Math.min(1, Math.max(0, (now - start) / duration))
          text.value = format(value * easeOutExpo(t))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    onBeforeUnmount(() => io.disconnect())
  })

  return text
}
