import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import signup from '../views/signup.vue'
import tos from '../views/tos.vue'
import itemsrented from '../views/itemsrented.vue'
import editprofile from '../views/editprofile.vue'
import myitems from '../views/myitems.vue'
import rentout from '../views/rentout.vue'
import Store from '../views/Store.vue'
import store from '@/store'
import sendout from '../views/sendout.vue'


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
    component: () => import('../views/login.vue'),
    meta: {
      disableIfLoggedIn: true
  }
  },
  {
    path: '/tos',
    name: 'tos',
    component: tos
  },
  {
    path: '/itemsrented',
    name: 'itemsrented',
    component: itemsrented,
    meta: {
			authReq: true,
		},
  },
  {
    path: '/editprofile',
    name: 'editprofile',
    component: editprofile,
    meta: {
			authReq: true,
		},
  },
  {
    path: '/myitems',
    name: 'myitems',
    component: myitems,
    meta: {
			authReq: true,
		},
  },
  {
    path: '/rentout',
    name: 'rentout',
    component: rentout,
    meta: {
			authReq: true,
		},
  },
  
  {
  path: '/Store',
    name: 'Store',
    component: Store,
    meta: {
			authReq: true,
		},
  },
  {
  path: '/sendout',
    name: 'sendout',
    component: sendout,
    meta: {
			authReq: true,
		},
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})




export default router
