<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/posts">Posts</RouterLink>
  <RouterLink to="/modals">Modals</RouterLink>
</nav>
<RouterView />
<!-- we can use is  onActivated, onDeactivated  if component is wrapp on this tags like this !!
  <RouterView v-slot="{ Component }">
        <keepalive>
          <component :is="Component" />
        </keepalive>
      </RouterView>
       -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
