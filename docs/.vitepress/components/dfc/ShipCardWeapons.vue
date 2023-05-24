<!--.vitepress/theme/dfc/ShipCardWeapons.vue-->
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
  <template v-for="(weapon, index) in profile.Weapons" :key="index">
    <div class="profile-card__stats">
      <p class="profile-card__weapon">
        <span class="profile-card__weapon-title__box profile-card__weapon-title__box--green">{{ weapon.Name }}</span>
      </p>
      <p class="profile-card__stat">
        <span class="profile-card__stat__title">{{ i18n['Lock'] }}</span>
        <span class="profile-card__stat__text">{{ weapon.LockValue }}</span>
      </p>
      <p class="profile-card__stat">
        <span class="profile-card__stat__title">{{ i18n['Attack'] }}</span>
        <span class="profile-card__stat__text">{{ weapon.Attack }}</span>
      </p>
      <p class="profile-card__stat">
        <span class="profile-card__stat__title">{{ i18n['Damage'] }}</span>
        <span class="profile-card__stat__text">{{ weapon.Damage }}</span>
      </p>
      <p class="profile-card__stat">
        <span class="profile-card__stat__title">{{ i18n['Arc'] }}</span>
        <span class="profile-card__stat__text">{{ weapon.Arc }}</span>
      </p>
      <p class="profile-card__special" v-if="weapon.Special.length > 0">
        <em>{{ i18n['Special'] }}</em>
        <template v-for="(item, index) in weapon.Special.map(item => i18n[item.trim()])" :key="index">
          <a :href="`/${localeIndex}/dfc/special-rules#${item.toLowerCase().replaceAll(' ', '-')}`">{{ item }}</a>
          <!-- <span v-if="index < weapon.Special.map(item => i18n[item.trim()]).length - 1">,</span> -->
        </template>
      </p>
    </div>
    <!-- <p class="profile-card__special">
      <em>{{ i18n['Weapon Special'] }}</em>:
      <template v-for="(item, index) in weapon.Special.map(item => i18n[item.trim()])" :key="index">
        &nbsp;<a :href="`/${localeIndex}/dfc/special-rules#${item.toLowerCase().replaceAll(' ', '-')}`">{{ item }}</a>
        <span v-if="index < weapon.Special.map(item => i18n[item.trim()]).length - 1">,</span>
      </template>
    </p> -->
  </template>
</template>