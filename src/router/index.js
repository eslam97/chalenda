import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signUp',
        name: 'signUp',
        component: () => import('../views/signUp.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('../views/Search.vue')
    },
    {
        path: '/property-details',
        name: 'propertyDetails',
        component: () => import('../views/propertyDetailsPage')
    },
    {
        path: '/contact_us',
        name: 'contactUs',
        component: () => import('../views/contactUs')
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: () => import('../views/checkout')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
