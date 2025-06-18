<script setup>
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
onUnmounted(() => {
  console.log('DELETE');
});
</script>

<template>
  <button class="button">
    <div>
      <slot name="icon" />
    </div>
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  column-gap: 5px;
  cursor: pointer;
  border-radius: 10px;
  background: inherit;
  width: 100%;
  justify-content: center;

  color: var(--color-primary);

  font-family: var(--font);
  font-size: 20px;
  font-weight: 600;

  padding: 13px;

  background: var(--gradient);
  transition: background 0.3s ease;
}

.button:hover {
  background: var(--gradient-inverted);
}
</style>
