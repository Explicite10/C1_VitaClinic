/**
 * Marca [data-reveal] como .is-in cuando entra al viewport.
 * El contenido es visible por defecto sin JS (ver base.css).
 */
export function useReveal(root?: Ref<HTMLElement | null>) {
  onMounted(() => {
    const scope = root?.value ?? document
    const nodes = Array.from(scope.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!nodes.length) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-in'))
      return
    }

    // Lo que ya esta en pantalla al hidratar se marca visible en el mismo frame
    // en que se activa el modo animado: nunca desaparece contenido ya leido.
    const vh = window.innerHeight
    nodes.forEach((n) => {
      const r = n.getBoundingClientRect()
      if (r.top < vh * 0.92 && r.bottom > 0) n.classList.add('is-in')
    })
    document.documentElement.classList.add('js')

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const el = e.target as HTMLElement
          // Escalonado por grupo: hermanos con data-reveal reciben delay incremental
          const group = el.dataset.revealGroup
          if (group) {
            const siblings = nodes.filter((n) => n.dataset.revealGroup === group)
            const idx = siblings.indexOf(el)
            el.style.setProperty('--reveal-delay', `${Math.min(idx, 6) * 90}ms`)
          }
          el.classList.add('is-in')
          io.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )
    nodes.forEach((n) => io.observe(n))
    onBeforeUnmount(() => io.disconnect())
  })
}
