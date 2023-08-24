<script setup>
import { ref } from "vue";

import SolidBtn from "../../components/SolidBtn.vue";

const tempObjectURL = ref('');
const previewImg = ref(null);
const inputFile = ref(null);

const preview = ({files}) => {

    tempObjectURL.value = URL.createObjectURL(files[0]);
    previewImg.value.src = tempObjectURL.value;
};

const removeTempObject = () => {
    
    URL.revokeObjectURL(tempObjectURL.value);
    inputFile.value.clear();
    previewImg.value.src = '';
    tempObjectURL.value = '';
};
</script>
<template>
    <div>
        <form action="#" enctype="multipart/form-data">

            <div v-show="tempObjectURL.length > 0">
                <p>
                    <img class="mx-auto" ref="previewImg" src="" alt="">
                </p>
                <p class="relative mt-12 mb-12">
                    <input 
                        ref="description" 
                        type="text" 
                        name="description" 
                        id="description"
                        class="appearance-none w-full block
                        bg-transparent
                        py-2.5 px-0 
                        text-4xl text-white
                        border-0 border-b-2 border-secondary
                        focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " >
                    <label 
                        for="description"
                        class="absolute top-3 -z-10
                        text-4xl text-secondary capitalize
                        duration-300 transform -translate-y-10 scale-75 origin-[0]
                        peer-focus:left-0 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-10
                        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">description</label>
                </p>
                <SolidBtn type="button" @click="removeTempObject" label="cancel" size="small" />
                <SolidBtn class="mt-4" type="button" label="upload" size="small" />
            </div>
            <div v-show="tempObjectURL.length === 0">
                <FileUpload
                    :pt="{
                        choosebutton: { class: '!bg-secondary hover:opacity-80 w-full shadow-btn justify-center' },
                        label: { class: 'text-primary text-3xl font-bold uppercase !flex-none' },
                        uploadicon: { class: '!w-[1.5rem] !h-[1.5rem]' },
                    }"
                    chooseLabel="upload"
                    ref="inputFile" 
                    mode="basic" 
                    name="product" 
                    id="product" 
                    @select="preview" />
            </div>

        </form>
    </div>
</template>