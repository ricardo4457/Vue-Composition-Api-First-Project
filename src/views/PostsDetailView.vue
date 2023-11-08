<template>
  <main>
    <div class="posts">
      <p>Post {{ $route.params.id }}</p> <!--this the way to call url params template to get current -->
      <p>
        <RouterLink to="/posts">&lt; Back</RouterLink>
      </p>
    </div>
    <div><button @click="showPostId">Show</button></div>
    <div><button @click="GoHome">Go Home</button></div>
    <div><button @click="GoPost1">Go to Post 1</button></div>
  </main>
</template>I
<script lang="ts" setup>
//Imports
import { useRoute, useRouter } from 'vue-router';
//Variables

const route = useRoute(); // to get the route parameters

const router = useRouter(); // to redirect to diferent routes on the script

//Methods

const showPostId = () => {

  alert("Is Post " + route.params.id);

}

const GoHome = () => {  // In this case goes to home page

  setTimeout(() => {
    router.push({ name: "home" })
  }, 3000);

}

const GoPost1 = () => {  // In this case goes to home page

  setTimeout(() => {
    router.push({ name: "postDetail", params: { id: 'id1' } }) // Goes to a diferent post based on is parameter
  }, 3000);

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
