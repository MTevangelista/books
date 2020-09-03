import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../src/pages/Home.vue'
import BookForm from '../src/pages/BookForm.vue'
import BookDetails from '../src/pages/BookDetails.vue'
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/register-book',
            name: 'BookForm',
            component: BookForm
        },
        {
            path: '/book-details',
            name: 'BookDetails',
            component: BookDetails
        },
    ]
});