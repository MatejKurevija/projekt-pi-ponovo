import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import signup from '../views/signup.vue'
import tos from '../views/tos.vue'
import itemsrented from '../views/itemsrented.vue'
import editprofile from '../views/editprofile.vue'
import myitems from '../views/myitems.vue'
import rentout from '../views/rentout.vue'
import payment from '../views/payment.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/tos',
    name: 'tos',
    component: tos
  },
  {
    path: '/itemsrented',
    name: 'itemsrented',
    component: itemsrented
  },
  {
    path: '/editprofile',
    name: 'editprofile',
    component: editprofile
  },
  {
    path: '/myitems',
    name: 'myitems',
    component: myitems
  },
  {
    path: '/rentout',
    name: 'rentout',
    component: rentout
  },
  {
    path: '/payment',
    name: 'payment',
    component: payment
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
