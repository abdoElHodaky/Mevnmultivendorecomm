<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

import useProductStore from "../../stores/product.js";

import LabelIconBtn from '../LabelIconBtn.vue';

import APIClient from "../../utils/apiClient";

const { id } = defineProps(['id']);

const apiClient = new APIClient(`products/images/${id}`);

const toast = useToast();
const confirm = useConfirm();
const productStore = useProductStore();

const deleteImage = () => {

    confirm.require({
        message: 'Delete this image?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'ok',
        rejectLabel: 'cancel',
        accept: async () => {

            const res = await apiClient.delete({withLoadingScreen: true});
            toast.add({ severity: 'success', summary: 'success', detail: 'Image was deleted', life: 3000});
            productStore.productImageRemoved(res.data);
        },
        reject: () => {}
    });
};
</script>
<template>
    <p class="flex mb-12">
        <LabelIconBtn label="delete" icon="pi pi-trash" @click="deleteImage" />
    </p>
</template>