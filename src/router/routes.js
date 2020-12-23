import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '../store/store'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home.vue'),
      beforeEnter(to, from, next) {
        store.dispatch('initAuth')
        console.log(store.getters.getToken)
        if (store.getters.getToken) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../pages/Profile.vue'),
      beforeEnter(to, from, next) {
        store.dispatch('initAuth')
        if (store.getters.getToken) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../pages/Register.vue'),
      beforeEnter(to, from, next) {
        store.dispatch('initAuth')
        if (!store.getters.getToken) {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../pages/Login.vue'),
      beforeEnter(to, from, next) {
        store.dispatch('initAuth')
        if (!store.getters.getToken) {
          next()
        } else {
          next('/')
        }
      }
    }
  ],
  mode: 'history'
})
