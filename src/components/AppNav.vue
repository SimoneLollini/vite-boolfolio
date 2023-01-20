<script>
import { store } from "../store.js";
export default {
    name: "AppNav",
    data() {
        return {
            store,
        }
    },
    methods: {

    }
}
</script>

<template>
    <nav class="nav justify-content-center  ">
        <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
        <router-link class="nav-link" :to="{ name: 'contact' }">Contact</router-link>
    </nav>
</template>

<style lang="scss" scoped>

</style>