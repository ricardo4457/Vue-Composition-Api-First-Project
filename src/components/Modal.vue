<template>
    <Teleport to="body"> <!-- this tag serves to move a element on html to diferent location -->
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, non, in consequatur consectetur
                error
                vero itaque, optio nam praesentium veritatis aliquam cumque earum culpa quisquam illo ipsam labore
                voluptatibus? Aspernatur.</p>
            <button>Hide Modal</button>
        </div>
    </Teleport>
</template>
<script lang="ts" setup>
//Imports
import { ref } from 'vue'

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