<script setup></script>

<template>
  <div>
    <button class="button">
      <div>
        <slot name="icon" />
      </div>
      <slot />
    </button>
  </div>
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
  color: white;
  font-size: 20px;
  font-weight: 600;
  padding: 13px;
  height: 52px;
  background: linear-gradient(
    91deg,
    rgba(144, 217, 224, 0.9) 0.2%,
    rgba(84, 96, 230, 0.9) 100%
  );

  transition: background 0.3s ease;
}

.button:hover {
  background: var(--gradient-inverted);
}
</style>
