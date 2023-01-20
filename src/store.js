import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({

    projects: '',
    project: '',
    loading: true,
    base_api_url: 'http://127.0.0.1:8000',
    url: 'http://127.0.0.1:8000/api/projects',

    getProjects(call) {
        axios.get(call)
            .then(response => {
                this.projects = response.data.results;
                this.loading = false
            })
            .catch(error => {
                console.error(error)
                this.error = error.message
                this.loading = false
            })
    },
    getProject(call) {
        axios.get(call)
            .then(response => {
                if (response.data.success) {
                    this.project = response.data.results
                    this.loading = false
                } else {

                }
                console.log(response);
            }).catch(error => {
                console.log(error)
            })

    },
    getImagePath(path) {

        if (path) {
            return this.base_api_url + '/storage/' + path
        }
        return '/img/placeholder.png'
    },
    prevPage(url) {
        store.callAxios(url)
    },
    nextPage(url) {
        store.callAxios(url)
    }
})