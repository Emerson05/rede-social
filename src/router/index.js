import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from "@/config/firebase";



Vue.use(VueRouter)

const routes = [
  {
    path: '/inicio',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
  },

  {
    path: '/register',
    name: 'registerUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterPage.vue')
  },



  {
    path: '/Mensagens',
    name: 'Mensagens',
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MensagenUsuario.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PerfilPage.vue')
  },

  {
    path: '/amigos',
    name: 'amigos',
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AmigosPage.vue')
  },

  {
    path: '/perfil/:id',
    name: 'perfilAmigo',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/AmigosPerfil.vue')
  },



  {
    path: '/post/:id',
    name: 'user-posts',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/PublicacaoUsuarios.vue')
  }





]

const router = new VueRouter({
  routes
})




router.beforeEach((to, from, next) => {

  if (to.matched.some((record) => record.meta.requiresAuth)) {

    if (!auth.currentUser) {
      next({ name: 'login' });
    } else {

      next();
    }
  } else {

    next();
  }
});

export default router;

