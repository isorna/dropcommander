<!--.vitepress/theme/CategoryCardsContainer.vue-->
<script setup>
import CategoryCard from './CategoryCard.vue'

const props = defineProps({
  pages: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <CategoryCard
      v-for="(category, index) in pages" :key="index"
      :title="category.title"
      :excerpt="category?.excerpt"
      :image="category?.img"
      :href="category?.href" />
  </div>
</template>

<style scoped>
.container {
  padding-top: 64px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
}
</style>