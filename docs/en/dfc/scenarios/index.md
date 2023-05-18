---
title: 'Scenarios'
excerpt: 'Dropfleet Commander scenarios.'
position: 5
breadcrumb:
  - path: '/en/'
    text: 'Home'
  - path: '/en/dfc/'
    text: 'Dropfleet Commander'
  - path: ''
    text: 'Scenarios'
---
# Scenarios

<script setup>
  import { data as pages } from '/documents.data'
  const slug = '/en/dfc/scenarios/'
  const filteredPages = pages.filter(page => page?.href.indexOf(slug) > -1 && page?.href.indexOf('index.html') < 0)
    .sort((a, b) => a.position - b.position)
</script>

<CategoryCardsContainer :pages="filteredPages" />
