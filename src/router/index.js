import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchPage from '../views/SearchPage.vue'
import DisplayPage from '../views/DisplayPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'SearchPage',
        component: SearchPage
    },
    {
        path: '/searchPage',
        name: 'SearchPage',
        component: SearchPage
    },
    {
        path: '/displayPage',
        name: 'DisplayPage',
        component: DisplayPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router