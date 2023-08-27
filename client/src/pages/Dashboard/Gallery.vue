<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

import SolidBtn from "../../components/SolidBtn.vue";
import FormInputFile from "../../components/FormInputFile.vue";

import APIClient from "../../utils/apiClient.js";

const uploadImage = new APIClient('/products/images');

const toast = useToast();

const tempObjectURL = ref('');
const previewImgBox = ref(null);

const imageFileInput = ref('');
const descriptionTextInput = ref('');

const preview = (e) => {

    imageFileInput.value = e.target.files[0];
    tempObjectURL.value = URL.createObjectURL(e.target.files[0]);
    previewImgBox.value.src = tempObjectURL.value;

    console.log(tempObjectURL.value.length);
};

const removeTempObject = () => {

    URL.revokeObjectURL(tempObjectURL.value);
    previewImgBox.value.src = '';
    tempObjectURL.value = '';
};

const submitForm = async () => {

    const form = new FormData();

    try {

        form.append('product', imageFileInput.value);

        await uploadImage.post(form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withLoadingScreen:true,
            onUploadProgress: (event) => {

                const percentCompleted = Math.round((event.loaded * 100) / event.total);
                console.log('onUploadProgress', percentCompleted);
            }
        })
        toast.add({ severity: 'success', summary: 'success', detail: 'Image was uploaded', life: 3000});
        removeTempObject();

    } catch {

        toast.add({ severity: 'error', summary: 'error', detail: 'error has happened', life: 3000});
    }
};
</script>
<template>
    <div>
        <form action="#" enctype="multipart/form-data" @submit.prevent="submitForm">

            <div v-show="tempObjectURL.length > 0">
                <p>
                    <img class="mx-auto" ref="previewImgBox" src="" alt="">
                </p>
                <p class="relative mt-12 mb-12">
                    <input 
                        ref="descriptionTextInput" 
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
                <SolidBtn class="mt-4" type="submit" label="ok" size="small" />
            </div>
            <div v-if="tempObjectURL.length === 0">
                <FormInputFile id="x" label="upload" @selected="preview" />
            </div>

        </form>
    </div>
</template>