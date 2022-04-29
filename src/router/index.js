import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Play from '../views/Play.vue'
import Account from '../views/Account.vue'
import Characters from '../views/Characters.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/play-game',
      name: 'play_game',
      component: Play
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/character',
      name: 'character',
      component: Characters
    },
  ]
})

export default router
