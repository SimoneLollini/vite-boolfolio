<script>
import { RouterView, RouterLink } from "vue-router";


export default {
    name: 'App',
    components: {
        RouterView,
        RouterLink,
    }
}

</script>

<template>
    <router-view></router-view>
</template>
<style lang="scss">
@use './styles/general.scss';
</style>
