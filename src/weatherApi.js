import axios from 'axios';

const API_ENDPOINT = import.meta.env.VITE_WEATHER_API_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const WEATHER_API = axios.create({
  baseURL: API_ENDPOINT,
  params: {
    key: API_KEY,
    lang: 'ru',
  },
});

export const API_ROUTES = {
  getForecast: `/forecast.json`,
  getCurrentWeather: '/current.json',
  searchCity: '/search.json',
};
