<!--.vitepress/theme/dfc/ShipCardCharacteristics.vue-->
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
  <p class="profile-card__title__box">UCM {{ profile.Name }}</p>
  <p class="profile-card__designation"><em>{{ profile.Designation }}</em></p>
  <p class="profile-card__points"><em>{{ profile.Points }}</em> pts</p>
  <div class="profile-card__stats">
    <p class="profile-card__stat">
      <span class="profile-card__stat__title">{{ i18n['Scan'] }}</span>
      <span class="profile-card__stat__text">{{ profile.Scan }}</span>
    </p>
    <p class="profile-card__stat">
      <span class="profile-card__stat__title">{{ i18n['Sig'] }}</span>
      <span class="profile-card__stat__text">{{ profile.Signal }}</span>
    </p>
    <p class="profile-card__stat">
      <span class="profile-card__stat__title">{{ i18n['Thrust'] }}</span>
      <span class="profile-card__stat__text">{{ profile.Thrust }}</span>
    </p>
    <p class="profile-card__stat">
      <span class="profile-card__stat__title">{{ i18n['Hull'] }}</span>
      <span class="profile-card__stat__text">{{ profile.Hull }}</span>
    </p>
    <p class="profile-card__stat">
      <span class="profile-card__stat__title">{{ i18n['A'] }}</span>
      <span class="profile-card__stat__text">{{ profile.Armour }}</span>
    </p>
    <p class="profile-card__stat">
      <span class="profile-card__stat__title">{{ i18n['PD'] }}</span>
      <span class="profile-card__stat__text">{{ profile.PointDefence }}</span>
    </p>
    <p class="profile-card__stat">
      <span class="profile-card__stat__title">{{ i18n['G'] }}</span>
      <span class="profile-card__stat__text profile-card__stat__text--green">{{ profile.GroupMin === profile.GroupMax ? profile.GroupMin : `${profile.GroupMin}-${profile.GroupMax}` }}</span>
    </p>
    <p class="profile-card__stat">
      <span class="profile-card__stat__title">{{ i18n['T'] }}</span>
      <span class="profile-card__stat__text profile-card__stat__text--green">{{ profile.Tonnage }}</span>
    </p>
  </div>
  <p class="profile-card__special"><em>{{ i18n['Special'] }}</em>:
    <template v-for="(item, index) in profile.Special.map(item => i18n[item.trim()])" :key="index">
      &nbsp;<a :href="`/${localeIndex}/dfc/special-rules#${item.toLowerCase().replaceAll(' ', '-')}`">{{ item }}</a>
      <span v-if="index < profile.Special.map(item => i18n[item.trim()]).length - 1">,</span>
    </template>
  </p>
  <p class="profile-card__special-rules"
    v-for="(specialRule, index) in profile.SpecRules" :key="index">
    <em>{{ specialRule.split(':')[0].trim() }}</em>:&nbsp;{{ specialRule.split(':')[1].trim() }}</p>
</template>