<script setup>
import { inject, ref,  } from 'vue';
import iconMap from '../icons/iconLocation.vue';
import Button from '../components/Button.vue';
import Input from './Input.vue';
import { cityProvide } from '../const';
const isEdited = ref(false);

const city = inject(cityProvide);

const inputValue = ref(city.value);

const select = () => {
  isEdited.value = false;
  city.value = inputValue.value;
};

const edit = () => {
  isEdited.value = true;
};

const vFocus = {
  mounted: (el) => el.focus(),
};
</script>

<template>
  <div class="city-select">
    <div v-if="!isEdited">
      <Button @click="edit">
        <iconMap />
        Изменить город
      </Button>
    </div>
    <div v-else class="zxc">
      <Input v-model="inputValue" v-focus @keyup.enter="select" />
      <Button @click="select"> Сохранить </Button>
    </div>
  </div>
</template>

<style scoped>
.zxc {
  display: flex;
  column-gap: 12px;
  align-items: center;
}
</style>
