import {
    Router,
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [
    { path: '/', component: () => import('@/components/HomePage.vue') },
    { path: '/about', component: () => import('@/components/HelloWorld.vue') }
]

const router: Router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes
})

export default router
