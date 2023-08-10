<script setup>
import { ref } from 'vue';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

import useProductStore from '../stores/product';

import useBaseFetch from '../utils/fetch';
import { toggleLoadingScreen } from '../utils/togglers';

import IconBtn from './IconBtn.vue';

const { item } = defineProps(['item']);

const confirm = useConfirm();
const toast = useToast();
const productStore = useProductStore();

const url = ref(`products/id`);
const fetch = useBaseFetch(url, {
    beforeFetch: () => toggleLoadingScreen(),
    afterFetch: (ctx) => {
        toggleLoadingScreen();
        toast.add({ severity: 'success', summary: 'success', detail: 'Product was deleted', life: 3000});
        productStore.productRemoved(ctx.data);
    },
    onFetchError: () => {
        toggleLoadingScreen();
        toast.add({ severity: 'error', summary: 'error', detail: 'error has happened', life: 3000});
    }
});

const deleteProduct = (id) => {
    confirm.require({
        message: 'Delete this product?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'ok',
        rejectLabel: 'cancel',
        accept: () => {
            url.value = `products/${id}`;
            fetch.delete().json().execute();
        },
        reject: () => {}
    });
};
</script>
<template>
    <li class="pt-[1.25rem] px-2 hover:bg-primary-up">
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
        <div class="flex justify-end">
            <IconBtn size="big" icon="pi pi-trash" @click="deleteProduct(item._id)" />
        </div>
        <Divider />
    </li>
</template>