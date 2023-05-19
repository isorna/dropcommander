<!--.vitepress/theme/dfc/ShipCard.vue-->
<script setup>
const props = defineProps({
  i18n: {
    type: Array,
    required: true
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
const profile = Object.entries(props.api)
  .map(item => item[1])
  .filter((item) => item.Name === props.name)[0]
console.log('%cSHIP PROFILE', 'color: red; font-weight: bold', profile)
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>{{ i18n['Name'] }}</th>
        <th>{{ i18n['Scan'] }}</th>
        <th>{{ i18n['Sig'] }}</th>
        <th>{{ i18n['Thrust'] }}</th>
        <th>{{ i18n['Hull'] }}</th>
        <th>{{ i18n['A'] }}</th>
        <th>{{ i18n['PD'] }}</th>
        <th>{{ i18n['G'] }}</th>
        <th>{{ i18n['T'] }}</th>
        <th>{{ i18n['Special'] }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ profile.Name }}</td>
        <td>{{ profile.Scan }}</td>
        <td>{{ profile.Signal }}</td>
        <td>{{ profile.Thrust }}</td>
        <td>{{ profile.Hull }}</td>
        <td>{{ profile.Armour }}</td>
        <td>{{ profile.PointDefence }}</td>
        <td>{{ profile.GroupMin === profile.GroupMax ? profile.GroupMin : `${profile.GroupMin}-${profile.GroupMax}` }}</td>
        <td>{{ profile.Tonnage }}</td>
        <td>{{ profile.Special.map(item => i18n[item.trim()]).join(', ') }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>