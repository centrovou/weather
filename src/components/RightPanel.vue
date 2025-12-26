<script setup>
import { computed, ref } from 'vue';
import Stat from './Stat.vue';
import DayCard from './DayCard.vue';
import CityCelect from './cityCelect.vue';
import Error from './Error.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

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

// Swiper модули
const modules = [Navigation];

// Настройки Swiper
const swiperOptions = ref({
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
  breakpoints: {
    // Настройки для разных размеров экрана
    320: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});

// Обновляем активный слайд
const onSwiper = (swiper) => {
  console.log('Swiper instance:', swiper);
};

// При изменении слайда
const onSlideChange = (swiper) => {
  console.log('Slide changed to:', swiper.activeIndex);
};
</script>

<template>
  <div class="right__wrapper">
    <Error v-if="error" :error="errorDisplay" />

    <div class="stat__inner" v-if="data">
      <Stat v-for="item in statData" :label="item.label" :stat="item.stat" />
    </div>

    <!-- Swiper слайдер -->
    <div class="swiper-container" v-if="data">
      <div class="swiper-wrapper-relative">
        <Swiper
          :modules="modules"
          :slides-per-view="swiperOptions.slidesPerView"
          :space-between="swiperOptions.spaceBetween"
          :navigation="swiperOptions.navigation"
          :breakpoints="swiperOptions.breakpoints"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <SwiperSlide v-for="(item, i) in data.forecast.forecastday" :key="item.date">
            <div class="slide-content" @click="() => emit('selectIndex', i)">
              <DayCard
                :weatherCode="item.day.condition.code || 0"
                :date="new Date(item.date)"
                :temp="item.day.avgtemp_c"
                :isActive="activeIndex === i"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Кастомные стрелки ВНУТРИ swiper-wrapper-relative -->
        <button class="custom-button-prev custom-nav-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="custom-button-next custom-nav-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
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
  position: relative;
  overflow: hidden;
}

/* Контейнер для Swiper */
.swiper-container {
  position: relative;
  margin: 30px 0;
}

/* Обертка для относительного позиционирования */
.swiper-wrapper-relative {
  position: relative;
}

/* Стили для содержимого слайда */
.slide-content {
  cursor: pointer;
}

/* Кастомные стрелки навигации */
.custom-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.custom-nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
}

.custom-nav-btn:active {
  transform: translateY(-50%) scale(0.95);
}

.custom-button-prev {
  left: -20px;
}

.custom-button-next {
  right: -20px;
}

/* Стиль для неактивных кнопок */
:deep(.swiper-button-disabled) {
  opacity: 0.3;
  cursor: not-allowed;
  transform: translateY(-50%) !important;
}

.custom-nav-btn svg {
  width: 20px;
  height: 20px;
}

/* Стили для самого Swiper */
:deep(.swiper) {
  overflow: visible;
}

:deep(.swiper-slide) {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1080px) {
  .right__wrapper {
    display: flex;
    flex-direction: column-reverse;
    width: 350px;
    padding: 30px 15px;
  }

  .custom-nav-btn {
    width: 35px;
    height: 35px;
  }

  .custom-button-prev {
    left: -15px;
  }

  .custom-button-next {
    right: -15px;
  }

  .custom-nav-btn svg {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 480px) {
  .custom-nav-btn {
    width: 30px;
    height: 30px;
  }

  .custom-button-prev {
    left: -10px;
  }

  .custom-button-next {
    right: -10px;
  }

  .custom-nav-btn svg {
    width: 16px;
    height: 16px;
  }
}
</style>
