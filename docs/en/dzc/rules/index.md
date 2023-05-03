---
categoryTitle: 'The basics'
excerpt: 'Dropzone Commander basic rules.'
position: 3
breadcrumb:
  - path: '/en/'
    text: 'Home'
  - path: '/en/dzc/'
    text: 'Dropzone Commander'
  - path: ''
    text: 'The basics'
---
# The basics

<script setup>
  import { pages } from '/pages.js'
  const slug = '/en/dzc/rules/'
  const filteredPages = pages.filter(page => page?.href.indexOf(slug) > -1 && page?.href.indexOf('index.html') < 0)
    .sort((a, b) => a.position - b.position)
</script>

<CategoryCardsContainer :pages="filteredPages" />
