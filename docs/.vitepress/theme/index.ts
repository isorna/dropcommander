// /theme/index.ts
import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from '../components/Layout.vue'
import CategoryCardsContainer from '../components/CategoryCardsContainer.vue'
import ShipCard from '../components/dfc/ShipCard.vue'
import TroopCard from '../components/dzc/TroopCard.vue'
// import RegisterSW from '../components/RegisterSW.vue'
import ReloadPrompt from '../components/ReloadPrompt.vue'
import './custom.css'
// import { h } from 'vue'

export default {
  // ...DefaultTheme,
  extends: DefaultTheme,
  Layout,
  // Layout() {
  //   return h(Layout, null, {
  //     // 'layout-bottom': () => h(RegisterSW)
  //     'layout-bottom': () => h(ReloadPrompt)
  //   })
  // },
  // NotFound: () => 'custom 404',
  async enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.

    // DefaultTheme.enhanceApp({ app, router, siteData })// OJO: para qué sirve? hace algo?

    // register your custom global components
    app.component('CategoryCardsContainer', CategoryCardsContainer)
    app.component('ShipCard', ShipCard)
    app.component('TroopCard', TroopCard)
    app.component('ReloadPrompt', ReloadPrompt)
    // usePageAnalytics('G-V5E08LL4GP', 'b1d9002033c7e550e55a51a23dca4f31')
  },
  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
    // const { lang } = useData()
    // watchEffect(() => {
    //   if (inBrowser) {
    //     let expires = new Date()
    //     expires.setFullYear(expires.getFullYear()+1)
    //     document.cookie = `nf_lang=${lang.value}; expires=${expires.toUTCString()}; path=/`
    //   }
    // })
    // expose to template and other options API hooks
    // return { ... }
  },
}