import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Customer from '@/components/customer/List.vue'
import Update from '@/components/customer/Update.vue'
import Create from '@/components/customer/Create.vue'
import Login from '../components/login.vue'
import Register from '../components/register.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {path: '/customer', name: 'customer', component: Customer},
        {path: '/create', name: 'create', component: Create},
        {path: '/update/:id', name: 'update',component: Update},
        {path: '/login', name: 'Login',component: Login},
        {path: '/register', name: 'register',component: Register}
    ]
})

export default router
