<script setup>
import { onBeforeMount, ref } from "vue";
import { useFetch } from "@vueuse/core";

import useProductStore from "../../stores/product.js";

import GalleryImagesItem from "./ImagesItem.vue";
import LabelIconBtn from "../LabelIconBtn.vue";

const productStore = useProductStore();

const url = ref(`${import.meta.env.VITE_API}/products/collection/images?page=${productStore.productsImagesPage}&limit=10`);
const fetch = useFetch(url, {
    immediate: false,
    beforeFetch: ({options}) => { options.credentials = 'include'; return { options }; },
    afterFetch: (ctx) => productStore.productsImagesReceived(ctx.data)
});

const loadMoreImages = () => {

    productStore.paginateProductsImages();
    url.value = `${import.meta.env.VITE_API}/products/collection/images?page=${productStore.productsImagesPage}&limit=${productStore.itemsPerPage}`;
    fetch.get().json().execute();
};

onBeforeMount(() => {
    
    if(productStore.productsImagesCollection.length === 0) {
        fetch.get().json().execute();
    }
});
</script>
<template>
    <ul class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-y-8 gap-x-4 justify-items-center pb-44">
        <GalleryImagesItem v-for="item in productStore.productsImagesCollection" :item="item" :key="item._id" />
        <li v-if="productStore.hasMoreProductsImages && !fetch.isFetching.value" class="mt-8 w-full col-span-full overflow-hidden">
            <LabelIconBtn label="show more" icon="pi pi-plus" @click="loadMoreImages" />
        </li>
    </ul>
</template>