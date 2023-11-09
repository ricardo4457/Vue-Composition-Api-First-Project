<template>
    <main>
        <div class="modals">
            <p>Modal</p>
            <div>
                <label>Show dark modals</label>
                <input v-modal="showDarkModals" type="checkbox" />
            </div>
            <button @click="showModal = true">Show Modal</button>
            <!-- Dynamic Component -->
             <component v-model="showModal" :is="showDarkModals ? ModalDark : Modal" title="My modal title (via prop)"> <!--Condition to check witch component gets called -->
                <!-- using update we longer need to call the value  because is getting passed on v-model -->
                <!-- prop on template⬆️ -->
                <!-- implementation of html in slot to children -->
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, non, in consequatur consectetur
                    error
                    vero itaque, optio nam praesentium veritatis aliquam cumque earum culpa quisquam illo ipsam labore
                    voluptatibus? Aspernatur.</p>
            </component>
        </div>
    </main>
</template>
<script lang="ts" setup>
//Imports
import { ref } from "vue"
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'
//Variables
const showDarkModals = ref(false)
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
  