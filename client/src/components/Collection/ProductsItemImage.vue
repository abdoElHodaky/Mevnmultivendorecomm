<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

import ImagesList from "../Gallery/ImagesList.vue";
import SolidBtn from "../SolidBtn.vue";
import IconBtn from "../IconBtn.vue";

import APIClient from "../../utils/apiClient";

import useUserStore from "../../stores/user.js";
import useProductStore from "../../stores/product.js";

const serverDomain = import.meta.env.VITE_SERVER_DOMAIN;

const userStore = useUserStore();
const productStore = useProductStore();
const toast = useToast();

const { id, thumbnail } = defineProps(['id', 'thumbnail']);

const showHide = ref(false);
const toggleImagesList = () => {

    showHide.value = !showHide.value;
};

const imageSelected = async (image) => {

    const apiClient = new APIClient(`products/${id}`);

    const res = await apiClient.patch({thumbnail: `common/images/${encodeURIComponent(userStore.user.firstName)}/${image.name}`});
    productStore.productUpdated(res.data);
    toast.add({ severity: 'success', summary: 'success', detail: 'product image was updated', life: 3000});
    toggleImagesList();
};
</script>
<template>
    <div class="right-left-margin-1">

        <img :src="`${serverDomain}/${thumbnail}`" alt="" class="w-[25.5rem] mb-4" />
        
        <SolidBtn label="change image" size="small" @click="toggleImagesList" />
        <Dialog 
        modal 
        :visible="showHide"
        :closable="false"
        :draggable="false"
        :showHeader="false"
        :pt="{
            root: { class: '!h-full !w-full !max-h-full !bg-primary !justify-center' },
            content: { class: '!h-full !w-full !max-h-full !bg-primary !flex items-center' }
        }">
            <div class="relative w-full h-full max-w-screen-md mx-auto grid items-center p-2">
                <div class="flex flex-col">
                    <div class="flex justify-end">
                        <IconBtn class="self-end mb-8" size="small" icon="pi pi-times" @click="showHide = false" />
                    </div>
                    <ImagesList mode="select">
                        <template v-slot="{image}">
                            <div class="select-ctrls">
                                <SolidBtn label="select" size="small" @click="imageSelected(image)" />
                            </div>
                        </template>
                    </ImagesList>
                </div>
            </div>
        </Dialog>

    </div>
</template>