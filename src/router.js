import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/app/player/AppHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/error',
      name: 'error',
      component: () => import(/* webpackChunkName: "error" */ '@/app/Error.vue')
    },
    {
      path: '**',
      name: 'notFound',
      component: () => import(/* webpackChunkName: "notFound" */ '@/app/NotFound.vue')
    }
  ]
})
