import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/homepage.vue'  // 确保路径正确
import PostDetail from '../components/PostList.vue'  // 确保路径正确

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/post/:id',
        name: 'PostList',
        component: PostDetail
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
