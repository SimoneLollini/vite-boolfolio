import { createRouter, createWebHistory } from "vue-router";
import HomeView from './view/HomeView.vue';
import ContactView from './view/ContactView.vue';
import SingleProject from './view/SingleProject.vue';
import NotFoundView from './view/NoFoundView.vue'
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