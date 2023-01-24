<script>
import { store } from "../store.js";
export default {
    name: "AppFooter",
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <footer class="text-muted py-5">
        <div class="container">
            <p class="float-end mb-1">
                <a href="#">Back to top</a>
            </p>
            <p class="mb-1">Powered by Simone &copy;</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>

</style>