import { createRouter, createWebHistory } from 'vue-router';

import Home from "./pages/Home.vue";
import Products from "./pages/Products/Home.vue";
import ProductsNew from "./pages/Products/New.vue";

const routes = [
    { path: '/', component: Home },
    { 
        path: '/products', 
        component: Products,
        children: [
            { path: 'new', component: ProductsNew }
        ]
    }
];

const router = createRouter({
    history: createWebHistory('/store'),
    routes
});

export default router;