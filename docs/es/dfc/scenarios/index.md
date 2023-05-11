---
categoryTitle: 'Escenarios'
excerpt: 'Escenarios para Dropfleet Commander.'
position: 0
breadcrumb:
  - path: '/es/'
    text: 'Inicio'
  - path: '/es/dfc/'
    text: 'Dropfleet Commander'
  - path: ''
    text: 'Escenarios'
---
# Scenarios

<script setup>
  import { data as pages } from '/documents.data'
  const slug = '/es/dfc/scenarios/'
  const filteredPages = pages.filter(page => page?.href.indexOf(slug) > -1 && page?.href.indexOf('index.html') < 0)
    .sort((a, b) => a.position - b.position)
</script>

<CategoryCardsContainer :pages="filteredPages" />
