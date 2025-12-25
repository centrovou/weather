<script setup>
defineProps({ error: String });
</script>

<template>
  <div class="wrapper__error" v-if="error">
    <span class="error__text">{{ error }}</span>
  </div>
</template>

<style scoped>
.error__text {
  color: #fff;
  font-size: 18px;
  font-weight: 400;
}

.wrapper__error {
  border-radius: 0 0 25px 25px;
  background: #272e37;
  box-shadow: 1px 2px 4px 0 #222831;
  text-align: center;
  padding: 15px;
  margin-bottom: 410px;
  margin-top: -55px;
}
</style>
