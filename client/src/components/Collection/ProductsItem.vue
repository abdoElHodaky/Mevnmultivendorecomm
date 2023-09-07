<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { useRouter } from 'vue-router';

import useProductStore from '../../stores/product.js';

import APIClient from '../../utils/apiClient.js';

import IconBtn from '../IconBtn.vue';

const { item } = defineProps(['item']);

const confirm = useConfirm();
const toast = useToast();
const productStore = useProductStore();
const router = useRouter();

const deleteProduct = (id) => {

    const apiClient = new APIClient(`products/${id}`);

    confirm.require({
        message: 'Delete this product?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'ok',
        rejectLabel: 'cancel',
        accept: async () => {

            try {

                const res = await apiClient.delete({withLoadingScreen:true});
                toast.add({ severity: 'success', summary: 'success', detail: 'Product was deleted', life: 3000});
                productStore.productRemoved(res.data);

            } catch {

                toast.add({ severity: 'error', summary: 'error', detail: 'error has happened', life: 3000});
            }
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
        <div class="flex justify-center mt-8 sm:justify-end">
            <IconBtn size="big" icon="pi pi-trash" @click="deleteProduct(item._id)" class="right-left-margin-1" />
            <IconBtn size="big" icon="pi pi-file-edit" @click="router.push({name: 'product', query: {id: item._id}})" />
        </div>
        <Divider />
    </li>
</template>