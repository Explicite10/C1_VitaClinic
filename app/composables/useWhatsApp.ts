export function useWhatsApp(message?: string) {
  const config = useRuntimeConfig().public
  const text = encodeURIComponent(message ?? config.whatsappMessage)
  return {
    href: `https://wa.me/${config.whatsapp}?text=${text}`,
    display: config.whatsappDisplay,
  }
}
