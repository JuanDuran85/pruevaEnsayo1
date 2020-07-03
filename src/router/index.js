import Vue from 'vue';
import VueRouter from 'vue-router';
import Artistas from '../views/Artistas.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Artistas',
    component: Artistas
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import('../views/Administracion.vue')
  },
  {
    path: '/articulos/:id',
    name: 'Articulos',
    component: () => import('../views/Articulos.vue')
  },
  {
    path: '*',
    name: '404Error',
    component: () => import('../views/404Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
