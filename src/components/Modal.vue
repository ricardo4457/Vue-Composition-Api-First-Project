<template>
    <Teleport to="body"> <!-- this tag serves to move a element on html to diferent location -->
        <div v-if="modelValue">

            <h1>{{ title }}</h1>
            <!--this serves to pass the content to other component were we shpuld specificy what we want -->
            <slot />
            <!-- slot serves to specific were a element html is coming from the place this is imported whould be -->
            <button @click="handleHideModal">Hide Modal</button>
            <!--  this serves to dispute an event in action on template -->

        </div>
    </Teleport>
</template>
<script lang="ts" setup>
//Imports
import { ref } from 'vue'
// How to create Props
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: "no title",
    }
}) // Define Props to be used on other component

console.log(props.title); // this is how to access props on script

// Define Emits to target events

const emit = defineEmits(['hideModal'])

//Methods
const handleHideModal = () => {
    emit('hideModal');
}

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