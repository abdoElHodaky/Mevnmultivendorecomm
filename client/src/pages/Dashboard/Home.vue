<script setup>
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

import useUserStore from "../../stores/user.js";
import useBaseFetch from "../../utils/fetch.js";
import { toggleLoadingScreen } from "../../utils/togglers.js";

const router = useRouter();
const userStore = useUserStore();
const fetching = useBaseFetch('users/profile', {
    beforeFetch: () => {
        toggleLoadingScreen();
    },
    afterFetch: (ctx) => {
        toggleLoadingScreen();
        userStore.logUserIn(ctx.data);
    },
    onFetchError: () => {
        toggleLoadingScreen();
        router.push({name: 'sign-in'});
    }
});

onBeforeMount(() => {
    if(userStore.authed === 'pending') fetching.get().json().execute();
    else if(userStore.authed === 'unauthed') router.push({name: 'sign-in'});
});
</script>
<template>
    <router-view></router-view>
</template>