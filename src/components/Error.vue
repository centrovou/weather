<script setup>
const { error } = defineProps({
  error: String,
});
</script>

<template>
  <div class="error" v-if="error">
    {{ error }}
  </div>
</template>

<style scoped>
.error {
  color: #fff;

  text-align: center;
  font-family: var(--font);
  font-size: 18px;

  font-weight: 400;

  padding: 15px;
  border-radius: 0px 0px 25px 25px;
  background: #272e37;
  transform: translateY(-49.9px);
  margin-bottom: 50px;
}
</style>
