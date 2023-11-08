<template>
    <main>
        <div class="modals">
            <p>Modal</p>
            <button @click="showModal = true">Show Modal</button>
            <Modal v-if="showModal" title="My modal title (via prop)"> <!-- this title is a prop an defines it a value -->

                <!-- implementation of html in slot to children -->
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, non, in consequatur consectetur
                    error
                    vero itaque, optio nam praesentium veritatis aliquam cumque earum culpa quisquam illo ipsam labore
                    voluptatibus? Aspernatur.</p>
            </Modal>
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
  