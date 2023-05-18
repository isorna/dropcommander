---
layout: 'home'
lang: 'en-US'
title: 'Home'
hero:
  name: 'Drop Commander'
  text: 'Universe Fansite.'
  tagline: 'Made for fans, by fans.'
features:
  - icon:
      light: '/img/ui/moon-landing.png'
      dark: '/img/ui/moon-landing.dark.png'
      width: '100px'
      height: '100px'
    title: 'Dropfleet Commander V1.3.1'
    link: './dfc/'
    details: 'Updated Dropfleet Commander rules.'
  - icon:
      light: '/img/ui/orbit.png'
      dark: '/img/ui/orbit.dark.png'
      width: '100px'
      height: '100px'
    title: 'Dropzone Commander V2.2.0'
    link: './dzc/'
    details: 'Updated Dropzone Commander rules.'
---
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useData } from 'vitepress'
const { frontmatter } = useData()

onMounted(() => {
  let expires = new Date()
  expires.setFullYear(expires.getFullYear()+1)
  document.cookie = `nf_lang=${frontmatter.value.lang}; expires=${expires.toUTCString()}; path=/`
})
</script>
