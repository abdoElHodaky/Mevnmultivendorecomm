<script setup>
import { useToast } from "primevue/usetoast";

import APIClient from '../utils/apiClient.js';

import useUserStore from '../stores/user.js';

const apiClient = new APIClient('users/logout');

const userStore = useUserStore();
const toast = useToast();

const loggingOut = async () => {

    try{

        await apiClient.get({withLoadingScreen:true});
        userStore.logUserOut();
        toast.add({ severity: 'success', summary: 'success', detail: 'logged out', life: 3000});

    } catch(err) {

        console.log(err);

        toast.add({ severity: 'error', summary: 'error', detail: 'error has happened', life: 3000});
    }

};

</script>
<template>
    <a href="#" class="text-3xl hover:text-secondary font-bold capitalize block mb-4" @click="loggingOut">logout</a>
</template>