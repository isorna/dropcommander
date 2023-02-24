// More info: https://vitepress.vuejs.org/config/app-configs
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Drop Commander',
  titleTemplate: ':title 🚀 Drop Commander',
  description: 'Drop Commander Universe tools.',
  lastUpdated: true,
  themeConfig: {
    logo: '/img/android-chrome-192x192.png',
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        // nav: [
        //   { text: 'Home', link: '/' },
        //   { text: 'Blog', link: '/blog/' },
        //   { text: 'TTCombat', link: 'https://www.ttcombat.com' },
        // ],
        footer: {
          message: 'Made by fans of Dropfleet, Dropzone & StrikeTeam Commander Universe.',
          copyright: 'Copyright © 2022-present <a href="https://www.ttcombat.com/">TTCombat</a>.'
        }
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: {
        // nav: [
        //   { text: 'Inicio', link: '/es/' },
        //   { text: 'Blog', link: '/es/blog/' },
        //   { text: 'TTCombat', link: 'https://www.ttcombat.com' },
        // ],
        footer: {
          message: 'Hecho por fans del universo Dropfleet, Dropzone & StrikeTeam Commander.',
          copyright: 'Copyright © 2022-presente <a href="https://www.ttcombat.com/">TTCombat</a>.'
        }
      }
    }
  },
  async buildEnd(siteConfig) {
    console.log('build end')
  }
})

