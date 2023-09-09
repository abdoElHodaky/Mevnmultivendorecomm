<script setup>
import { ref } from 'vue';

import ImagesList from '../../components/Gallery/ImagesList.vue';
import ImageUploadForm from '../../components/Gallery/ImageUploadForm.vue';
import IconBtn from "../../components/IconBtn.vue";
import ImagesItemRemove from '../../components/Gallery/ImagesItemRemove.vue';
import ImagesItemDescription from '../../components/Gallery/ImagesItemDescription.vue';

const showHide = ref(false);

</script>
<template>

    <ImagesList>
        <template v-slot="{image}">
            <div class="delete-edit-ctrls">
                <ImagesItemRemove :item="image" />
                <ImagesItemDescription :item="image" />
            </div>
        </template>
    </ImagesList>

    <IconBtn class="self-end mb-10 !fixed bottom-0" size="big" icon="pi pi-plus" @click="showHide = true" />
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