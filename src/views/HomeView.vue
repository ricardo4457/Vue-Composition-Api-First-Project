<template>
  <div class="home">

    <h3>{{ counterData.title }}:</h3>
    <div class="container">
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>

    <div class="edit">
      <h4>Edit Counter Title:</h4>
      <input v-model="counterData.title" type="text">
      <!-- With v-model we can do Twowaydatabinding to change the variavel at the same time is on page -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'

const counter = ref(0), // Simple Ref variable on Composion Api use counter.value to manipulate the counter
  counterTitle = ref('My Counter')

const appTitle = ' The Title' // Non-reactive Data that does not change anything on template

const increaseCounter = () => {
  counterData.count++
}

const counterData = reactive({   // Reactive Objects
  count: 0,
  title: "My Counter"
})

const decreaseCounter = () => {
  if (counterData.count > 0) {
    counterData.count--
  } else {
    counterData.count = 0
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

.edit {
  margin-top: 60px;
}
</style>