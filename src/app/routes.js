import VueRouter from 'vue-router'
import Home from '.components/Home.vue'

const router = new VueRouter({
    Routes : [
        {
            name : 'home'
            path : '/',
            component : Home
        }
    ]
})
