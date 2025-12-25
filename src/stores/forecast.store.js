import { defineStore } from 'pinia';
import { ref } from 'vue';
import { API_ROUTES, WEATHER_API } from '../weatherApi';

export const useForecastStore = defineStore('forecast', () => {
  const data = ref(null);
  const error = ref();
  const city = ref('Москва');

  function formatedTextCity(cityText) {
    if (!cityText) {
      return '';
    }
    const trimed = cityText.trim().toLowerCase();
    return trimed[0].toUpperCase() + trimed.slice(1);
  }

  async function getCity(newCity) {
    const currentCity = formatedTextCity(newCity);
    try {
      const { data: apiData } = await WEATHER_API.get(API_ROUTES.getForecast, {
        params: {
          q: currentCity,
          days: 3,
        },
      });
      error.value = null;
      data.value = apiData;
      city.value = currentCity;
    } catch (err) {
      error.value = err.response?.data;
      data.value = null;
    }
  }



  return { data, error, getCity, city };
});
