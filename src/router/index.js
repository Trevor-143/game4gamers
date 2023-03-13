import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GiveAways from '../views/GiveAways.vue'
import PCGames from '../views/PCGames.vue'
import News from '../views/News.vue'
import BrowserGames from '../views/BrowserGames.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/BrowserGames',
    name: 'BrowserGames',
    component: BrowserGames
  },
  {
    path: '/PCGames',
    name: 'PCGames',
    component: PCGames
  },
  {
    path: '/GiveAways',
    name: 'GiveAways',
    component: GiveAways
  },
  {
    path: '/News',
    name: 'News',
    component: News
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
