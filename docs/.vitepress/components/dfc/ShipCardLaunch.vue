<!--.vitepress/theme/dfc/ShipCardLaunch.vue-->
<script setup>
import { useData } from 'vitepress'

const { localeIndex } = useData()
const props = defineProps({
  i18n: {
    type: Object,
    required: true
  },
  profile: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <template v-for="(asset, index) in profile.LaunchAssets" :key="index">
    <div class="profile-card__stats">
      <p class="profile-card__weapon">
        <span class="profile-card__weapon-title__box profile-card__weapon-title__box--green">{{ asset.Name }}</span>
      </p>
      <p class="profile-card__stat">
        <span class="profile-card__stat__title">{{ i18n['Launch'] }}</span>
        <span class="profile-card__stat__text">{{ asset.Launch }}</span>
      </p>
      <p class="profile-card__special" v-if="asset.Special.length > 0">
        <em>{{ i18n['Special'] }}</em>
        <template v-for="(item, index) in asset.Special.map(item => i18n[item.trim()])" :key="index">
          <a :href="`/${localeIndex}/dfc/special-rules#${item.toLowerCase().replaceAll(' ', '-')}`">{{ item }}</a>
          <!-- <span v-if="index < asset.Special.map(item => i18n[item.trim()]).length - 1">,</span> -->
        </template>
      </p>
    </div>
  </template>
</template>