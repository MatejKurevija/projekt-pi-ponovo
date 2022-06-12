import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import signup from '../views/signup.vue'
import tos from '../views/tos.vue'
import itemsrented from '../views/itemsrented.vue'
import editprofile from '../views/editprofile.vue'
import myitems from '../views/myitems.vue'
import rentout from '../views/rentout.vue'
import payment from '../views/payment.vue'
import Store from '../views/Store.vue'
import store from '@/store'
import passwordresset from '../views/passwordresset.vue' 
import chat from '../views/chat.vue'


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
  path: '/passwordresset',
  name: 'passwordresset',
  component: passwordresset
},
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
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
    path: '/payment',
    name: 'payment',
    component: payment,
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
  path: '/chat',
    name: 'chat',
    component: chat,
    meta: {
			authReq: true,
		},
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



/* router.beforeEach((to, from, next) => {
const noUser = store.loggedin;
if(noUser && to.meta.authReq){
next('login');
} else{
  next();
}

}); */




export default router
