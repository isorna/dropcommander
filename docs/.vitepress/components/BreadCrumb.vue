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
          <span v-else aria-current="page" class="current">{{ crumb.text }}</span>
        </li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
.breadcrumb {
  padding: 0 0 1rem;
  font-size: .875rem;
  line-height: 1.25rem;
  box-sizing: border-box;
}
.breadcrumb ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.breadcrumb ul li {
  display: flex;
  flex-wrap: wrap;
}
.breadcrumb li:not(:first-child)::before {
  content: "/";
  padding: 0 .25rem;
}
.current,
.crumb {
  overflow: hidden;
  padding: 0.125rem 0.35rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 7rem;
}
.crumb {
  border-radius: 9999px;
  color: var(--vp-c-brand);
}
.crumb:hover {
  background-color: var(--vp-sidebar-bg-color);
  color: var(--vp-c-brand-light);
  transform: scaleX(.95) scaleY(.95);
}
.breadcrumb li:first-child .crumb {
  background-color: var(--vp-sidebar-bg-color);
  border: 1px solid var(--vp-c-divider);
  padding: 0.125rem 0.75rem;
}
@media (width >= 768px) {
  .breadcrumb li:not(:first-child)::before {
    padding: 0 .5rem;
  }
  .current,
  .crumb {
    max-width: 15rem;
    padding: 0.125rem 0.50rem;
  }
  .breadcrumb li:first-child .crumb {
    padding: 0.125rem 0.75rem;
  }
}
</style>
