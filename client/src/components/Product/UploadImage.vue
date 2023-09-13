<script setup>
import { ref } from 'vue';

import OutlineBtn from '../OutlineBtn.vue';
import IconBtn from '../IconBtn.vue';
import ImageUploadForm from '../Gallery/ImageUploadForm.vue';

const showHide = ref(false);

const toggling = () => showHide.value = !showHide.value;
</script>
<template>
    <OutlineBtn label="upload image" size="small" @click="toggling" />
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
            <ImageUploadForm />
        </div>
            
    </Dialog>
</template>