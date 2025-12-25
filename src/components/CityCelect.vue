<script setup>
import { inject, provide, ref, watch } from 'vue';
import IconLocation from '../icons/iconLocation.vue';
import Button from './Button.vue';
import Input from './Input.vue';
import { useForecastStore } from '../stores/forecast.store';
import { API_ROUTES, WEATHER_API } from '../weatherApi';

const forecastStore = useForecastStore();

const isEdited = ref(false);
const globalCity = ref(forecastStore.city);

function edit() {
  isEdited.value = true;
}

function handleCity() {
  forecastStore.getCity(globalCity.value);
  isEdited.value = false;
  globalCity.value = '';
}
</script>

<template>
  <div class="city-select__wrapper">
    <div @click="edit" class="one" v-if="!isEdited">
      <Button>
        <IconLocation />
        Изменить город
      </Button>
    </div>
    <div class="two" v-if="isEdited">
      <Input v-model="globalCity" @keyup.enter="handleCity" />
      <Button @click="handleCity">Сохранить</Button>
    </div>
  </div>
</template>

<style scoped>
.two {
  display: flex;
  gap: 12px;
}
</style>
