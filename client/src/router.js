import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import ProductsList from "./pages/ProductsList.vue";
import Signup from "./pages/Signup.vue";
import Signin from "./pages/Signin.vue";

import Dashboard from "./pages/Dashboard/Home.vue";
import NewProduct from "./pages/Dashboard/NewProduct.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/signup', component: Signup },
    { path: '/signin', component: Signin },
    { path: '/products', component: ProductsList },
    {
        path: '/dashboard',
        component: Dashboard,
        children: [
            { path: '/dashboard/new', component: NewProduct }
        ]
    }
];

const router = createRouter({
    history: createWebHistory('/store'),
    routes
});

export default router;