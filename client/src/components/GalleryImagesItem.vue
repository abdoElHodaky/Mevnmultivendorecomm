<script setup>
import useUserStore from "../stores/user.js";

const serverDomain = import.meta.env.VITE_SERVER_DOMAIN;
const { item } = defineProps(['item']);

const userStore = useUserStore();
</script>
<template>
    <li class="!h-[20rem] border-2 border-secondary overflow-hidden flex items-center justify-center">
        <div>
            <Image alt="Image" preview>
                <template #indicatoricon>
                    <i class="!text-6xl pi pi-eye"></i>
                </template>
                <template #image>
                    <img :src="`${serverDomain}/common/images/${encodeURIComponent(userStore.user.firstName)}/${item.name}`" />
                </template>
                <template #preview="slotProps">
                    <div class="p-4">
                        <img :src="`${serverDomain}/common/images/${encodeURIComponent(userStore.user.firstName)}/${item.name}`" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
                    </div>
                </template>
            </Image>
        </div>
    </li>
</template>