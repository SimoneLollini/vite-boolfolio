import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            component: () => import('./view/Homeview.vue'),
            path: '/',
        },
        {
            name: 'contact',
            component: () => import('./view/ContactView.vue'),
            path: '/contact',
        }, {
            name: 'single-project',
            component: () => import('./view/SingleProject.vue'),
            path: '/project/:slug',
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: import('./view/NoFoundView.vue'),
        },
    ]
})

export { router };