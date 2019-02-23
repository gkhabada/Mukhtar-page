import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Car from '../components/Car.vue'
import Landscape from '../components/Landscape.vue'
import Wedding from '../components/Wedding.vue'
import People from '../components/People.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/landscape',
      name: 'landscape',
      component: Landscape
    },
    {
      path: '/wedding',
      name: 'wedding',
      component: Wedding
    },
    {
      path: '/people',
      name: 'people',
      component: People
    }
  ],
  mode: 'history'
})
