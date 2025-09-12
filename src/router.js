import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './Pages/HomePage.vue'
import AboutPage from './Pages/AboutPage.vue'
import ViewProducts from './components/ViewProducts.vue'



const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },

  { path: '/products/:id', component: ViewProducts },

]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router