---
categoryTitle: 'Scenarios'
position: 0
breadcrumb:
  - path: '/en/'
    text: 'Home'
  - path: '/en/dzc/'
    text: 'Dropzone Commander'
  - path: ''
    text: 'Scenarios'
---
# The basics

<script setup>
  import { pages } from '/pages.js'
  const slug = '/en/dzc/scenarios/'
  const filteredPages = pages.filter(page => page?.href.indexOf(slug) > -1 && page?.href.indexOf('index.html') < 0)
    .sort((a, b) => a.position - b.position)
</script>

<CategoryCardsContainer :pages="filteredPages" />
