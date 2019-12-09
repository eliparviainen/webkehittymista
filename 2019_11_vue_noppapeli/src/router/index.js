import Vue from 'vue'
import VueRouter from 'vue-router'
import StartGame from '../views/StartGame.vue'
import PlayGame from '../views/PlayGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartGame',
    component: StartGame
  },
    {
    path: '/play',
    name: 'PlayGame',
    component: PlayGame
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
