<template>
  <a :href="href">
    <div class="card">
      <div class="flex">
        <div class="media" v-if="image">
          <img :src="image" :alt="categoryTitle" />
        </div>
        <div class="details">
          <h2 class="title">{{ categoryTitle }}</h2>
          <p class="excerpt" v-if="excerpt">{{ truncateText(excerpt, 50) }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
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
  },
  methods: {
    truncateText (text, length) {
      if (text.length > length) {
        return `${text.substring(0, length)}...`
      }
      return text
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
  width: 100%;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  transition: ease-in-out 0.2s all;
}

.flex {
  display: flex;
}

.media {
  width: 45%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.details {
  margin-left: 1.2rem;
}

.title {
  border-top: none;
  margin: 0 0;
}

.excerpt {
  margin: 0 0;
  font-size: 0.9rem;
  color: #999;
}
</style>
