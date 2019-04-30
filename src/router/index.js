import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Car from '@/components/Car.vue'
import Landscape from '@/components/Landscape.vue'
import Wedding from '@/components/Wedding.vue'
import People from '@/components/People.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
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
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
    }, {
      path: '*',
      redirect: '/404'
    }
  ],
  mode: 'history'
})
