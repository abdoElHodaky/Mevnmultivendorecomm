<script setup>
import Nav from "./layouts/Nav.vue";
</script>
<template>
    <div id="page" class="w-full h-full max-w-screen-md mx-auto grid items-center p-2">
        <div id="page-box" class="flex flex-col">

            <Nav />

            <router-view></router-view>

            <ConfirmDialog :draggable="false" :pt="{
                root: { class: '!bg-white' },
                header: { class: '!bg-none' },
                headerTitle: { class: '!text-6xl' },
                closeButton: { class: '!h-[3rem] !w-[3rem] !bg-secondary hover:opacity-80 !p-2 !shadow-btn' },
                closeButtonIcon: { class: '!h-[1.5rem] !w-[1.5rem] !text-black' },
                content: { class: '!py-8'},
                message: { class: '!text-4xl' },
                icon: { class: '!text-4xl' },
                acceptButton: { 
                    root: { class: '!bg-secondary hover:opacity-80 w-full shadow-btn' },
                    label: { class: 'text-primary text-2xl font-bold uppercase' }
                },
                rejectButton: {
                    root: { class: '!bg-secondary hover:opacity-80 w-full shadow-btn' },
                    label: { class: 'text-primary text-2xl font-bold uppercase' }
                }
            }">
            </ConfirmDialog>

        </div>
    </div>
</template>