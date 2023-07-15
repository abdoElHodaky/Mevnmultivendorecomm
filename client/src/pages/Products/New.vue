<script setup>
import { useForm } from "vee-validate";
import { object, string } from "yup";

import Page from "../../layouts/Page.vue";
import PageHeader from "../../components/PageHeader.vue";
import FormInputText from "../../components/FormInputText.vue";
import SolidBtn from "../../components/SolidBtn.vue";
import IconBtn from "../../components/IconBtn.vue";

const initialValues = {
    name: '',
    description: '',
    price: ''
};

const validationSchema = object({
    name: string().required("* product's name is required"),
    description: string().required("* product's description is required"),
    price: string().required("* product's price is required")
});

const { handleSubmit, errors } = useForm({ initialValues, validationSchema });

const createNewProduct = handleSubmit((values) => {
    console.log(values);
});

</script>
<template>
    <Page>
        <div class="flex items-center mb-12">
            <IconBtn icon="pi pi-arrow-left" @click="$router.push('/')" />
            <PageHeader title="create new product" class="px-4" />
        </div>
        <form @submit.prevent="createNewProduct" action="#">
            <FormInputText name="name" label="name" />
            <FormInputText name="description" label="description" />
            <FormInputText name="price" label="price" />
            <SolidBtn type="submit" label="create" :disabled="Object.keys(errors).length > 0" />
        </form>
    </Page>
</template>