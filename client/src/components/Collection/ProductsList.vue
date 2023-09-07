<script setup>
import { onBeforeMount, ref } from "vue";
import { useFetch } from "@vueuse/core";

import useProductStore from "../../stores/product.js";

import ProductsItem from "./ProductsItem.vue";
import LabelIconBtn from "../../components/LabelIconBtn.vue";

const productStore = useProductStore();

const url = ref(`${import.meta.env.VITE_API}/products/collection?page=${productStore.productsPage}&limit=10`);
const fetch = useFetch(url, {
    immediate: false,
    beforeFetch: ({options}) => { options.credentials = 'include'; return { options }; },
    afterFetch: (ctx) => productStore.productsReceived(ctx.data)
});

const loadMoreProducts = () => {

    productStore.paginateProducts();
    url.value = `${import.meta.env.VITE_API}/products/collection?page=${productStore.productsPage}&limit=${productStore.itemsPerPage}`;
    fetch.get().json().execute();
};

onBeforeMount(() => {

    if(productStore.productsCollection.length === 0) {
        fetch.get().json().execute();
    }
});
</script>
<template>
    <ul class="pb-20">
        <ProductsItem v-for="item in productStore.productsCollection" :item="item" :key="item._id" />
        <li v-if="productStore.hasMoreProducts && !fetch.isFetching.value" class="mt-20 w-full col-span-full overflow-hidden">
            <LabelIconBtn label="show more" icon="pi pi-plus" @click="loadMoreProducts" />
        </li>
    </ul>
</template>