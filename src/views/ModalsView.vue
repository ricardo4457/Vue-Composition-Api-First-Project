<template>
    <main>
        <div class="modals">
            <p>Modal</p>
            <button @click="showModal = true">Show Modal</button>
            <Modal v-if="showModal"/>
        </div>
    </main>
</template>
<script lang="ts" setup>
//Imports
import { ref } from "vue"
import Modal from '@/components/Modal.vue'

//Variables
const showModal = ref(false)

</script>
<style scoped>
@media (min-width: 1024px) {
    .modals {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
  