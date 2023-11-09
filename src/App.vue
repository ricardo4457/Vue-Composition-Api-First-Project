<template>
  <div class="user-data">
    {{ userData.name }} @ {{ userData.username }}
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
  </nav>
  <RouterView /> <!-- passing user data to current view on route -->
  <!-- we can use is  onActivated, onDeactivated  if component is wrapp on this tags like this !!
    <RouterView v-slot="{ Component }">
          <keepalive>
                <component :is="Component" />
                </keepalive>
              </RouterView>
               -->
</template>

<script  lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import { reactive, provide } from "vue";
const userData = reactive({
  name: "Ricardo",
  username: "ric12",
})
provide('userData', userData) // available userData for all children

</script>

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
