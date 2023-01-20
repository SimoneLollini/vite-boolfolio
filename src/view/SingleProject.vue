<script>
import AppNav from '../components/AppNav.vue';
import { store } from "../store.js";
export default {
    name: 'SingleProject',
    components: {
        AppNav,
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        const url = store.base_api_url + '/api/projects/' + this.$route.params.slug
        console.log(url)
        store.getProject(url)
    }
}
</script>

<template>

    <AppNav></AppNav>
    <div class="container">
        <h1 class="">
            {{ store.project.title }}
        </h1>
        <img v-if="store.project.image" class="img-fluid" width="300"
            :src="store.base_api_url + '/storage/' + store.project.image" :alt="store.project.title">
        <p v-if="store.project.image">{{ store.project.description }}</p>
    </div>

</template>
