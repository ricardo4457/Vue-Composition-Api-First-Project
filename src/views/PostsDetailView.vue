<template>
  <main>
    <div class="posts">
      <p>Posts</p>
      <textarea v-autofocus />
    </div>
  </main>
</template>
<script lang="ts" setup>
// Local Custom Directives 



const vAutoFocus = {
  onmounted: (el: any) => el.focus() // we can create were own hooks
}
</script>
<style>
@media (min-width: 1024px) {
  .posts {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
