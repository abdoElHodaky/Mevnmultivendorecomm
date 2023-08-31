<script setup>
import useUserStore from "../stores/user.js";

const { item } = defineProps(['item']);

const userStore = useUserStore();
</script>
<template>
    <li class="p-2 max-w-[37rem]">
        <div class="border-2 border-secondary">
            <img :src="`http://localhost:8400/common/images/${encodeURIComponent(userStore.user.firstName)}/${item.name}`" />
        </div>
    </li>
</template>