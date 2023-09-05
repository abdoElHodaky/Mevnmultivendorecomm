<script setup>
import { onBeforeMount, ref, watch } from "vue";
import { useFetch, useScroll } from "@vueuse/core";

import useProductStore from "../../stores/product.js";

import GalleryImagesItem from "./ImagesItem.vue";

const productStore = useProductStore();
const { arrivedState } = useScroll(window, { offset: { bottom:200 } });

const url = ref(`${import.meta.env.VITE_API}/products/collection/images?page=${productStore.productsImagesPage}&limit=10`);
const fetch = useFetch(url, {
    immediate: false,
    beforeFetch: ({options}) => { options.credentials = 'include'; return { options }; },
    afterFetch: (ctx) => productStore.productsImagesReceived(ctx.data)
});

watch(arrivedState, arrivedState => {
    if(arrivedState.bottom && productStore.hasMoreProductsImages && !fetch.isFetching.value) {
        productStore.paginateProductsImages();
        url.value = `${import.meta.env.VITE_API}/products/collection/images?page=${productStore.productsImagesPage}&limit=${productStore.itemsPerPage}`;
        fetch.get().json().execute();
    }
});

onBeforeMount(() => {
    if(productStore.productsImagesCollection.length === 0) {
        fetch.get().json().execute();
    }
});
</script>
<template>
    <ul class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-y-8 gap-x-4 justify-items-center pb-44">
        <GalleryImagesItem v-for="item in productStore.productsImagesCollection" :item="item" :key="item._id" />
        <li v-if="productStore.hasMoreProductsImages" class="text-center py-4 overflow-hidden col-span-full">
            <ProgressSpinner :pt="{ circle: { class: '!stroke-secondary' } }" />
        </li>
    </ul>
</template>