import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'home',
            component: () => import('../view/Home.vue'),
            path: '/',
        },
        {
            name: 'contact',
            component: () => import('../view/Contact.vue'),
            path: '/contact',
        }
    ]
})

export default router;