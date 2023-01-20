<script>
import { store } from "../store.js";
export default {
    name: "ProjectCard",
    props: {
        project: Object,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="card shadow-sm">
        <div class="top text-center py-3">
            <img class="img-fluid" :src="store.getImagePath(project.image)" alt="">
        </div>
        <div class="card-body">
            <h3>
                {{ project.title }}
            </h3>
            <p class="card-text"> {{ project.description }}</p>
            <div class="p-2">
                <span v-for="tech in project.technologies">
                    #{{ tech.name }}
                </span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    height: 200px;
    max-width: 100%;
    border-radius: 1rem;
    object-fit: cover;
    aspect-ratio: 1/1;
}
</style>