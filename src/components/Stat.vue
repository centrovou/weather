<script setup>
const { label = 'ноу', stat } = defineProps({
  label: String,
  stat: String,
});
</script>

<template>
  <div class="stat">
    <span class="stat__name">{{ label }}</span>
    <span class="stat__value">{{ stat }}</span>
  </div>
</template>

<style scoped>
.stat__name {
  color: var(--color-primary);
  font-family: var(--font);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
}

.stat__value {
  color: var(--color-primary);
  font-family: var(--font);
  font-size: 28px;
  font-weight: 500;
}
.stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;
  row-gap: 16px;
}

@media (max-width: 1070px) {
  .stat__name {
   font-size: 20px;
  }
  .stat__value {
   font-size: 25px;
  }
}
</style>
