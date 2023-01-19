<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from "../store.js";
export default {
    name: "AppMain",
    components: {
        ProjectCard,
    },
    data() {
        return {
            store,
        }
    },
    methods: {

    }, mounted() {
        store.getProjects(store.base_api_url + '/api/projects');
    }
}
</script>

<template>
    <div class="container py-5">
        <div class="row" v-if="store.projects"> <!-- necessario per non creare errori in conosole -->
            <div v-for="project in store.projects.data" class="col">
                <ProjectCard :project="project"></ProjectCard>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>

</style>