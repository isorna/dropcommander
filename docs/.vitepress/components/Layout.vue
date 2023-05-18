<!--.vitepress/theme/Layout.vue-->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import BreadCrumb from './BreadCrumb.vue';
import { useData } from 'vitepress'
const { page } = useData()
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before v-if="page">
      <BreadCrumb :page="page" />
    </template>
  </DefaultTheme.Layout>
</template>