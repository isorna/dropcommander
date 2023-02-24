# Blog

<script setup>
  import ArticleCard from '/components/ArticleCard.vue'
  import { posts } from './posts.js'
</script>

<div v-for="(article, index) in posts" :key="index">
  <ArticleCard
    :articleTitle="article.articleTitle"
    :excerpt="''"
    :image="article.img"
    :author="article.author"
    :href="article.href"
    :date="(new Date(article.date)).toLocaleDateString()" />
</div>
