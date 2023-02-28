import { defineConfig } from 'vitepress'
// import { generateSitemap, rebuildPWA } from '../build'
import { github, googleVerify, keywords, name, ogTitle, logo, twitterHandle, gtag } from '../meta'
// import { ImagePlugin, useCodeGroup, useCodeGroupItem } from '../theme/components/markdown'

export const shareConfig = defineConfig({
  title: name,

  themeConfig: {
    logo: {
      src: logo,
      alt: 'drop-commander-logo',
    },
    socialLinks: [
      { icon: 'github', link: github },
    ],
    outline: 'deep',
  },

  lastUpdated: true,
  useWebFonts: true,
  appearance: 'dark',
  // cleanUrls: 'without-subfolders',
  buildEnd: async (siteConfig) => {
    // TODO: generate RSS???
    // await generateSitemap(siteConfig)
    // await rebuildPWA()
  },
  // TODO: QUÉ ES ÉSTO DEL SHIKI CODE THEME???
  // markdown: {
  //   // shiki code theme
  //   theme: {
  //     light: 'vitesse-light',
  //     dark: 'vitesse-dark',
  //   },
  //   config: (md) => {
  //     // eslint-disable-next-line @typescript-eslint/no-var-requires
  //     md.use(require('markdown-it-mark'))
  //     md.use(useCodeGroup.container, useCodeGroup.type, { render: useCodeGroup.render })
  //     md.use(useCodeGroupItem.container, useCodeGroupItem.type, {
  //       render: useCodeGroupItem.render,
  //     })
  //     md.use(ImagePlugin)
  //   },
  // },

  head: [
    ['meta', { name: 'google-site-verification', content: googleVerify }],
    ['meta', { name: 'keywords', content: keywords }],
    ['meta', { name: 'author', content: twitterHandle }],
    ['meta', { name: 'twitter:title', content: ogTitle }],
    ['meta', { name: 'twitter:creator', content: `@${twitterHandle}` }],
    ['meta', { name: 'twitter:site', content: `@${twitterHandle}` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'og:type', content: 'article' }],
    ['meta', { name: 'application-name', content: name }],
    ['meta', { name: 'apple-mobile-web-app-title', content: name }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

    ['link', { rel: 'shortcut icon', href: '/img/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#2e8555' }],
    ['meta', { name: 'theme-color', content: '#2e8555' }],

    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/img/apple-touch-icon.png' }],

    // webfont
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],

    // scripts
    [
      'script',
      { async: 'true', src: `https://www.googletagmanager.com/gtag/js?id=${gtag}` }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gtag}');`
    ]
  ],
})