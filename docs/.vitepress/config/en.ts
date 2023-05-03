import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { descriptionEN, github, ogImgEN, siteEN } from '../meta'
import { getSidebar } from '../lib/generate-sidebar'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: descriptionEN,

  themeConfig: {
    // nav,
    sidebar: [
      { text: 'Home', link: '/en/' },
      getSidebar('/docs/', '/en/dfc/'),
      getSidebar('/docs/', '/en/dzc/'),
    ],
    editLink: {
      pattern: `${github}/edit/main/docs/:path`,
      text: 'Suggest changes to this page',
    },
    outlineTitle: 'On this page',
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
    ['meta', { name: 'twitter:image', content: ogImgEN }],
    ['meta', { name: 'og:description', content: descriptionEN }],
    ['meta', { name: 'og:url', content: siteEN }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'og:image', content: ogImgEN }],
  ],
}