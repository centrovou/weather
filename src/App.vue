<script setup>
import { onMounted, provide, ref, watch } from 'vue';

import LeftPanel from './components/LeftPanel.vue';
import RightPanel from './components/rightPanel.vue';

import { API_ENDPOINT, cityProvide } from './const';
import { db } from './firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

let data = ref();
const error = ref();
let activeIndex = ref(0);
const city = ref('Самара');

provide(cityProvide, city);

watch(city, () => {
  getCity(city.value);
});

onMounted(() => {
  getCity(city.value);
});
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
const getCity = async (city) => {
  const params = new URLSearchParams({
    q: city,
    lang: 'ru',
    key: weatherApiKey,
    days: 4,
  });
  const res = await fetch(`${API_ENDPOINT}/forecast.json?${params.toString()}`);
  if (res.status != 200) {
    error.value = await res.json();
    data.value = null;
    return;
  }
  error.value = null;
  data.value = await res.json();
  console.log(data.value);
};
</script>

<template>
  <div class="wrapper">
    <div>
      <LeftPanel v-if="data" :dayData="data.forecast.forecastday[activeIndex]" />
    </div>
    <div class="right">
      <RightPanel
        :data
        :error
        :activeIndex="activeIndex"
        @select-index="(i) => (activeIndex = i)"
      />
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  padding: 30px;
  display: flex;
  align-items: center;
  text-align: center;
}
.right {
  font-family: var(--font);
  background: var(--color-bg-main);
  padding: 50px 60px;
  border-radius: 0px 25px 25px 0px;
}

@media (max-width: 1215px) {
  .wrapper {
    display: block;
  }
  .right {
    border-radius: 25px 25px 25px 25px;
  }
}

@media (max-width: 1070px) {
  .right {
    display: flex;
    flex-direction: column-reverse;
    row-gap: 35px;
  }
}

@media (max-width: 450px) {
  .wrapper {
    padding: 0 15px;
  }
  .right {
    width: 277px;
    padding: 25px 30px;
    border-radius: 0px 0px 25px 25px;
    row-gap: 10px;
  }
  .stat__items {
    margin-bottom: 10px;
  }
}
</style>
