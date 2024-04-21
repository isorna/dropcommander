import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { enConfig } from './en'
import { esConfig } from './es'
import { shareConfig } from './share'

export default withPwa(defineConfig({
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
  pwa: {
    injectRegister: 'auto',
    registerType: 'prompt',
    includeAssets: [
      'favicon.ico',
      '/img/safari-pinned-tab.svg',
      '/img/android-chrome-192x192.png',
      '/img/android-chrome-512x512.png',
      '/img/apple-touch-icon.png',
      '/img/favicon-16x16.png',
      '/img/mstile-150x150.png',
    ],
    manifest: {
      name: 'Drop Commander',
      short_name: 'DC',
      start_url: '/?utm_source=homescreen',
      icons: [
          {
              src: '/img/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png'
          },
          {
              src: '/img/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png'
          }
      ],
      theme_color: '#041924',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait-primary',
      shortcuts: [
        {
          name: 'Dropfleet Commander',
          short_name: 'DFC',
          description: 'DFC Rules',
          url: '/en/dfc/?utm_source=homescreen',
          icons: [
            {
              src: '/img/ui/orbit.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        {
          name: 'Dropzone Commander',
          short_name: 'DZC',
          description: 'DZC Rules',
          url: '/en/dzc/?utm_source=homescreen',
          icons: [
            {
              src: '/img/ui/moon-landing.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      ]
    }
  }
}))