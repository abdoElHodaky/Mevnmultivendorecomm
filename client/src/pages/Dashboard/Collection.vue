<script setup>
import { onBeforeMount, ref, watch } from "vue";
import { useScroll } from "@vueuse/core";

import useBaseFetch from "../../utils/fetch.js";

import useProductStore from "../../stores/product.js";

import CollectionSingleItem from "../../components/CollectionSingleItem.vue";

const productStore = useProductStore();
const { arrivedState } = useScroll(window, { offset: { bottom:200 } });

const url = ref(`products/collection?page=${productStore.page}&limit=10`);
const fetch = useBaseFetch(url, {
    afterFetch: (ctx) => productStore.productsReceived(ctx.data)
});

watch(arrivedState, arrivedState => {
    if(arrivedState.bottom && productStore.hasMore && !fetch.isFetching.value) {
        productStore.doPaginate();
        url.value = `products/collection?page=${productStore.page}&limit=${productStore.itemsPerPage}`;
        fetch.get().json().execute();
    }
});

onBeforeMount(() => {
    if(productStore.collection.length === 0) {
        fetch.get().json().execute();
    }
});
</script>
<template>
    <ul>
        <CollectionSingleItem v-for="item in productStore.collection" :item="item" :key="item._id" />
        <li v-if="productStore.hasMore" class="text-center py-4 overflow-hidden">
            <ProgressSpinner :pt="{ circle: { class: '!stroke-secondary' } }" />
        </li>
    </ul>
</template>