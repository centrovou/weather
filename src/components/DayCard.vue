<script setup>
import { computed } from 'vue';
import IconSun from '../icons/weather/iconSun.vue';
import IconRain from '../icons/weather/iconRain.vue';
import IconCloudSnow from '../icons/weather/iconCloud/iconCloudSnow.vue';
import IconCloud from '../icons/weather/iconCloud/iconCloud.vue';
import IconCloudSnowSun from '../icons/weather/iconCloud/iconCloudSnowSun.vue';
import IconCloudSnowRain from '../icons/weather/iconCloud/iconCloudSnowRain.vue';

const { date, weatherCode, temp, isActive } = defineProps({
  date: Date,
  temp: Number,
  weatherCode: Number,
  isActive: Boolean,
});
const iconColor = computed(() => {
  return isActive ? 'black' : 'white';
});

const tempData = computed(() => {
  const roundTemp = Math.round(temp);
  return roundTemp < 0 ? `${roundTemp}` : `${roundTemp}`;
});

const showIconSun = computed(() => weatherCode <= 1003);
const showIconCloud = computed(
  () => (weatherCode > 1003 && weatherCode <= 1009) || weatherCode === 1030,
);

const showIconRain = computed(
  () =>
    (weatherCode >= 1063 && weatherCode <= 1198) ||
    (weatherCode >= 1240 && weatherCode <= 1246),
);
// Снег с солнцем/облаком: 1210-1213 (лёгкий/небольшой снег при ясной погоде)
const showIconSnowSun = computed(() => weatherCode >= 1210 && weatherCode <= 1213);
// Обычный снег/снегопад: 1216-1225 (умеренный, сильный снег, снегопад)
const showIconSnow = computed(() => weatherCode >= 1216 && weatherCode <= 1258);
// Снег с дождём (мокрый снег): 1069, 1204-1207
const showIconSleet = computed(
  () => weatherCode === 1069 || (weatherCode >= 1204 && weatherCode <= 1207),
);
</script>

<template>
  <div class="card__wrapper">
    <div class="card" :class="{ active: isActive }">
      <IconSun :color="iconColor" v-if="showIconSun" :size="54" />
      <IconCloud :color="iconColor" v-if="showIconCloud" :size="54" />
      <IconRain :color="iconColor" v-if="showIconRain" :size="54" />
      <IconCloudSnowSun :color="iconColor" v-if="showIconSnowSun" :size="54" />
      <IconCloudSnow :color="iconColor" v-if="showIconSnow" :size="54" />
      <IconCloudSnowRain :color="iconColor" v-if="showIconSleet" :size="54" />
      <span class="card__day">{{
        date.toLocaleDateString('ru-RU', { weekday: 'short' })
      }}</span>
      <span class="card__temp">{{ tempData }} °C</span>
    </div>
  </div>
</template>

<style scoped>
.card__wrapper {
  display: flex;
  gap: 1px;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 25px;
  border-radius: 10px;
  background: #272e37;
  box-shadow: 1px 2px 4px 0 #222831;
  align-items: center;
  width: 100%;
  cursor: pointer;
  transition: 0.1s ease;
}

.active {
  color: #000;
  background: white;
}
.card__day {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 400;
}
.card__temp {
  font-size: 20px;

  font-weight: 700;
}
.card:not(.active):hover {
  background: #3a434f;
  box-shadow: 1px 2px 4px 0 #222831;
  transform: translateY(2px);
}
.active {
  background: #fff;
  color: black;
}

@media (max-width: 800px) {
 .card__temp{
  font-size: 18px;
 }
}
</style>
