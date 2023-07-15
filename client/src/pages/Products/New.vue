<script setup>
import { useFieldArray, useForm } from "vee-validate";
import { object, string, array } from "yup";

import PageHeader from "../../components/PageHeader.vue";
import FormInputText from "../../components/FormInputText.vue";
import SolidBtn from "../../components/SolidBtn.vue";
import IconBtn from "../../components/IconBtn.vue";

const initialValues = {
    name: '',
    description: '',
    features: [{text: ''}],
    price: ''
};

const validationSchema = object({
    name: string().required("* product's name is required"),
    description: string().required("* product's description is required"),
    features: array().of(
        object().shape({
            text: string().required("* feature's description is required")
        })
    ).min(1),
    price: string().required("* product's price is required")
});

const { handleSubmit, errors } = useForm({ initialValues, validationSchema });
const { remove, push, fields } = useFieldArray('features');

const createNewProduct = handleSubmit((values) => {
    window.alert(JSON.stringify(values, null, 4));
});

</script>
<template>    
    <PageHeader title="create new product" />
    <form class="py-4" @submit.prevent="createNewProduct" action="#">
        <FormInputText name="name" label="name" />
        <FormInputText name="description" label="description" />

        <div id="features-box">
            <div class="flex items-center mb-12">
                <IconBtn size="small" icon="pi pi-plus" @click="push({text: ''})" />
                <PageHeader title="Features" class="px-4 !text-[2.25rem]" />
            </div>
            <ul>
                <li class="flex items-center -mt-[2rem]" v-for="(field, idx) in fields" :key="field.key">
                    <FormInputText class="w-full mx-4" :name="`features[${idx}].text`" label="text" />
                    <IconBtn size="small" icon="pi pi-times" @click="remove(idx)" :disabled="fields.length < 2" />
                </li>
            </ul>
        </div>

        <FormInputText name="price" label="price" />
        <SolidBtn type="submit" label="create" :disabled="Object.keys(errors).length > 0" />
    </form>
</template>