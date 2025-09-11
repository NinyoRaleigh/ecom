import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './Pages/HomePage.vue'
import AboutPage from './Pages/AboutPage.vue'



const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/', component: HomePage },

]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router