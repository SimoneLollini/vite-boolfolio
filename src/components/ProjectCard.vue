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
    <div class="card p-3">
        <h3>
            {{ project.title }}
        </h3>
        <img width="200" :src="store.getImagePath(project.image)" alt="">
        <div class="p-2">
            {{ project.description }}
        </div>
        <div class="p-2" v-if="project.technologies">
            <h5>Technologies:</h5>
            <span v-for="tech in project.technologies">
                #{{ tech.name }}
            </span>
        </div>
        <div class="p-2" v-if="project.type">
            <h5>Type:</h5>
            {{ project.type.name }}
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>