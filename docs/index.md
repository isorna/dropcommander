---
layout: home
lang: en-US
title: Home

hero:
  name: Drop Commander
  text: Universe Fansite.
  tagline: Made for fans, by fans.

features:
  - icon:
      light: /moon-landing.png
      dark: /moon-landing.dark.png
      width: 100px
      height: 100px
    title: Dropfleet Commander V1.3.1
    link: ./en/dfc/
    details: Updated Dropfleet Commander rules.
  - icon:
      light: /orbit.png
      dark: /orbit.dark.png
      width: 100px
      height: 100px
    title: Dropzone Commander V2.2.0
    link: ./en/dzc/
    details: Updated Dropzone Commander rules.
---
<script lang="ts" setup>
import { useRouter } from 'vitepress'
import { onMounted } from 'vue'

let getUserLang = () => window.navigator.language.substring(0, 2)
// nf_lang is set up during theme setup hook:
let getCookieLang = () => document.cookie.split(';').filter((setting) => setting.indexOf('nf_lang') >= 0)[0]?.split('=')[1]
let checkUserLang = (language) => {
  let userLang = getUserLang()
  let cookieLang = getCookieLang()
  let checkLang = (lang) => (cookieLang && lang === cookieLang) ?? lang === userLang
  if (typeof language === 'string') {
    return checkLang(language)
  }
  return language.some(lang => checkLang(lang))
}

let { go } = useRouter()

onMounted(() => {
  if (checkUserLang(['es-ES'])) {
    go('/es/')
  } else {
    go('/en/')
  }
})
</script>
