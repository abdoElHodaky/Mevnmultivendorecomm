<script setup>
import { ref } from 'vue';

import GalleryImageUploader from '../../components/GalleryImageUploader.vue';
import IconBtn from '../../components/IconBtn.vue';

const showHide = ref(false);

</script>
<template>
    <h2 class="text-4xl text-center font-bold capitalize">gallery is empty</h2>
    <IconBtn class="self-end mb-8" size="big" icon="pi pi-plus" @click="showHide = true" />
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

        <div class="flex flex-col w-full max-w-screen-md mx-auto">
            <IconBtn class="self-end mb-8" size="small" icon="pi pi-times" @click="showHide = false" />
            <GalleryImageUploader />
        </div>
            
    </Dialog>
</template>