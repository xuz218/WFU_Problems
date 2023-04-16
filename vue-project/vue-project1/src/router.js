import { createRouter, createWebHashHistory } from 'vue-router'
import mainPage from './components/mainPage.vue'
import signUp from './components/signUp.vue'
import wholeBoard from './components/firstPage/wholeBoard.vue'
import profilePage from './components/profilePage.vue'
import groupDemo from './components/groupDemo.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: mainPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: signUp
  },
  {
    path: '/wholeBoard',
    name: 'wholeBoard',
    component: wholeBoard
  },
  {
    path: '/profile',
    name: 'profile',
    component: profilePage
  },
  {
    path: '/groupDemo',
    name: 'groupDemo',
    component: groupDemo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
