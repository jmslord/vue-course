import {createRouter,createWebHistory} from 'vue-router'
import DefHome from '../views/DefHome'
import DefAbout from '../views/DefAbout'

const routes = [
    {
        path: '/',
        name: 'DefHome',
        component: DefHome
    },
    {
        path: '/about',
        name: 'About',
        component: DefAbout
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
  

export default router