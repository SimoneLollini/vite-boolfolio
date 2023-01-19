<script>
export default {
    name: "ProjectCard",
    props: {
        project: Object,
    }
}
</script>

<template>
    <div class="card">
        <h3>
            {{ project.title }}
        </h3>

        <div class="p-2">
            {{ project.description }}
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>