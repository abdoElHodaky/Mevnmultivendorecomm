<script setup>
import { toggleLoadingScreen } from '../utils/togglers.js';
import useBaseFetch from '../utils/fetch.js';
import useUserStore from '../stores/user.js';

const userStore = useUserStore();
const fetching = useBaseFetch('users/logout', {
    beforeFetch: ()=>{
        toggleLoadingScreen
    },
    afterFetch: () => {
        userStore.logUserOut();
    }
});

const loggingOut = () => {
    fetching.get().execute();
}

</script>
<template>
    <a href="#" class="text-3xl hover:text-secondary font-bold capitalize block mb-4" @click="loggingOut">logout</a>
</template>