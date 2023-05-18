---
title: 'Core rules'
excerpt: 'Reglas básicas de Dropzone Commander.'
position: 0
breadcrumb:
  - path: '/es/'
    text: 'Inicio'
  - path: '/es/dzc/'
    text: 'Dropzone Commander'
  - path: ''
    text: 'Core rules'
---
# Core rules

<script setup>
  import { data as pages } from '/documents.data'
  const slug = '/es/dzc/rules/'
  const filteredPages = pages.filter(page => page?.href.indexOf(slug) > -1 && page?.href.indexOf('index.html') < 0)
    .sort((a, b) => a.position - b.position)
</script>

<CategoryCardsContainer :pages="filteredPages" />
