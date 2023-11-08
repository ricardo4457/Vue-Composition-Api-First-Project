<template>
  <main>
    <div class="posts">
      <p>Post {{ $route.params.id }}</p> <!--this the way to call url params template to get current -->
      <p>
        <RouterLink to="/posts">&lt; Back</RouterLink>
      </p>
    </div>
    <div><button @click="showPostId">Show</button></div>
  </main>
</template>I
<script lang="ts" setup>
//Imports
import { useRoute } from 'vue-router';
//Variables

const route = useRoute();

//Methods

const showPostId = () => {

  alert("Is Post " + route.params.id);

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
