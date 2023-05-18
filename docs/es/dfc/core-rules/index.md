---
title: 'Reglas fundamentales'
excerpt: 'Reglas fundamentales de Dropfleet Commander.'
position: 4
breadcrumb:
  - path: '/es/'
    text: 'Inicio'
  - path: '/es/dfc/'
    text: 'Dropfleet Commander'
  - path: ''
    text: 'Reglas fundamentales'
---
# Reglas fundamentales

<script setup>
  import { data as pages } from '/documents.data'
  const slug = '/es/dfc/core-rules/'
  const filteredPages = pages.filter(page => page?.href.indexOf(slug) > -1 && page?.href.indexOf('index.html') < 0)
    .sort((a, b) => a.position - b.position)
</script>

<CategoryCardsContainer :pages="filteredPages" />
