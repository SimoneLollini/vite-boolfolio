<script>
import axios from 'axios';
export default {
    name: "AppMain",
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
    <div v-if="projects"> <!-- necessario per non creare errori in conosole -->
        <div v-for="project in projects.data">
            {{ project.title }}
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>