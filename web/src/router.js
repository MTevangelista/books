import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../src/pages/Home.vue'
import BookForm from '../src/components/BookForm.vue'

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
    ]
});