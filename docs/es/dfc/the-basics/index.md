---
title: 'Lo básico'
excerpt: 'Reglas básicas de Dropfleet Commander.'
position: 3
breadcrumb:
  - path: '/es/'
    text: 'Inicio'
  - path: '/es/dfc/'
    text: 'Dropfleet Commander'
  - path: ''
    text: 'Lo básico'
---
# Lo básico

<script setup>
  import { data as pages } from '/documents.data'
  const slug = '/es/dfc/the-basics/'
  const filteredPages = pages.filter(page => page?.href.indexOf(slug) > -1 && page?.href.indexOf('index.html') < 0)
    .sort((a, b) => a.position - b.position)
</script>

<CategoryCardsContainer :pages="filteredPages" />
