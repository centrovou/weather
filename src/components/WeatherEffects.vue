<script setup>
import { computed } from 'vue';

const props = defineProps({
  weatherCode: {
    type: Number,
    default: 1000,
  },
});

// Определяем, когда показывать эффекты
const showRain = computed(() => {
  return (
    (props.weatherCode >= 1063 && props.weatherCode <= 1198) ||
    (props.weatherCode >= 1240 && props.weatherCode <= 1246) ||
    props.weatherCode === 1150 ||
    props.weatherCode === 1153 ||
    props.weatherCode === 1180 ||
    props.weatherCode === 1183 ||
    props.weatherCode === 1186 ||
    props.weatherCode === 1189 ||
    props.weatherCode === 1192 ||
    props.weatherCode === 1195
  );
});

const showSnow = computed(() => {
  return (
    (props.weatherCode >= 1066 && props.weatherCode <= 1072) ||
    (props.weatherCode >= 1114 && props.weatherCode <= 1117) ||
    (props.weatherCode >= 1210 && props.weatherCode <= 1258) ||
    props.weatherCode === 1069 ||
    (props.weatherCode >= 1204 && props.weatherCode <= 1207)
  );
});

// Стили для капель дождя
const raindropStyle = (i) => {
  const left = (i % 20) * 5 + Math.random() * 10 + '%';
  const animationDuration = Math.random() * 0.8 + 0.4 + 's';
  const animationDelay = Math.random() * 2 + 's';
  const opacity = Math.random() * 0.5 + 0.3;
  const width = Math.random() * 3 + 1 + 'px';
  const height = Math.random() * 20 + 10 + 'px';

  return {
    left,
    animationDuration,
    animationDelay,
    opacity,
    width,
    height,
  };
};

// Стили для снежинок
const snowflakeStyle = (i) => {
  const left = Math.random() * 100 + '%';
  const animationDuration = Math.random() * 5 + 3 + 's';
  const animationDelay = Math.random() * 5 + 's';
  const opacity = Math.random() * 0.7 + 0.3;
  const size = Math.random() * 6 + 3 + 'px';
  const sway = Math.random() * 100 - 50 + 'px';

  return {
    left,
    animationDuration,
    animationDelay,
    opacity,
    width: size,
    height: size,
    '--sway': sway,
  };
};
</script>

<template>
  <div class="weather-effects">
    <!-- Эффект дождя -->
    <div v-if="showRain" class="rain-container">
      <div
        v-for="i in 60"
        :key="'rain-' + i"
        class="raindrop"
        :style="raindropStyle(i)"
      ></div>
    </div>

    <!-- Эффект снега -->
    <div v-if="showSnow" class="snow-container">
      <div
        v-for="i in 100"
        :key="'snow-' + i"
        class="snowflake"
        :style="snowflakeStyle(i)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.weather-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  border-radius: 30px;
  z-index: 1;
}

/* Анимация дождя */
.raindrop {
  position: absolute;
  top: -30px;
  background: linear-gradient(to bottom, transparent, rgba(173, 216, 230, 0.8));
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: fall linear infinite;
}

@keyframes fall {
  0% {
    transform: translateY(-30px) rotate(15deg);
  }
  100% {
    transform: translateY(700px) rotate(15deg);
  }
}

/* Анимация снега */
.snowflake {
  position: absolute;
  top: -10px;
  background-color: white;
  border-radius: 50%;
  filter: blur(0.5px);
  animation: snowfall linear infinite;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

@keyframes snowfall {
  0% {
    transform: translateY(-10px) translateX(0);
  }
  100% {
    transform: translateY(700px) translateX(var(--sway));
  }
}

/* Мокрый снег (смешанный эффект) */
.snowflake.mixed {
  background: linear-gradient(to bottom, white, lightblue);
}
</style>
