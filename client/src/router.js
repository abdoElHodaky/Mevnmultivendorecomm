import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import ProductsList from "./pages/ProductsList.vue";
import Signup from "./pages/Signup.vue";
import Signin from "./pages/Signin.vue";

import Dashboard from "./pages/Dashboard/Home.vue";
import Links from "./pages/Dashboard/Links.vue";
import Product from "./pages/Dashboard/Product.vue";
import Collection from "./pages/Dashboard/Collection.vue";
import Gallery from "./pages/Dashboard/Gallery.vue";

import useUserStore from "./stores/user.js";

import APIClient from "./utils/apiClient.js";

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/signup', component: Signup, name: 'sign-up' },
    { path: '/signin', component: Signin, name: 'sign-in' },
    { path: '/products', component: ProductsList, name: 'products' },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: { mustAuth:true },
        children: [
            { path: '/dashboard/', component: Links, name: 'links' },
            { path: '/dashboard/product', component: Product, name: 'product' },
            { path: '/dashboard/collection', component: Collection, name: 'collection' },
            { path: '/dashboard/gallery', component: Gallery, name: 'gallery' }
        ]
    }
];

const router = createRouter({
    history: createWebHistory('/store'),
    routes
});

const apiClient = new APIClient('users/profile');
const fetchProfile = async (to) => {

    const userStore = useUserStore();

    if(userStore.authed === 'pending') {

        try {

            const res = await apiClient.get();
            userStore.logUserIn(res.data);
    
        } catch {
    
            userStore.logUserOut();
        }
        
    
    } else if(userStore.authed === 'unauthed' && to.meta.mustAuth) {

        return {name: 'home'};
    }
};

router.beforeEach((to) => fetchProfile(to));

export default router;