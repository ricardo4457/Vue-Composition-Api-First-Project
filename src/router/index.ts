import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',

      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/postDetail/:id', // pass a parameter of post to know the post
      name: 'postDetail',

      component: () => import('../views/PostsDetailView.vue')
    },
    {
      path: '/modals',
      name: 'modals',

      component: () => import('../views/ModalsView.vue')
    },
  ]
})

export default router
