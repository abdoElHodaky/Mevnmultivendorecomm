<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import IconBtn from "../components/IconBtn.vue";

const visible = ref(false);
const router = useRouter();

const navigateTo = (path) => {
    visible.value = false;
    router.push(path);
}
</script>
<template>
    <nav class="mb-12">
        <Sidebar :showCloseIcon="false" v-model:visible="visible">
            <div class="h-full grid items-center">
                <div class="flex flex-col">

                    <div class="mb-12 text-right">
                        <IconBtn size="small" icon="pi pi-times" @click="visible = false" />
                    </div>

                    <div class="mb-12">
                        <a href="#" class="text-5xl hover:text-secondary font-bold capitalize block mb-4" @click="navigateTo('/')">home</a>
                    </div>

                    <div class="mb-12">
                        <a href="#" class="text-5xl hover:text-secondary font-bold capitalize block mb-4" @click="navigateTo('/products')">products</a>
                    </div>

                    <div class="mb-12">
                        <h2 class="text-3xl font-bold capitalize block mb-6">
                            Account
                        </h2>
                        <a href="#" class="text-5xl hover:text-secondary font-bold capitalize block ml-4 mb-4" @click="navigateTo('/signin')">sign in</a>
                        <a href="#" class="text-5xl hover:text-secondary font-bold capitalize block ml-4 mb-4" @click="navigateTo('/signup')">sign up</a>
                    </div>
                    
                </div>
            </div>
        </Sidebar>
        <IconBtn size="big" icon="pi pi-bars" @click="visible = true" />
    </nav>
</template>