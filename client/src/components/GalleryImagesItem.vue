<script setup>
import useUserStore from "../stores/user.js";

const serverDomain = import.meta.env.VITE_SERVER_DOMAIN;
const { item } = defineProps(['item']);

const userStore = useUserStore();
</script>
<template>
    <li class="!h-[20rem] border-2 border-secondary overflow-hidden flex items-center justify-center">
        <div>
            <img :src="`${serverDomain}/common/images/${encodeURIComponent(userStore.user.firstName)}/${item.name}`" />
        </div>
    </li>
</template>