// /theme/index.ts
import { watchEffect } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Layout from '../components/Layout.vue'
// import CategoryCard from '../components/CategoryCard.vue'
import CategoryCardsContainer from '../components/CategoryCardsContainer.vue'
import type { EnhanceAppContext } from 'vitepress'
import { useData, inBrowser } from 'vitepress'
// import './style/main.css'
// import './style/vars.css'
// import 'uno.css'
import './custom.css'
// import { createMediumZoomProvider, usePageAnalytics } from './components/composables'

// if (inBrowser)
//   import('./pwa')

export default {
  ...DefaultTheme,
  Layout,
  // this is a Vue 3 functional component
  // NotFound: () => 'custom 404',
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.

    // DefaultTheme.enhanceApp({ app, router, siteData })// OJO: para qué sirve? hace algo?

    // register your custom global components
    // app.component('CategoryCard', CategoryCard)
    app.component('CategoryCardsContainer', CategoryCardsContainer)
    // usePageAnalytics('G-V5E08LL4GP', 'b1d9002033c7e550e55a51a23dca4f31')
  },
  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
    const { lang } = useData()
    watchEffect(() => {
      if (inBrowser) {
        let expires = new Date()
        expires.setFullYear(expires.getFullYear()+1)
        document.cookie = `nf_lang=${lang.value}; expires=${expires.toUTCString()}; path=/`
      }
    })
    // console.log('theme index setup', lang.value)
    // expose to template and other options API hooks
    // return { ... }
  },
}