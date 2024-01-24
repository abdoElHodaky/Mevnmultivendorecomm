<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useWindowScroll } from "@vueuse/core";

import IconBtn from "../components/IconBtn.vue";
import LogoutBtn from "../components/LogoutBtn.vue";

import useUserStore from "../stores/user.js";

const { y } = useWindowScroll();

const visible = ref(false);
const nav = ref(null);

const router = useRouter();
const userStore = useUserStore();

watch(y, (value)=> {

    if(value > 0) nav.value.classList.add('scrolled'); 
    else nav.value.classList.remove('scrolled');
});
</script>
<style lang="scss">
    nav {
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &.scrolled {
            background-color: rgba(0, 0, 0, 0.5);
            padding: 1rem;
            border-radius: 25px;
            transform: scale(0.75);
        }
    }
    a.router-link-active {
        @apply text-secondary;
    }
</style>
<template>
    <nav ref="nav" class="w-full mb-12 sticky top-0 z-10">

        <Sidebar :showCloseIcon="false" v-model:visible="visible">
            <div class="h-full grid items-center">

                <div class="flex flex-col">

                    <div class="mb-12 text-right">
                        <IconBtn size="small" icon="pi pi-times" @click="visible = false" />
                    </div>

                    <div v-if="userStore.authed === 'authed'">

                        <div class="mb-4">
                            <router-link
                                @click="visible = false"
                                :to="{name: 'links'}"
                                class="text-5xl hover:text-secondary font-bold capitalize block mb-4">dashboard</router-link>
                        </div>

                        <div class="mb-4">
                            <router-link 
                                @click="visible = false"
                                :to="{name: 'products'}"
                                class="text-5xl hover:text-secondary font-bold capitalize block mb-4">products</router-link>
                        </div>

                        <div class="mt-16">
                            <LogoutBtn />
                        </div>
                    
                    </div>

                    <div v-else>

                        <div class="mb-12">
                            <router-link
                                @click="visible = false"
                                :to="{name: 'home'}"
                                class="text-5xl hover:text-secondary font-bold capitalize block mb-4">home</router-link>
                        </div>

                        <div class="mb-12">
                            <router-link
                                @click="visible = false"
                                :to="{name: 'products'}"
                                class="text-5xl hover:text-secondary font-bold capitalize block mb-4">products</router-link>
                        </div>

                        <div class="mb-12">
                            <h2 class="text-3xl font-bold capitalize block mb-6">
                                Account
                            </h2>
                            <router-link
                                @click="visible = false"
                                :to="{name: 'sign-in'}"
                                class="text-5xl hover:text-secondary font-bold capitalize block mb-4">sign in</router-link>
                            <router-link
                                @click="visible = false"
                                :to="{name: 'sign-up'}"
                                class="text-5xl hover:text-secondary font-bold capitalize block mb-4">sign up</router-link>
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