<template>
  <div class="home">

    <h3 ref="TitleElementRef">{{ counterData.title }}:</h3>
    <div class="container">
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <button @click="decreaseCounter(2)" class="btn">- -</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <!-- We cam $event to pass the moment is clicked event  -->
      <button @click="increaseCounter(2, $event)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit Counter Title:</h4>
      <input v-model="counterData.title" type="text" v-autofocus>
      <!-- With v-model we can do Twowaydatabinding to change the variavel at the same time is on page -->
    </div>
  </div>
</template>
<script lang="ts" setup>
// Imports
import { nextTick, reactive, ref, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated, } from 'vue'
// import {vAutofocus} from '@/directives/vAutofocus.js' Import gobal directive

// Variables (Non-reactive)
const appTitle = 'The Title' // Non-reactive Data that does not change anything on template

const TitleElementRef = ref(null)  //to access elements on template

// Variables (Ref)
const counter = ref(0), // Simple Ref variable on Composion Api use counter.value to manipulate the counter
  counterTitle = ref('My Counter')

// Variables (Reactive Objects)
const counterData = reactive({   // Reactive Objects
  count: 0,
  title: "My Counter"
})

// Watcher

watch(() => counterData.count, (newValue, oldValue) => {
  if (newValue === 20) {
    alert("count is 20")
  }
  if (oldValue === 3) {
    alert("old count is 3")
  }
})

// Computed Properties

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even'
  else return 'odd'
})

// Methods

const increaseCounter = async (amount: number, event: any) => { // Increment the counter by what amount we want to increase
  counterData.count += amount
  await nextTick() // do after dom has updated
  console.log('do something')
}

const decreaseCounter = (amount: number) => { // Reduce the counter by what amount we want to increase
  if (counterData.count > 0) {
    counterData.count -= amount
  } else {
    counterData.count = 0
  }
}

// Lifecycle Hooks

// Mounted Hooks status of load of component
onBeforeMount(() => {

  console.log("onBeforeMount")

});

onMounted(() => {

  console.log("onMounted" + TitleElementRef.value) // the calls the element on the ref

});

onBeforeUnmount(() => {

  console.log("onBeforeUnmount")

});

onUnmounted(() => {

  console.log("onUnmounted")

});

// Activated Hooks Wen component is  keeped alive

onActivated(() => {

  console.log("Activated")

});

onDeactivated(() => {

  console.log("Deactivated")

});

// Updated Hooks when  template updates is fired

onBeforeUpdate(() => {

  console.log("onBeforeUpdate")

});

onUpdated(() => {

  console.log("onUpdated")

});

// Local Custom Directives 

const vAutoFocus = {
  onmounted: (el: any) => el.focus() // we can create were own hooks
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