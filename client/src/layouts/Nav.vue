<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import IconBtn from "../components/IconBtn.vue";
import LogoutBtn from "../components/LogoutBtn.vue";

import useUserStore from "../stores/user.js";

const visible = ref(false);

const router = useRouter();
const userStore = useUserStore();

const navigateTo = (path) => {
    visible.value = false;
    router.push(path);
};
</script>
<template>
    <nav class="mb-12">

        <Sidebar :showCloseIcon="false" v-model:visible="visible">
            <div class="h-full grid items-center">

                <div class="flex flex-col">

                    <div class="mb-12 text-right">
                        <IconBtn size="small" icon="pi pi-times" @click="visible = false" />
                    </div>

                    <div v-if="userStore.authed === 'authed'">

                        <div class="mb-12">
                            <a href="#" class="text-5xl hover:text-secondary font-bold capitalize block mb-4" @click="navigateTo('/dashboard')">dashboard</a>
                        </div>

                        <div class="mb-18">
                            <LogoutBtn />
                        </div>
                    
                    </div>

                    <div v-else>

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

            </div>
        </Sidebar>

        <div id="identity" class="flex justify-between items-center">
            <IconBtn size="big" icon="pi pi-bars" @click="visible = true" />

            <div v-if="userStore.authed === 'authed'" class="bg-secondary shadow-btn flex items-center p-2 rounded-full">
                <Avatar
                    image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" 
                    class="flex align-items-center justify-content-center mr-2" 
                    size="xlarge" 
                    shape="circle" />
                <div class="p-2 text-4xl text-primary font-bold">
                    {{ userStore.user.firstName }}
                </div>
            </div>
        </div>

        
    </nav>
</template>