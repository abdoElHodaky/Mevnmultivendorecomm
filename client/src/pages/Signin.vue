<script setup>
import { useForm } from "vee-validate";
import { object, string } from "yup";
import { useToast } from "primevue/usetoast";

import PageHeader from "../components/PageHeader.vue";
import FormInputText from "../components/FormInputText.vue";
import SolidBtn from "../components/SolidBtn.vue";

import APIClient from "../utils/apiClient.js";

import useUserStore from "../stores/user.js";

const apiClient = new APIClient('users/signin');

const initialValues = {
    email: '',
    password: '',
};

const validationSchema = object({
    email: string().required("* user's email is required")
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
        "user's email is not valid"),
    password: string().required("* user's password is required"),
});

const userStore = useUserStore();
const toast = useToast();
const { handleSubmit, errors } = useForm({ initialValues, validationSchema });

const signin = handleSubmit(async (values) => {

    try {

        const res = await apiClient.post(values, { withLoadingScreen:true });
        userStore.logUserIn(res.data);
        toast.add({ severity: 'success', summary: 'welcome', detail: res.data.firstName, life: 3000 });

    } catch {

        toast.add({ severity: 'error', summary: 'error', detail: 'error has happened', life: 3000 });
    }
});
</script>
<template>
    <PageHeader title="sign in" />
    <form class="py-4" @submit.prevent="signin" action="#">

        <FormInputText name="email" label="email" />
        <FormInputText type="password" name="password" label="password" />

        <SolidBtn type="submit" label="sign in" :disabled="Object.keys(errors).length > 0" size="big" />

    </form>
</template>