import { defineVitePluginsSetup } from '@slidev/types'

export default defineVitePluginsSetup(() => {
  return [
    {
      name: 'force-dark-mode',
      transformIndexHtml: {
        order: 'pre' as const,
        handler(html: string) {
          return html.replace(
            '<meta charset="utf-8">',
            `<meta charset="utf-8"><script>if(!localStorage.getItem('vueuse-color-scheme')){localStorage.setItem('vueuse-color-scheme','dark');}document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';<\/script>`
          )
        },
      },
    },
  ]
})
