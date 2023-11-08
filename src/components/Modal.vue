<template>
    <Teleport to="body"> <!-- this tag serves to move a element on html to diferent location -->
        <div>

            <h1>
                <slot name="title" />
            </h1>
            <!--this serves to pass the content to other component were we shpuld specificy what we want -->
            <slot/>
            <!--this is to access slots data -->
            <pre>{{ $slots.title }}</pre>
            <!-- slot serves to specific were a element html is coming from the place this is imported whould be -->
            <button>Hide Modal</button>

        </div>
    </Teleport>
</template>
<script lang="ts" setup>
//Imports
import { ref } from 'vue'
import { useSlots } from 'vue' // this is to access slots data in script

const slots = useSlots();
console.log(slots.title);
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