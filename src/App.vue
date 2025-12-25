<script setup>
import { onMounted, provide, ref, watch } from 'vue';
import LeftPanel from './components/LeftPanel.vue';
import RightPanel from './components/RightPanel.vue';

import { useForecastStore } from './stores/forecast.store';

const forecastStore = useForecastStore();

const activeIndex = ref(0);

onMounted(() => {
  forecastStore.getCity(forecastStore.city);
});
</script>

<template>
  <div class="wrapper">
    <LeftPanel
      :city="forecastStore.city"
      :dayData="forecastStore.data?.forecast?.forecastday?.[activeIndex]"
    />
    <RightPanel
      :data="forecastStore.data"
      :error="forecastStore.error"
      :activeIndex="activeIndex"
      @selectIndex="(i) => (activeIndex = i)"
    />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  padding: 20px;
}
@media (max-width: 1215px) {
  .wrapper {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
