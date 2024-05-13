import { createRouter, createWebHistory } from 'vue-router'
import DetailsLivre from '../views/Total/DetailsLivre.vue'
import AboutView from '../views/Total/AboutView.vue'
import Home from '../views/Total/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/DetailsLivre',
      name: 'DetailsLivre',
      component: DetailsLivre
    },
    {
      path: '/about',
      name: 'about',
      components: AboutView
    }
  ]
})

export default router
