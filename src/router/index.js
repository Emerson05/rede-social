import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/Pagina Inicial',
    name: 'Pagina Inicial',
    component: HomeView
  },
  {
    path: '/Publicações',
    name: 'Publicações',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MensagenUsuario.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PerfilPage.vue')
  },

  {
    path: '/amigos',
    name: 'amigos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AmigosPage.vue')
  },

  {
    path: '/perfil/:id',
    name: 'perfilAmigo',
    component: () => import(/* webpackChunkName: "about" */ '../views/AmigosPerfil.vue')
  },



  {
    path: '/post/:id',
    name: 'user-posts',
    component: () => import(/* webpackChunkName: "about" */ '../views/PublicacaoUsuarios.vue')
  }
  
  

]

const router = new VueRouter({
  routes
})

export default router
