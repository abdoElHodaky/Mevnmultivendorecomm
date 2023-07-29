<script setup>
import { useForm } from "vee-validate";
import { object, string } from "yup";
import { useToast } from "primevue/usetoast";

import PageHeader from "../components/PageHeader.vue";
import FormInputText from "../components/FormInputText.vue";
import SolidBtn from "../components/SolidBtn.vue";

import useBaseFetch from "../utils/fetch.js";
import { toggleLoadingScreen } from "../utils/togglers.js";

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

const toast = useToast();
const { handleSubmit, errors } = useForm({ initialValues, validationSchema });
const fetching = useBaseFetch('users/signin', {
    beforeFetch: () => {
        toggleLoadingScreen();
    },
    afterFetch: () => {
        toggleLoadingScreen();
    },
    onFetchError: () => {
        toggleLoadingScreen();
        toast.add({ severity: 'error', summary: 'error', detail: 'error has happened', life: 3000});
    }
});

const signin = handleSubmit((values) => {
    fetching.post(values).execute();
});
</script>
<template>
    <PageHeader title="sign in" />
    <form class="py-4" @submit.prevent="signin" action="#">

        <FormInputText name="email" label="email" />
        <FormInputText name="password" label="password" />

        <SolidBtn type="submit" label="sign in" :disabled="Object.keys(errors).length > 0" />

    </form>
</template>