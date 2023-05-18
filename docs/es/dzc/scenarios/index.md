---
title: 'Scenarios'
excerpt: 'Escenarios para Dropzone Commander.'
position: 0
---
# The basics

<script setup>
  import { data as pages } from '/documents.data'
  const slug = '/es/dzc/scenarios/'
  const filteredPages = pages.filter(page => page?.href.indexOf(slug) > -1 && page?.href.indexOf('index.html') < 0)
    .sort((a, b) => a.position - b.position)
</script>

<CategoryCardsContainer :pages="filteredPages" />
