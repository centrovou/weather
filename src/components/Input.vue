<script setup>
import { computed, ref, watch } from 'vue';
import { API_ROUTES, WEATHER_API } from '../weatherApi';

const model = defineModel();

const dropDown = ref(false); // флаг на открытие
const searchTimeot = ref(null); // таймер для зарежки

const cityList = ref([]);

async function searchCity(query) {
  if (!query || query.length < 2) {
    cityList.value = [];
    return;
  }

  try {
    const res = await WEATHER_API.get(API_ROUTES.searchCity, {
      params: {
        q: query,
      },
    });

    cityList.value = res.data;
  } catch (error) {
    console.log('ошибка вывода листа', error);
    cityList.value = [];
  }
}

const filterCityList = computed(() => {
  if (!model.value) {
    return [];
  }

  return cityList.value.slice(0, 5);
});

watch(model, (newValue) => {
  if (searchTimeot.value) {
    clearTimeout(searchTimeot.value);
  }

  searchTimeot.value = setTimeout(() => {
    searchCity(newValue);
  }, 100);
});

function selectCity(cityInput) {
  model.value = cityInput.name;
  dropDown.value = false;
  cityList.value = [];
}
</script>

<template>
  <div class="input-wrapper">
    <input
      @focus="dropDown = true"
      v-model="model"
      class="input"
      type="text"
      placeholder="Введите город"
    />
    <div v-if="dropDown && filterCityList.length > 0" class="dropdown">
      <div
        v-for="city in filterCityList"
        :key="city.id || city.name"
        @click="selectCity(city)"
        class="drop-item"
      >
        <div class="city-name">{{ city.name }}</div>
        <div class="city-details">
          <span class="region" v-if="city.region">{{ city.region }} </span>
          <span class="con">{{ city.country }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-wrapper {
  position: relative;
  width: 100%;
}
.input {
  font-size: 18px;
  border-radius: 10px;
  background: #272e37;
  box-shadow: 1px 2px 4px 0 #242e3d;
  padding: 15px 20px;
  width: 100%;
}
.input:focus {
  outline: none;
  border-color: #3a434f;
}
.input::placeholder {
  color: #3f4958;
  font-size: 18px;
  font-weight: 400;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #1c2025;
  border-radius: 10px;
  margin-top: 10px;
  border: 1px solid #3a434f;
  z-index: 9999;
  max-height: 150px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  scrollbar-color: #53a17d #1c2025;
}
/*  */

/* Стилизация скроллбара для WebKit браузеров (Chrome, Safari, Edge) */
.dropdown::-webkit-scrollbar {
  width: 8px;
  display: block !important; /* Важно: принудительное отображение */
}

.dropdown::-webkit-scrollbar-track {
  background: #1c2025;
  border-radius: 10px;
}

.dropdown::-webkit-scrollbar-thumb {
  background: #53a17d;
  border-radius: 10px;
}

.dropdown::-webkit-scrollbar-thumb:hover {
  background: #3bf69f;
}
/*  */
.drop-item {
  padding: 12px 20px;
  cursor: pointer;
  color: white;
  border-bottom: 1px solid #3a434f;
  transition: background-color 0.2s;
  z-index: 1000;
}

.city-name {
  font-weight: 500;
  margin-bottom: 4px;
}

.city-details {
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 5px;
  opacity: 0.8;
}

.region {
  color: #3bf69f; /* Синий */
  font-size: 13px;
}

.con {
  color: #ffffffcc; /* Синий */
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 5px;
  border-radius: 20px;
}
.drop-item:hover .city-details {
  opacity: 1;
}

.drop-item:hover {
  background: rgba(31, 177, 121, 0.068);
  border-color: rgba(31, 177, 121, 0.171);
}

@media (max-width: 1080px) {
  .dropdown {
    width: 302px;
    overflow-y: scroll;
    .dropdown::-webkit-scrollbar {
      width: 8px;
      display: block !important; /* Важно: принудительное отображение */
    }

    .dropdown::-webkit-scrollbar-track {
      background: #1c2025;
      border-radius: 10px;
    }

    .dropdown::-webkit-scrollbar-thumb {
      background: #53a17d;
      border-radius: 10px;
    }

    .dropdown::-webkit-scrollbar-thumb:hover {
      background: #3bf69f;
    }
  }
}
</style>
