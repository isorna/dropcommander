<!--.vitepress/theme/BreadCrumb.vue-->
<script setup lang="ts">
defineProps({
  breadCrumb: Array<{ path: string, text: string }>
})
</script>

<template>
  <nav aria-label="Breadcrumb" class="breadcrumb" v-if="breadCrumb">
    <ul>
        <li v-for="(crumb, index) in breadCrumb" :key="crumb.path">
          <a v-if="index < breadCrumb.length - 1"
            class="crumb"
            :href="crumb.path">{{ crumb.text }}</a>
          <span v-else aria-current="page">{{ crumb.text }}</span>
        </li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
.breadcrumb {
  padding: 0 .5rem 1rem;
}
.breadcrumb ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.breadcrumb li:not(:first-child)::before {
  content: ">";
  padding: 0 .5rem;
}
.crumb {
  color: var(--vp-c-brand);
}
.crumb:hover {
  color: var(--vp-c-brand-light);
}
</style>
