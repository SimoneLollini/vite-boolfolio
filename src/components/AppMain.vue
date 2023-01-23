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
    <section class="py-5 text-center container">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Album example</h1>
                <p class="lead text-muted">Something short and leading about the collection below—its contents, the
                    creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it
                    entirely.
                </p>
                <p>
                    <a href="#" class="btn btn-primary my-2">Main call to action</a>
                    <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                </p>
            </div>
        </div>
    </section>

    <div class="album py-5 bg-light">
        <div class="container">
            <div v-if="store.projects" class="row  row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div v-for="project in store.projects.data" class="col">
                    <ProjectCard :project="project"></ProjectCard>
                </div>
            </div>



            <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
                <ul class="pagination">
                    <li class="page-item" v-if="store.projects.prev_page_url"
                        @click="store.prevPage(store.projects.prev_page_url)">
                        <a class="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                        store.projects.current_page
                    }}</a>
                    </li>

                    <li class="page-item" v-if="store.projects.next_page_url"
                        @click="store.nextPage(store.projects.next_page_url)">
                        <a class="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>



        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>