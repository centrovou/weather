<script setup>
import { computed, useTemplateRef } from 'vue';
import Stat from './Stat.vue';
import DayCard from './DayCard.vue';
import CityCelect from './cityCelect.vue';
import Error from './Error.vue';

const { data, activeIndex, error } = defineProps({
  data: Object,
  activeIndex: Number,
  error: Object,
});
const errorMap = new Map([
  [1006, 'Указанный город не найден'],
  [1003, 'Введите город'],
  [2006, 'Неправильный API-ключ'],
]);

const errorDisplay = computed(() => {
  return errorMap.get(error?.error?.code);
});

const emit = defineEmits(['selectIndex']);

const statData = computed(() => {
  const dayData = data.forecast.forecastday[activeIndex].day;
  return [
    {
      label: 'Влажность',
      stat: dayData.avghumidity + ' %',
    },

    {
      label: 'Дождь',
      stat: dayData.daily_chance_of_rain + ' %',
    },

    {
      label: 'ВЕТЕР',
      stat: dayData.maxwind_kph + ' км/ч',
    },
  ];
});
</script>

<template>
  <div class="right__wrapper">
    <Error v-if="error" :error="errorDisplay" />
    <div class="stat__inner" v-if="data">
      <Stat v-for="item in statData" :label="item.label" :stat="item.stat" />
    </div>
    <div class="card__inner" v-if="data || null">
      <DayCard
        v-for="(item, i) in data.forecast.forecastday"
        :key="item.date"
        :weatherCode="item.day.condition.code || 0"
        :date="new Date(item.date)"
        :temp="item.day.avgtemp_c"
        :isActive="activeIndex === i"
        @click="() => emit('selectIndex', i)"
      />
    </div>
    <CityCelect />
  </div>
</template>

<style scoped>
.right__wrapper {
  border-radius: 25px;
  background: #222831;
  padding: 55px 50px;
  width: 520px;
}
.card__inner {
  display: flex;
  justify-content: space-between;
  gap: 1px;
}
</style>
