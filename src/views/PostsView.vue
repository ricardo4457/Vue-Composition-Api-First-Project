<template>
  <main>
    <div class="posts">
      <p>Posts</p>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <!-- this RouterLink serves for redirecting to specific in this case post  -->
          <RouterLink to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>

        </li>
      </ul>
    </div>
  </main>
</template>
<script lang="ts" setup>
//Imports 
import { ref } from "vue"
// Local Custom Directives 
const posts = ref([
  {
    id: 'id1',
    title: 'Post 1',
  },
  {
    id: 'id2',
    title: 'Post 2',
  },
  {
    id: 'id3',
    title: 'Post 3',
  }
]);
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
