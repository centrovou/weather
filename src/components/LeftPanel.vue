<script setup>
import { computed, inject, ref } from 'vue';
import IconLocation from '../icons/iconLocation.vue';
import { cityProvide } from '../const';
import IconSun from '../icons/weather/iconSun.vue';
import IconCloud from '../icons/weather/iconCloud.vue';
import IconRain from '../icons/weather/iconRain.vue';
const { dayData } = defineProps({
  dayData: Object,
});

const city = inject(cityProvide);

const day = computed(() => {
  return new Date(dayData.date).toLocaleDateString('ru-RU', { weekday: 'long' });
});

const date = computed(() => {
  return new Date(dayData.date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
});

const weatherCode = computed(() => {
  return dayData.day.condition.code;
});
</script>

<template>
  <div class="left">
    <div class="left__top-menu">
      <span class="left__title-day">{{ day }}</span>
      <span class="left__date">{{ date }}</span>
      <span class="left__city"> <IconLocation />{{ city }}</span>
    </div>
    <div class="left__bootom-panel">
      <div class="left__icon">
        <IconSun v-if="weatherCode <= 1003" size="95" />
        <IconCloud v-else-if="weatherCode > 1003 && weatherCode < 1063" size="95" />
        <IconRain v-else-if="weatherCode >= 1063" size="95" />
      </div>
      <span class="left__temp">{{ dayData.day.avgtemp_c }} °C</span>
      <span class="left__textInfo">{{ dayData.day.condition.text }}</span>
    </div>
  </div>
</template>

<style scoped>
.left__icon {
  margin-left: 10px;
  margin-bottom: 10px;
}
.left {
  width: 500px;
  height: 590px;
  border-radius: 30px;
  background-image: url('/public/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 48px 32px;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.left__top-menu {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
.left__bootom-panel {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}
.left__title-day {
  color: #fff;
  font-family: var(--font);
  font-size: 37px;
  font-weight: 700;
  text-transform: capitalize;
}

.left__date {
  color: #fff;
  font-family: var(--font);
  font-size: 22px;
  font-weight: 500;
}
.left__city {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font);
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 500;
}

.left__temp {
  color: #fff;

  font-family: Montserrat;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.left__textInfo {
  color: #fff;

  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

@media (max-width: 1215px) {
  .left {
   height: 380px;
  }
}

@media (max-width: 1070px) {
  .left {
   justify-content: space-between;
  }
}
</style>
