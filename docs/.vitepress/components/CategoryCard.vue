<template>
  <article class="card">
    <a :href="href" class="link">
      <header>
        <h2 class="title">{{ categoryTitle }}</h2>
      </header>
      <img v-if="image" :src="image" class="image" :alt="categoryTitle" />
      <div class="content">
        <p class="details" v-if="excerpt">{{ truncateText(excerpt, 50) }}</p>
      </div>
    </a>
  </article>
</template>

<script setup>
  const props = defineProps({
    categoryTitle: {
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

<style scoped>
.card {
  /* display: block;
  height: 100%; */
  display: grid;
  /* grid-template-rows: max-content 100px 1fr; */
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
  /* float: left;
  height: 96px;
  width: 96px;
  margin-right: 8px; */
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
