<script setup>
import useUserStore from "../../stores/user.js";

import ImagesItemDescription from "./ImagesItemDescription.vue";
import ImagesItemRemove from "./ImagesItemRemove.vue";

const serverDomain = import.meta.env.VITE_SERVER_DOMAIN;
const { item } = defineProps(['item']);

const userStore = useUserStore();
</script>
<template>
    <li>
        <div class="mb-4 !h-[20rem] border-2 border-secondary overflow-hidden flex items-center justify-center">
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
        <ImagesItemRemove :id="item._id" />
        <ImagesItemDescription :id="item._id" :description="item.description" />
    </li>
</template>