<template>
  <div class="home">
    <div class="container">
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const counter = ref(0)
const increaseCounter = () => {
  counter.value++
}

const decreaseCounter = () => {
  if (counter.value > 0) {
    counter.value--
  } else {
    counter.value = 0
  }
}
</script>
<style >
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.container {
  align-items: center;
  padding: 20px;
}

.btn .counter {
  font-size: 40px;
  margin: 10px;
}
</style>