<script setup>
defineProps({ label: String, stat: String });
</script>

<template>
  <div class="stat__wrapper">
    <span class="stat__title">{{ label }}</span>
    <span class="stat__value">{{ stat }}</span>
  </div>
</template>

<style scoped>
.stat__wrapper {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 16px;
}
.stat__title {
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
}
.stat__value {
  font-size: 28px;
  font-weight: 500;
}
</style>
