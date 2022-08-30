import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import KontakView from '../views/KontakView.vue'
import FasilitasView from '../views/FasilitasView.vue'
import  DaftarwisataView from '../views/DaftarwisataView'
import LoginApp from '../views/LoginApp.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/AboutView',
    name: 'AboutView',
    component: AboutView
  },
  {
    path : '/KontakView',
    name: 'KontakView',
    component: KontakView
  },
  {
    path : '/FasilitasView',
    name: 'FasilitasView',
    component: FasilitasView
  },
  {
    path : '/DaftarwisataView',
    name: 'DaftarwisataView',
    component: DaftarwisataView
  },
  {
    path : '/LoginApp',
    name: 'LoginApp',
    component: LoginApp
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
