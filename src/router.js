import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Round1 from './views/Round1.vue'
import Rules1 from './views/Rules1.vue'
import Rules2 from './views/Rules2.vue'
import Round2 from './views/Round2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/round1',
      name: 'round1',
      component: Round1
    },
    {
      path: '/rules1',
      name: 'rules1',
      component: Rules1
    },
    {
      path: '/round2',
      name: 'round2',
      component: Round2
    },
    {
      path: '/rules2',
      name: 'rules2',
      component: Rules2
    }
  ]
})
