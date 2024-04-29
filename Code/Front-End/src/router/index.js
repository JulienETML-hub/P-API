import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/DetailsLivre.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
