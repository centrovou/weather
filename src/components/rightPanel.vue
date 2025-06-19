<script setup>
import { computed, inject } from 'vue';
import CitySelect from './CitySelect.vue';
import DayCard from './DayCard.vue';
import Error from './Error.vue';
import Stat from './Stat.vue';
import { errorMap } from '../const';

let { error, data, activeIndex } = defineProps({
  error: Object,
  data: Object,
  activeIndex: Number,
});

const emit = defineEmits('select-index', 'select-city');

const errorDesplay = computed(() => {
  return errorMap.get(error?.error?.code);
});

const statData = computed(() => {
  return [
    {
      label: 'Влажность',
      stat: data.forecast.forecastday[activeIndex].day.avghumidity + '%',
    },
    {
      label: 'Вероятность дождя',
      stat: data.forecast.forecastday[activeIndex].day.daily_chance_of_rain + '%',
    },
    {
      label: 'ВЕТЕР',
      stat: data.forecast.forecastday[activeIndex].day.maxwind_kph + ' км/ч',
    },
  ];
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const dayOfMonth = date.getDate();
  return ` ${dayOfMonth}`;
};
</script>

<template>
  <Error v-if="error" :error="errorDesplay" />
  <div v-if="data" class="wrapper_days">
    <div class="stat__items">
      <Stat class="stat" v-for="element in statData" v-bind="element" :key="element.label" />
    </div>
    <div class="days">
      <DayCard
        v-for="(item, i) in data.forecast.forecastday"
        :key="item.date"
        :weatherCode="item.day.condition.code"
        :date="new Date(item.date)"
        :temp="item.day.avgtemp_c"
        :nums="formatDate(item.date)"
        :isActive="activeIndex == i"
        @click="() => emit('select-index', i)"
      />
    </div>
  </div>
  <CitySelect />
</template>

<style scoped>
.days {
  display: flex;
  column-gap: 2px;
}

.stat__items {
  margin-bottom: 50px;
  row-gap: 16px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1070px) {
  .days {
    justify-content: space-between;
  }
}
@media (max-width: 450px) {
  .stat__items {
    margin-bottom: 12px;
  }
}
</style>
