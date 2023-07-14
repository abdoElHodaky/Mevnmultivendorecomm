<script setup>
import { ref } from "vue";

import Page from "../../layouts/Page.vue";
import PageHeader from "../../components/PageHeader.vue";
import FormInputText from "../../components/FormInputText.vue";
import SolidBtn from "../../components/SolidBtn.vue";
import IconBtn from "../../components/IconBtn.vue";

const name = ref('');
const description = ref('');
const price = ref('');

const createNewProduct = () => {
    console.log(name.value, description.value, price.value);
};

</script>
<template>
    <Page>
        <div class="flex items-center mb-12">
            <IconBtn icon="pi pi-arrow-left" @click="$router.push('/')" />
            <PageHeader title="create new product" class="px-4" />
        </div>
        <form @submit.prevent="createNewProduct" action="">
            <FormInputText v-model="name" label="name" />
            <FormInputText v-model="description" label="description" />
            <FormInputText v-model="price" label="price" />
            <SolidBtn type="submit" label="create" />
        </form>
    </Page>
</template>