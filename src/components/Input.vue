<script setup>
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
const data = defineModel({ type: String, required: true });
</script>

<template>
  <div>
    <input v-model="data" class="input" type="text" placeholder="Введите город" />
  </div>
</template>

<style scoped>
.input {
  font-family: var(--font);
  border-radius: 10px;
  background: #272e37;
  color: var(--color-primary);
  box-shadow: 1px 2px 4px 0px #222831;
  padding: 14px 12px;
  font-size: 18px;
  font-weight: 400;
}

.input::placeholder {
  color: #3f4958;
}

@media (max-width: 450px) {
  .input {
    max-width: 100px;
  }
  .input::placeholder {
    font-size: 12px;
  }
}
</style>
