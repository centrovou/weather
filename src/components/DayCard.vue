<script setup>
import { computed } from 'vue';
import IconCloud from '../icons/weather/iconCloud.vue';
import IconRain from '../icons/weather/iconRain.vue';
import iconSun from '../icons/weather/iconSun.vue';

const { weatherCode, temp, date, isActive } = defineProps({
  weatherCode: Number,
  temp: Number,
  date: Date,
  nums: String,
  isActive: Boolean,
});

const iconColor = computed(() => {
  return isActive ? 'black' : 'white';
});
</script>

<template>
  <button class="day__wrapper" :class="{ active: isActive }">
    <div class="day__icon">
      <iconSun v-if="weatherCode <= 1003" :color="iconColor" />
      <IconCloud v-else-if="weatherCode > 1003 && weatherCode < 1063" :color="iconColor" />
      <IconRain v-else-if="weatherCode >= 1063" :color="iconColor" />
    </div>
    <div class="day__item">
      <span class="day__date">{{ date.toLocaleDateString('ru-RU', { weekday: 'short' }) }}</span>
      <span class="day__number">{{ nums }}</span>
      <span class="day__temp">{{ temp }} °C</span>
    </div>
  </button>
</template>

<style scoped>
.day__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
}
.day__wrapper {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #272e37;
  box-shadow: 1px 2px 4px 0px #222831;
  row-gap: 15px;
  align-items: center;
  padding: 15px 25px 20px 25px;
  margin-bottom: 70px;
  transition: 0.3s ease;
}

.day__date {
  color: #fff;
  font-family: var(--font);
  font-size: 20px;
  font-weight: 400;
}
.day__temp {
  color: #fff;
  font-family: var(--font);
  font-size: 20px;
  font-weight: 700;
}

.day__number {
  font-family: var(--font);
  color: rgba(135, 241, 29, 0.644);
}
.day__icon {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.day__wrapper:not(.active):hover {
  background: #3a434f;
}

.active {
  background-color: var(--color-primary);
  & .day__date,
  & .day__number,
  & .day__temp {
    color: var(--color-dark);
  }
}

@media (max-width: 1215px) {
  .day__temp {
    color: #fff;
    font-family: var(--font);
    font-size: 15px;
    font-weight: 700;
  }
}

@media (max-width: 450px) {
  .day__wrapper {
    padding: 5px;
    row-gap: 6px;
    margin-bottom: 0px;
  }
}
</style>
