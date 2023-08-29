<script setup>
import { onBeforeMount } from "vue";
import { useFieldArray, useForm } from "vee-validate";
import { object, string, array } from "yup";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { useRoute } from "vue-router";

import PageHeader from "../../components/PageHeader.vue";
import FormInputText from "../../components/FormInputText.vue";
import SolidBtn from "../../components/SolidBtn.vue";
import IconBtn from "../../components/IconBtn.vue";

import APIClient from "../../utils/apiClient.js";

import useProductStore from "../../stores/product";

const productStore = useProductStore();

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

const initialValues = {
    name: '',
    description: '',
    features: [{text: ''}],
    price: ''
};

const { handleSubmit, errors, resetForm } = useForm({ initialValues , validationSchema });
const { remove, push, fields } = useFieldArray('features');
const toast = useToast();
const confirm = useConfirm();

// check if the required action is to update the product.
const route = useRoute();
const productId = route.query.id;
onBeforeMount(() => {

    if(productId) {

        // select this product and update the form with the new values
        const apiClient = new APIClient(`products/${productId}`);

        const req = async () => {

            const res = await apiClient.get({withLoadingScreen:true});
            resetForm({ 
                values: {
                    name: res.data.name,
                    description: res.data.description,
                    features: res.data.features,
                    price: res.data.price.$numberDecimal
                } 
            });
        }

        req();
    }
});

const createProduct = new APIClient('products');

const updateProduct = new APIClient(`products/${productId}`);

const submitting = handleSubmit((values) => {

    if(productId) {

        confirm.require({
            message: 'Update this product?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'update',
            rejectLabel: 'cancel',
            accept: async () => {

                try {

                    const res = await updateProduct.patch({
                        ...values, price: parseFloat(values.price)
                    }, {withLoadingScreen:true});
                    toast.add({ severity: 'success', summary: 'success', detail: 'Product was updated', life: 3000});
                    productStore.productUpdated(res.data);

                } catch {

                    toast.add({ severity: 'error', summary: 'error', detail: 'error has happened', life: 3000});
                }
            },
            reject: () => {}
        });
    } else {

        confirm.require({
            message: 'Create new product?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'ok',
            rejectLabel: 'cancel',
            accept: async () => {

                try {

                    await createProduct.post({
                        ...values, price: parseFloat(values.price)
                    }, {withLoadingScreen:true});
                    toast.add({ severity: 'success', summary: 'success', detail: 'New Product was created', life: 3000});
                    productStore.productInserted();

                } catch {

                    toast.add({ severity: 'error', summary: 'error', detail: 'error has happened', life: 3000});
                }
            },
            reject: () => {}
        });
    }
});

</script>
<template>
    <PageHeader :title="productId ? 'edit' : 'create new product'" />
    <form class="py-4" @submit.prevent="submitting" action="#">
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
        <SolidBtn type="submit" :label="productId ? 'update':'create'" :disabled="Object.keys(errors).length > 0" size="big" />
    </form>
</template>