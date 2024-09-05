<!--.vitepress/theme/dzc/TroopCard.vue-->
<script setup>

const props = defineProps({
  view: {
    type: String,
    required: false
  },
  api: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
const VIEWS = {
  CHARACTERISTICS: 'characteristics',
  WEAPONS: 'weapons',
  LAUNCH: 'launch',
  FULL: 'full'
}
const i18n = props.api.filter(item => item.slug === 'index')[0].data.i18n
const profile = props.api.filter(item => item.slug !== 'index')
  .map(item => item.data)
  .flat()
  .filter((item) => item.Name === props.name)[0]

// DEBUG:
console.log('%cPROFILE', 'color: red; font-weight: bold', profile)
</script>

<template>
</template>

<style></style>
