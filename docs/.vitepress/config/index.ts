import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { esConfig } from './es'
import { shareConfig } from './share'

export default defineConfig({
  ...shareConfig,
  locales: {
    // root: { label: 'English', lang: 'en-US' },
    root: {
      label: '',
      themeConfig: {
        nav: [
          { text: 'TTCombat', link: 'https://www.ttcombat.com' },
          { text: 'English', link: '/en/', activeMatch: '/' },
          { text: 'Spanish', link: '/es/', activeMatch: '/es/' },
        ]
      }
    },
    en: { label: 'English', lang: 'en-US', ...enConfig },
    es: { label: 'Español', lang: 'es-ES', ...esConfig },
  },
})