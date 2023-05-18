---
title: 'Dropfleet Commander'
excerpt: 'Reglas de juego de Dropfleet Commander.'
position: 0
---

# Dropfleet Commander

<script setup>
  import { data as pages } from '/documents.data'
  const slug = '/es/dfc/'
  const filteredPages = pages.filter(page => page?.href.indexOf(slug) > -1)
  const selectedPages = [
    filteredPages.find(page => page.href == `${slug}contents.html`),
    filteredPages.find(page => page.href == `${slug}earth-2673.html`),
    filteredPages.find(page => page.href == `${slug}the-basics/index.html`),
    filteredPages.find(page => page.href == `${slug}core-rules/index.html`),
    filteredPages.find(page => page.href == `${slug}building-your-fleet.html`),
    filteredPages.find(page => page.href == `${slug}scenarios/index.html`),
    filteredPages.find(page => page.href == `${slug}special-rules.html`),
    filteredPages.find(page => page.href == `${slug}glossary.html`),
  ]
</script>

<CategoryCardsContainer :pages="selectedPages" />
