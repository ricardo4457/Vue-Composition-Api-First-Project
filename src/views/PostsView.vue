<template>
  <main>
    <div class="posts">
      <p>Posts</p>
<ul>
  <li>
      <!-- this RouterLink serves for redirecting to specific in this case post  -->
    <RouterLink to="/postDetail/id1">Post 1</RouterLink>  
    <RouterLink to="/postDetail/id2">Post 2</RouterLink>
    <RouterLink to="/postDetail/id3">Post 3</RouterLink>
  </li>
</ul>
    </div>
  </main>
</template>
<script lang="ts" setup>
// Local Custom Directives 

const vAutoFocus = {
  onmounted: (el: any) => el.focus() // we can create were own hooks
}
</script>
<style scoped>
@media (min-width: 1024px) {
  .posts {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.ul {
  margin-right: 30px;
}
</style>
