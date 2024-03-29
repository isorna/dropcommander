import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { descriptionES, github, ogImgES, siteES } from '../meta'
import { getSidebar } from '../lib/generate-sidebar'

export const esConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: descriptionES,
  themeConfig: {
    // nav,
    sidebar: [
      { text: 'Inicio', link: '/es/' },
      getSidebar('/docs/', '/es/dfc/'),
      getSidebar('/docs/', '/es/dzc/'),
    ],
    editLink: {
      pattern: `${github}/edit/main/docs/es/:path`,
      text: 'Sugerir cambios en esta página',
    },
    outlineTitle: 'En esta página',
    footer: {
      message: 'Hecho por fans del universo Dropfleet, Dropzone & StrikeTeam Commander.',
      copyright: 'MIT Licensed | Copyright © 2022-presente <a href="https://www.ttcombat.com/">TTCombat</a>.',
    },
    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente'
    },
    returnToTopLabel: 'Volver arriba'
  },
  head: [
    ['meta', { name: 'twitter:description', content: descriptionES }],
    ['meta', { name: 'twitter:image', content: ogImgES }],
    ['meta', { name: 'og:description', content: descriptionES }],
    ['meta', { name: 'og:url', content: siteES }],
    ['meta', { name: 'og:locale', content: 'es_ES' }],
    ['meta', { name: 'og:image', content: ogImgES }],
  ],
}