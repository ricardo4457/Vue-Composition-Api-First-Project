<template>
  <main>
    <div class="posts">
      <p>Post {{ $route.params.id }}</p> <!--this the way to call url params template to get current -->
      <p>
        <RouterLink to="/posts">&lt; Back</RouterLink>
      </p>
    </div>
  </main>
</template>
<style>
@media (min-width: 1024px) {
  .posts {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
