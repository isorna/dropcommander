<!--.vitepress/theme/CategoryCardsContainer.vue-->
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  href: {
    type: String,
    required: false
  }
})

const truncateText = (text, length) => {
  if (text.length > length) {
    return `${text.substring(0, length)}...`
  }
  return text
}
</script>

<template>
  <article class="card">
    <a :href="href" class="link">
      <header>
        <h2 class="title">{{ title }}</h2>
      </header>
      <img v-if="image" :src="image" class="image" :alt="title" />
      <div class="content">
        <p class="details" v-if="excerpt">{{ truncateText(excerpt, 50) }}</p>
      </div>
    </a>
  </article>
</template>

<style scoped>
.card {
  display: grid;
}
.link {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  display: block;
  height: 100%;
  transition: border-color .25s,background-color .25s;
  padding: 24px;
}
.link:hover {
  background-color: var(--vp-c-bg-soft-up);
  border-color: var(--vp-c-brand);
  text-decoration: none;
}
.image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.title {
  color: var(--vp-c-text-1);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  border: unset;
  letter-spacing: unset;
  margin: unset;
  padding: unset;
}
.details {
  padding-top: 8px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-weight: 500;
  margin: unset;
}
</style>
