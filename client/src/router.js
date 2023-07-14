import { createRouter, createWebHistory } from 'vue-router';

import Home from "./pages/Home.vue";

import ProductsHome from "./pages/Products/Home.vue";
import ProductsNew from "./pages/Products/New.vue";
import ProductsList from "./pages/Products/List.vue";

const routes = [
    { path: '/', component: Home },
    {
        path: '/products',
        component: ProductsHome,
        children: [
            { path: '/products/list', component: ProductsList },
            { path: '/products/new', component: ProductsNew }
        ]
    }
];

const router = createRouter({
    history: createWebHistory('/store'),
    routes
});

export default router;