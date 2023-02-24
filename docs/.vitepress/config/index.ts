import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { esConfig } from './es'
import { shareConfig } from './share'

export default defineConfig({
  ...shareConfig,
  locales: {
    root: { label: 'English', lang: 'en-US', ...enConfig },
    es: { label: 'Español', lang: 'es-ES', ...esConfig },
  },
})