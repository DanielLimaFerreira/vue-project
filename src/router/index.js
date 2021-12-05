import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../views/Favorite.vue')
  },
  {
    path: '/delete',
    name: 'Delete',
    component: () => import( '../views/Delete.vue')
  },
  {
    path: '/share',
    name: 'Share',
    component: () => import('../views/Share.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
