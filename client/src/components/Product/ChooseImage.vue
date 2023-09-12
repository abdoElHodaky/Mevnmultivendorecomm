<script setup>
import {ref} from "vue";

import SolidBtn from "../SolidBtn.vue";
import OutlineBtn from "../OutlineBtn.vue";
import IconBtn from "../IconBtn.vue";
import ImagesList from "../Gallery/ImagesList.vue";

import useUserStore from "../../stores/user";

const userStore = useUserStore();

const serverDomain = import.meta.env.VITE_SERVER_DOMAIN;

const emits = defineEmits(['imageSelected']);

const showHide = ref(false);
const imgUrl = ref('common/images/225x225.svg');

const toggling = () => showHide.value = !showHide.value;

const selectImage = (image) => {

    imgUrl.value = `common/images/${encodeURIComponent(userStore.user.firstName)}/${image.name}`;
    emits('imageSelected', imgUrl.value);
    toggling();
};
</script>
<template>
    <div class="flex justify-start mt-4">

        <div class="flex flex-col items-center">
            <img :src="`${serverDomain}/${imgUrl}`" class="w-[22.5rem] mb-4" />
            <OutlineBtn label="choose image" size="small" @click="toggling" />
        </div>
        
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
                                <SolidBtn label="select" size="small" @click="selectImage(image)" />
                            </div>
                        </template>
                    </ImagesList>
                </div>
            </div>
        </Dialog>
    </div>
</template>