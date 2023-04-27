---
categoryTitle: 'Scenarios'
sidebar_position: 0
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
  import { pages } from '/pages.js'
  const slug = '/en/dfc/scenarios/'
  const filteredPages = pages.filter(page => page?.href.indexOf(slug) > -1 && page?.href.indexOf('index.html') < 0)
</script>

<div v-for="(category, index) in filteredPages" :key="index">
  <CategoryCard
    :categoryTitle="category.categoryTitle"
    :excerpt="category?.excerpt"
    :image="category?.img"
    :href="category?.href" />
</div>
