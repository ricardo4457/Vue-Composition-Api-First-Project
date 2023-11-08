<template>
    <Teleport to="body"> <!-- this tag serves to move a element on html to diferent location -->
        <div>

            <h1>{{ title }}</h1>
            <!--this serves to pass the content to other component were we shpuld specificy what we want -->
            <slot />
            <!-- slot serves to specific were a element html is coming from the place this is imported whould be -->
            <button>Hide Modal</button>

        </div>
    </Teleport>
</template>
<script lang="ts" setup>
//Imports
import { ref } from 'vue'
// How to create Props
const props = defineProps({
    title: {
        type: String,
        default: "no title",
    }
}) // Define Props to be used on other component

console.log(props.title); // this is how to access props on script

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