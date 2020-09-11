import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../src/pages/Home.vue'
import BookForm from '../src/pages/BookForm.vue'
import EditBook from '../src/pages/EditBook.vue'
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
            path: '/edit-book',
            name: 'EditBook',
            component: EditBook
        },
    ]
});