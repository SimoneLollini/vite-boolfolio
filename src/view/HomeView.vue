<script>
import AppNav from '../components/AppNav.vue';
import AppFooter from '../components/AppFooter.vue';
import AppMain from '../components/AppMain.vue';
export default {
    name: 'HomeView',
    components: {
        AppNav,
        AppFooter,
        AppMain
    }
}

</script>
<template>
    <AppNav></AppNav>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
</template>



