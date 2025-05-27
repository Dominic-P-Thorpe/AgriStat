import { createRouter, createWebHistory } from 'vue-router'
import FarmOverviewView from '@/views/FarmOverviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FarmOverviewView,
    },
    {
      path: '/soil',
      name: 'soil',
      component: () => import('../views/SoilHealthView.vue'),
    },
  ],
})

export default router
