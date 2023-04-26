<!--.vitepress/theme/Layout.vue-->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import BreadCrumb from './BreadCrumb.vue';
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <BreadCrumb :breadCrumb="frontmatter.breadcrumb" />
    </template>
  </DefaultTheme.Layout>
</template>