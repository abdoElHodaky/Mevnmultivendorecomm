import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import ProductsList from "./pages/ProductsList.vue";
import Signup from "./pages/Signup.vue";
import Signin from "./pages/Signin.vue";

import Dashboard from "./pages/Dashboard/Home.vue";
import Links from "./pages/Dashboard/Links.vue";
import NewProduct from "./pages/Dashboard/NewProduct.vue";
import Collection from "./pages/Dashboard/Collection.vue";

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/signup', component: Signup, name: 'sign-up' },
    { path: '/signin', component: Signin, name: 'sign-in' },
    { path: '/products', component: ProductsList, name: 'product-list' },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        children: [
            { path: '/dashboard/', component: Links, name: 'links' },
            { path: '/dashboard/new', component: NewProduct, name: 'add-new-product' },
            { path: '/dashboard/collection', component: Collection, name: 'collection' }
        ]
    }
];

const router = createRouter({
    history: createWebHistory('/store'),
    routes
});

export default router;