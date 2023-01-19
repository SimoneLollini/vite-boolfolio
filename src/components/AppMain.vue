<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: "AppMain",
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: null,
            base_api_url: 'http://localhost:8000',
            loading: true,
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    this.projects = response.data.results;
                    this.loading = false;
                })
                .catch(error => {
                    this.error = error.message;
                    this.loading = false;
                })
        }, getImagePath(path) {
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return 'https://picsum.photos/200/300'
        },

    }, mounted() {
        this.getProjects(this.base_api_url + '/api/projects');
    }
}
</script>

<template>
    <div class="container">
        <div class="row" v-if="projects"> <!-- necessario per non creare errori in conosole -->
            <div v-for="project in projects.data" class="col">
                <ProjectCard :project="project"></ProjectCard>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>

</style>