<script setup>
import { computed, inject, onMounted } from 'vue';
import iconLocation from '../icons/iconLocation.vue';

import { useForecastStore } from '../stores/forecast.store';
import IconSun from '../icons/weather/iconSun.vue';
import IconCloud from '../icons/weather/iconCloud/iconCloud.vue';
import IconRain from '../icons/weather/iconRain.vue';

const forecastStore = useForecastStore();

const { dayData } = defineProps({
  dayData: Object,
});

const day = computed(() => {
  return dayData
    ? new Date(dayData.date).toLocaleDateString('ru-RU', { weekday: 'long' })
    : '—';
});

const date = computed(() => {
  return dayData
    ? new Date(dayData.date).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '—';
});

const weatherCode = computed(() => {
  return dayData?.day?.condition?.code;
});

const weatherText = computed(() => {
  return getTextCode(weatherCode.value);
});

function getTextCode(code) {
  const weatherMap = {
    1000: 'Ясно',
    1003: 'Переменная облачность',
    1006: 'Облачно',
    1009: 'Пасмурно',
    1030: 'Пасмурно',
    1063: 'Возможен дождь',
    1066: 'Возможен снег',
    1069: 'Мокрый снег',
    1072: 'Легкая морось',
    1087: 'Гроза',
    1114: 'Метель',
    1117: 'Сильная метель',
    1135: 'Туман',
    1147: 'Ледяной туман',
    1150: 'Легкая морось',
    1153: 'Морось',
    1168: 'Ледяная морось',
    1171: 'Сильная ледяная морось',
    1180: 'Небольшой дождь',
    1183: 'Дождь',
    1186: 'Умеренный дождь',
    1189: 'Сильный дождь',
    1192: 'Ливень',
    1195: 'Сильный ливень',
    1198: 'Легкий ледяной дождь',
    1201: 'Ледяной дождь',
    1204: 'Легкий снег с дождем',
    1207: 'Снег с дождем',
    1210: 'Небольшой снег',
    1213: 'Снег',
    1216: 'Умеренный снег',
    1219: 'Сильный снег',
    1222: 'Снегопад',
    1225: 'Сильный снегопад',
    1237: 'Град',
    1240: 'Небольшой ливень',
    1243: 'Ливень',
    1246: 'Сильный ливень',
    1249: 'Легкий ледяной дождь',
    1252: 'Ледяной дождь',
    1255: 'Легкий снег',
    1258: 'Снег',
    1261: 'Легкий град',
    1264: 'Град',
    1273: 'Небольшая гроза с дождем',
    1276: 'Гроза с дождем',
    1279: 'Небольшая снежная гроза',
    1282: 'Снежная гроза',
  };

  return weatherMap[code] || dayData?.day?.condition?.text || '—';
}

const temp = computed(() => {
  return dayData?.day?.avgtemp_c !== undefined
    ? `${Math.round(dayData.day.avgtemp_c)} °C`
    : '—';
});

const displayCity = computed(() => {
  return forecastStore.city || '—';
});
const showIconSnow = computed(() => weatherCode >= 1216 && weatherCode <= 1258);
</script>

<template>
  <div class="left__panel">
    <div class="left__top">
      <span class="left__day">{{ day }}</span>
      <span class="left__date">{{ date }}</span>
      <span class="left__city"> <iconLocation /> {{ displayCity }} </span>
    </div>
    <div class="left__buttom">
      <IconSun v-if="weatherCode <= 1003" :size="95" />
      <IconCloud v-if="weatherCode > 1003 && weatherCode < 1063" :size="95" />
      <IconRain v-if="weatherCode >= 1063" :size="95" />

      <span class="left__temp">{{ temp }}</span>
      <span class="left__info">{{ weatherText }}</span>
    </div>
  </div>
</template>

<style scoped>
.left__panel {
  background: url('../assets/back.png');
  width: 500px;
  height: 666px;
  border-radius: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 30px;
}
.left__top {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.left__day {
  color: white;
  font-size: 37px;
  font-weight: 700;
  text-transform: capitalize;
}
.left__date {
  color: white;
  font-size: 22px;
  font-weight: 500;
}
.left__city {
  color: white;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: end;
  gap: 5px;
  text-transform: capitalize;
}

.left__buttom {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.left__temp {
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
}

.left__info {
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
}

@media (max-width: 1070px) {
  .left__panel {
    height: 450px;
    justify-content: space-between;
    width: 468px;
    padding: 40px 30px;
  }
}

@media (max-width: 800px) {
  .left__panel {
    height: 385px;
    justify-content: space-between;
    width: 345px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .left__info {
    font-size: 20px;
  }
  .left__buttom{
   display: flex;
   align-items: center;
   text-align: center;
  }
  .left__city{
   display: flex;
   align-items: center;
   text-align: center;
   justify-content: center;
  }
  .left__date{
   display: flex;
   align-items: center;
   text-align: center;
   justify-content: center;
  }
}
</style>
