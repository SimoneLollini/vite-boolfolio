import { createRouter, createWebHistory } from "vue-router";
import HomeView from './view/HomeView.vue';
import ContactView from './view/ContactView.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            component: HomeView,
            path: '/',
        },
        {
            name: 'contact',
            component: ContactView,
            path: '/contact',
        }
    ]
})

export { router };