<template>
    <main>
        <div class="modals">
            <p>Modal</p>
            <button @click="showModal = true">Show Modal</button>
            <Teleport to="body"> <!-- this tag serves to move a element on html to diferent location -->
                <div v-if="showModal">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, non, in consequatur consectetur
                        error
                        vero itaque, optio nam praesentium veritatis aliquam cumque earum culpa quisquam illo ipsam labore
                        voluptatibus? Aspernatur.</p>
                    <button @click="showModal = false">Hide Modal</button>
                </div>
            </Teleport>
        </div>
    </main>
</template>
<script lang="ts" setup>
//Imports
import { ref } from "vue"

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
  