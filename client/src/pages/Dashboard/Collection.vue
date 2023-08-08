<script setup>
import { onBeforeMount, ref, watch } from 'vue';
import { useScroll } from '@vueuse/core';

import useBaseFetch from '../../utils/fetch.js';
import useProductStore from '../../stores/product.js';

const url = ref('products/collection?page=1&limit=10');

const productStore = useProductStore();
const { arrivedState } = useScroll(window, { offset: { bottom:200 } });
const fetch = useBaseFetch(url, {
    afterFetch: (ctx) => productStore.productsReceived(ctx.data),
    refetch: true
});

watch(arrivedState, arrivedState => {
    if(arrivedState.bottom && productStore.hasMore && !fetch.isFetching.value) {
        url.value = `products/collection?page=${productStore.page}&limit=10`;
    }
});

onBeforeMount(() => {
    fetch.get().json().execute();
});
</script>
<template>
    <ul>
        <li v-for="item in productStore.collection" :key="item._id" class="pt-[1.25rem] px-2 hover:bg-primary-up hover:cursor-pointer">
            <div class="flex flex-col sm:flex-row items-center">
                <div class="mb-4 sm:mb-0">
                    <img :src="`/${item.thumbnail}`" alt="" class="w-[20rem] h-[20rem] sm:w-[10rem] sm:h-[10rem] right-left-margin-1" />
                </div>
                <div>
                    <h1 class="text-6xl capitalize font-bold mb-4">
                        {{ item.name }}
                    </h1>
                    <h3 class="text-3xl">
                        {{ item.description }}
                    </h3>
                </div>
            </div>
            <Divider />
        </li>
        <li v-if="productStore.hasMore" class="text-center py-4 overflow-hidden">
            <ProgressSpinner :pt="{ circle: { class: '!stroke-secondary' } }" />
        </li>
    </ul>
</template>