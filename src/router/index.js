import Vue from 'vue'
import Router from 'vue-router'
import First from '@/page/first'
import Two from '@/page/two'
import Three from '@/page/three'

Vue.use(Router)

var routers = [
  {
    path: '/',
    redirect: '/first'
  },
  {
    path: '/first',
    name: First,
    component: First
  },
  {
    path: '/two',
    name: Two,
    component: Two
  },
  {
    path: '/three',
    name: Three,
    component: Three
  }
]

export default new Router({
  mode: 'history',
  routes: routers
})
