import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HalamankontakView from '../views/HalamankontakView.vue'
import FasilitasView from '../views/FasilitasView.vue'
import  DaftarwisataView from '../views/DaftarwisataView'
import LoginApp from '../views/LoginApp.vue'
import Daftarwisata  from '../components/DaftarWisata.vue'
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
    path : '/HalamankontakView',
    name: 'HalamankontakView',
    component: HalamankontakView
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
    path : '/Daftarwisata',
    name: 'Daftarwisata',
    component: Daftarwisata
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
