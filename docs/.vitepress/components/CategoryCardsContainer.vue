<template>
  <div class="container">
    <div v-for="(category, index) in pages" :key="index" class="item">
      <CategoryCard
        :categoryTitle="category.categoryTitle"
        :excerpt="category?.excerpt"
        :image="category?.img"
        :href="category?.href" />
    </div>
  </div>
</template>

<script setup>
import CategoryCard from './CategoryCard.vue'

const props = defineProps({
  pages: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: -8px;
  padding-top: 64px;
}
.item {
  padding: 8px;
  width: 100%;
}
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
  .item {
    width: 50%;
  }
}
</style>