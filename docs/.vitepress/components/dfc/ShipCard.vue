<!--.vitepress/theme/dfc/ShipCard.vue-->
<script setup>
import ShipCardCharacteristics from './ShipCardCharacteristics.vue'
import ShipCardWeapons from './ShipCardWeapons.vue'
import ShipCardLaunch from './ShipCardLaunch.vue'
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
// console.log('%cSHIP PROFILE', 'color: red; font-weight: bold', profile)
</script>
<template>
  <div class="profile">
    <div class="profile-card" v-if="view === VIEWS.CHARACTERISTICS">
      <ShipCardCharacteristics :i18n="i18n" :profile="profile" />
    </div>
    <div class="profile-card" v-if="view === VIEWS.WEAPONS">
      <ShipCardWeapons :i18n="i18n" :profile="profile" />
    </div>
    <div class="profile-card" v-if="view === VIEWS.LAUNCH">
      <ShipCardLaunch :i18n="i18n" :profile="profile" />
    </div>
    <div class="profile-card" v-if="view === VIEWS.FULL">
      <ShipCardCharacteristics :i18n="i18n" :profile="profile" />
      <ShipCardWeapons :i18n="i18n" :profile="profile" />
      <ShipCardLaunch :i18n="i18n" :profile="profile" />
    </div>
  </div>
</template>

<style>
.profile {
  --black: black;
  --black-tr: rgba(0, 0, 0, .8);
  --blue: rgba(64, 138, 201, 1);
  --blue-tr: rgba(64, 138, 201, .8);
  --green: rgba(82, 82, 0, 1);
  --green-tr: rgba(82, 82, 0, .8);
  --white: ghostwhite;
  --white-tr: rgba(248, 248, 255, .8);
}
.profile p {
  padding: 0;
  margin: 0;
}
.profile em {
  text-transform: uppercase;
  font-style: normal;
  border-bottom: 4px dotted var(--black);
}
.profile .profile-card {
  background-color: var(--white);
  border-radius: 20px;
  color: var(--black);
  direction: ltr;
  fill: none;
  fill-opacity: 1;
  font-family: 'Black Ops One', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 30px;
  padding: 20px;
  position: relative;
  text-decoration: none solid var(--white);
  text-transform: none;
}
.profile .profile-card__title__box {
  --clip-path: polygon(9% 20%,100% 0%,87% 90%,0 78%);
  color: var(--white);
  display: inline-block;
  font-family: inherit;
  font-size: 40px;
  line-height: 100px;
  white-space: nowrap;
  margin: 0;
  padding: 0 40px;
  position: relative;
  z-index: 1;
}
.profile .profile-card__title__box::before {
  background-color: var(--black);
  clip-path: var(--clip-path);
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}
.profile .profile-card__designation,
.profile .profile-card__points {
  font-family: inherit;
  position: absolute;
  right: 20px;
  text-align: right;
  top: 30px;
  white-space: nowrap;
}
.profile .profile-card__points {
  top: 70px;
}
.profile .profile-card__stats {
  font-family: inherit;
  display: flex;
  font-size: 15px;
  justify-content: flex-start;
  margin: 20px 0 0;
}
.profile .profile-card__stat,
.profile .profile-card__weapon {
  font-family: inherit;
  position: relative;
  margin: 0 5px 10px;
}
.profile .profile-card__stat__title {
  padding: 10px 20px 10px 15px;
  /* max-width: 130px;
  overflow: hidden;
  text-overflow: clip; */
  z-index: 5;
}
.profile .profile-card__stat__title,
.profile .profile-card__stat__text {
  font-family: inherit;
  display: block;
  position: relative;
  transform: rotate(355deg);
  transform-origin: bottom left;
  white-space: nowrap;
}
.profile .profile-card__stat__title::before {
  background-color: var(--white);
  border: 3px solid var(--black);
  border-right-width: 5px;
  content: '';
  height: 72%;
  left: 8%;
  margin: 0;
  position: absolute;
  top: 15%;
  transform: perspective(100px) rotateY(31deg) rotate(3deg) skew(-12deg,-5deg);
  width: 90%;
  z-index: -1;
}
.profile .profile-card__stat__text {
  --bg-color: var(--blue);
  --bg-color-tr: var(--blue-tr);
  margin-left: 10px;
  line-height: 40px;
  padding: 10px 15px;
  text-align: right;
  margin-top: -20px;
  z-index: 4;
}
.profile .profile-card__stat__text--green {
  --bg-color: var(--green);
  --bg-color-tr: var(--green-tr);
}
.profile .profile-card__stat__text::before {
  background: linear-gradient(to right top, var(--bg-color-tr), var(--white-tr));
  border: 3px solid var(--black);
  border-right-width: 5px;
  content: '';
  height: 72%;
  left: 8%;
  margin: 0;
  position: absolute;
  top: 15%;
  transform: perspective(100px) rotateX(-29deg) skew(4deg,4deg) rotateY(-178deg) rotate(24deg)  skew(36deg,-12deg);
  width: 90%;
  z-index: -1;
}
.profile .profile-card__weapon {
  display: flex;
  align-items: center;
}
.profile .profile-card__weapon-title__box {
  font-family: inherit;
  --bg-color: var(--white);
  --bg-color-tr: var(--white-tr);
  display: block;
  font-size: 18px;
  /* line-height: 40px; */
  padding: 10px 20px 10px 15px;
  position: relative;
  transform: rotate(6deg);
  /* white-space: nowrap; */
  z-index: 5;
}
.profile .profile-card__weapon-title__box--green {
  --bg-color: var(--green);
  --bg-color-tr: var(--green-tr);
}
.profile .profile-card__weapon-title__box::before {
  background: linear-gradient(to left top, var(--bg-color-tr), var(--white-tr));
  border: 3px solid var(--black);
  border-right-width: 5px;
  content: '';
  left: 8%;
  margin: 0;
  height: 80%;
  position: absolute;
  top: 9%;
  transform: perspective(200px) rotateY(15deg) rotate(6deg) skew(16deg,-5deg);
  width: 100%;
  z-index: -1;
}
.profile .profile-card__special,
.profile .profile-card__special-rules {
  font-family: inherit;
  margin: 10px 0 0;
}
.profile .profile-card__stat + .profile-card__special {
  display: flex;
  flex-direction: column;
  gap: .5em;
  line-height: 1em;
  margin: 10px 0 0 10px;
}
</style>