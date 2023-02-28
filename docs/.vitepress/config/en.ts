import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { descriptionEN, github, ogImg, site } from '../meta'
// import { en as nav } from './navbar'
// import { en as sidebar } from './sidebar'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: descriptionEN,

  themeConfig: {
    // nav,
    // sidebar,
    editLink: {
      pattern: `${github}/edit/main/docs/:path`,
      text: 'Suggest changes to this page',
    },
    footer: {
      message: 'Made by fans of Dropfleet, Dropzone & StrikeTeam Commander Universe.',
      copyright: 'MIT Licensed | Copyright © 2022-present <a href="https://www.ttcombat.com/">TTCombat</a>.',
    },
    docFooter: {
      prev: 'Next page',
      next: 'Previous page'
    },
    returnToTopLabel: 'Return to top'
  },

  head: [
    ['meta', { name: 'twitter:description', content: descriptionEN }],
    ['meta', { name: 'twitter:image', content: ogImg }],
    ['meta', { name: 'og:description', content: descriptionEN }],
    ['meta', { name: 'og:url', content: site }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'og:image', content: ogImg }],
  ],
}