import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'
import VueMaterial from 'vue-material'

// components
import Home from './components/Home.vue'
import AddProduct from './components/AddProduct.vue'
import ShowProducts from './components/ShowProducts.vue'
import EditProduct from './components/EditProduct.vue'


Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(VueMaterial)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'addProduct',
        path: '/add',
        component: AddProduct
    },
    {
        name: 'showProducts',
        path: '/products',
        component: ShowProducts
    },
    {
        name: 'editProduct',
        path: '/edit',
        component: EditProduct
    }
]

const router = new VueRouter({mode: 'history', routes: routes})

const vm = new Vue(Vue.util.extend({ router }, App)).$mount('#app')
