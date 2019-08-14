import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Round1 from './views/Round1.vue'
import Rules1 from './views/Rules1.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/round1',
      name: 'round1',
      component: () => import('./views/Round1.vue')
    },
    {
      path: '/rules1',
      name: 'rules1',
      component: () => import('./views/Rules1.vue')
    }
  ]
})
