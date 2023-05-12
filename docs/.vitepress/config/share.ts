import { defineConfig } from 'vitepress'
// import { generateSitemap, rebuildPWA } from '../build'
import { github, googleVerify, keywords, name, ogTitle, logo, twitterHandle, gtag } from '../meta'
// import { ImagePlugin, useCodeGroup, useCodeGroupItem } from '../theme/components/markdown'

const bloggerSvgIcon = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" width="50.664463mm" height="50.575432mm" viewBox="0 0 179.51975 179.20429">
  <path fill="#f06a35" d="M20.512413 178.49886c-3.359449-.8837-6.258272-2.1837-8.931866-4.0056-2.256922-1.5379-5.555601-4.7174-6.810077-6.5637-1.532132-2.255-3.293254-6.1168-4.010994-8.795-.732062-2.7319-.743927-3.8198-.757063-69.39501-.01306-65.24411.0018-66.67877.719335-69.48264C3.259268 10.34132 11.117019 2.7971 21.251347.54646 24.165189-.10065 154.331139-.21383 157.47424.42803c8.508999 1.73759 15.197718 6.84619 19.06824 14.56362 3.07712 6.13545 2.80203-.61622 2.94296 72.23085.0897 46.34991.007 65.80856-.28883 68.23286-1.38576 11.3442-9.210679 20.1431-20.470153 23.0183-2.880202.7354-3.882129.7459-69.275121.7259-63.227195-.019-66.474476-.052-68.938923-.7007z"/>
  <path fill="none" d="M-82.99522 87.83767V-84.06232h1020v343.79998h-1020V87.83767z"/>
  <path fill="#fff" d="M115.16168 144.83466c8.064748-1.1001 14.384531-4.3325 20.313328-10.3896 4.288999-4.38181 6.973811-9.12472 8.728379-15.41921.728903-2.6149.790018-3.88807.923587-19.24149.100809-11.58796.01669-17.01514-.285075-18.38528-.437344-1.98593-1.67711-3.83016-3.091687-4.59911-.435299-.23661-3.224334-.53819-6.197859-.67015-4.982681-.22115-5.540155-.31832-7.11287-1.24-2.494681-1.46198-3.181724-3.04069-3.188544-7.32677-.01304-8.1894-3.421087-15.79237-10.154891-22.65435-4.797263-4.8886-10.14889-8.19759-16.256563-10.05172-1.462167-.44388-4.736105-.59493-15.7023605-.72452-17.2069763-.20332-21.0264035.14939-26.8842785 2.48265-10.799733 4.30168-18.559563 13.36742-21.390152 24.98992-.531646 2.18295-.634845 5.6815-.760427 25.77865-.157327 25.17748.01622 28.87467 1.589422 33.86414 1.299798 4.12233 2.611223 6.64844 5.312916 10.23388 5.146805 6.83036 12.860236 11.76336 20.572006 13.15646 3.669923.6631 48.94793.829 53.585069.1965z"/>
  <path fill="#f06a35" d="M67.5750093 75.71747c-4.1229413-1.13646-5.6634683-7.05179-2.6332273-10.11109 1.9367555-1.95536 2.4721802-2.02981 14.5952492-2.02981 10.8833578 0 11.2491898.0238 12.8478758.83129 2.310253 1.16711 3.314106 2.81263 3.314106 5.43252 0 2.36619-.942769 4.0244-3.045645 5.35691-1.129143.71549-1.803912.76002-12.4672419.82265-6.5844803.0387-11.829856-.0872-12.6111168-.30247zm-.5165819 39.80858c-1.7697484-.77113-3.4178244-2.91327-3.7026534-4.81263-.271319-1.80929.637963-4.29669 2.031786-5.55809 1.7569755-1.59003 2.5280723-1.64307 24.134743-1.66008 22.226353-.0174 22.11068-.0268 24.218307 1.94113 2.976827 2.77944 2.348939 7.7279-1.238363 9.75964l-3.686323.59948-19.213121.22489c-16.8830622.19762-21.6656419-.1114-22.5443756-.49433z"/>
</svg>`

export const shareConfig = defineConfig({
  title: name,
  themeConfig: {
    logo: {
      src: logo,
      alt: 'drop-commander-logo',
    },
    nav: [
      { text: 'TTCombat', link: 'https://www.ttcombat.com' }
    ],
    socialLinks: [
      { icon: { svg: bloggerSvgIcon }, link: 'https://blog.wardice.club' },
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
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#2e8555' }],
    ['meta', { name: 'theme-color', content: '#2e8555' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon.png' }],
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