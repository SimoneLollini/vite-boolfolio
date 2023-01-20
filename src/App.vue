<script>
import AppMain from './components/AppMain.vue'

import { RouterView, RouterLink } from "vue-router";


export default {
    name: 'App',
    components: {
        AppMain,
        RouterView,
        RouterLink
    },
    data() {
        return {

        }
    }
}

</script>

<template>
    <RouterView></RouterView>
</template>
<style lang="scss">
@use './styles/general.scss';
</style>
