<script setup>
import { onBeforeMount, ref, watch } from "vue";
import { useFetch, useScroll } from "@vueuse/core";

import useProductStore from "../../stores/product.js";

import CollectionSingleItem from "../../components/CollectionSingleItem.vue";

const productStore = useProductStore();
const { arrivedState } = useScroll(window, { offset: { bottom:200 } });

const url = ref(`http://localhost:8400/api/v1/products/collection?page=${productStore.productsPage}&limit=10`);
const fetch = useFetch(url, {
    immediate: false,
    beforeFetch: ({options}) => { options.credentials = 'include'; return { options }; },
    afterFetch: (ctx) => productStore.productsReceived(ctx.data)
});

watch(arrivedState, arrivedState => {
    if(arrivedState.bottom && productStore.hasMoreProducts && !fetch.isFetching.value) {
        productStore.paginateProducts();
        url.value = `http://localhost:8400/api/v1/products/collection?page=${productStore.productsPage}&limit=${productStore.itemsPerPage}`;
        fetch.get().json().execute();
    }
});

onBeforeMount(() => {
    if(productStore.productsCollection.length === 0) {
        fetch.get().json().execute();
    }
});
</script>
<template>
    <ul>
        <CollectionSingleItem v-for="item in productStore.productsCollection" :item="item" :key="item._id" />
        <li v-if="productStore.hasMoreProducts" class="text-center py-4 overflow-hidden">
            <ProgressSpinner :pt="{ circle: { class: '!stroke-secondary' } }" />
        </li>
    </ul>
</template>