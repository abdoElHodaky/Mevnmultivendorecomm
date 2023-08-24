<script setup>
import { useForm } from "vee-validate";
import { object, string, ref } from "yup";
import { useToast } from "primevue/usetoast";

import PageHeader from "../components/PageHeader.vue";
import FormInputText from "../components/FormInputText.vue";
import SolidBtn from "../components/SolidBtn.vue";

import useBaseFetch from "../utils/fetch.js";
import { toggleLoadingScreen } from "../utils/togglers.js";

import useUserStore from "../stores/user.js";

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: ''
};

const validationSchema = object({
    firstName: string().required("* user's first name is required"),
    lastName: string().required("* user's first name is required"),
    email: string().required("* user's email is required")
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
        "user's email is not valid"),
    password: string().required("* user's password is required"),
    confirm_password: string().oneOf([ref('password')], "* passwords don't match")
});

const userStore = useUserStore();
const toast = useToast();
const { handleSubmit, errors } = useForm({ initialValues, validationSchema });
const fetching = useBaseFetch('users/signup', {
    beforeFetch: () => {
        toggleLoadingScreen();
    },
    afterFetch: (ctx) => {
        toggleLoadingScreen();
        userStore.logUserIn(ctx.data);
        toast.add({ severity: 'success', summary: 'welcome', detail: ctx.data.firstName, life: 3000});
    },
    onFetchError: () => {
        toggleLoadingScreen();
        toast.add({ severity: 'error', summary: 'error', detail: 'error has happened', life: 3000});
    }
});

const signup = handleSubmit((values) => {
    fetching.post(values).json().execute();
});
</script>
<template>
    <PageHeader title="sign up" />
    <form class="py-4" @submit.prevent="signup" action="#">
        
        <FormInputText name="firstName" label="first name" />
        <FormInputText name="lastName" label="last name" />
        <FormInputText name="email" label="email" />
        <FormInputText name="password" label="password" />
        <FormInputText name="confirm_password" label="confirm password" />

        <SolidBtn type="submit" label="sign up" :disabled="Object.keys(errors).length > 0" size="big" />

    </form>
</template>