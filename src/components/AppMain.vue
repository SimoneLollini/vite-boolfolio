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
    <section class="py-5 text-center container position-relative">
        <h1 class="position-absolute text-light top-50 start-50">Boolfolio Simo!</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#273036" fill-opacity="0.8"
                d="M0,160L40,165.3C80,171,160,181,240,197.3C320,213,400,235,480,208C560,181,640,107,720,112C800,117,880,203,960,234.7C1040,267,1120,245,1200,213.3C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
            </path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#273036" fill-opacity="0.8"
                d="M0,160L40,165.3C80,171,160,181,240,197.3C320,213,400,235,480,208C560,181,640,107,720,112C800,117,880,203,960,234.7C1040,267,1120,245,1200,213.3C1280,181,1360,139,1400,117.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
            </path>
        </svg>
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
h1 {
    transform: translate(-50%, -50%);
}
</style>