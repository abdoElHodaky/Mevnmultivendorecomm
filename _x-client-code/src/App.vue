<script setup>
import Nav from "./layouts/Nav.vue";
import LoadingScreen from "./components/LoadingScreen.vue";
</script>
<template>
    <div id="page" class="relative w-full h-full max-w-screen-md mx-auto grid items-center p-2">
        <div id="page-box" class="flex flex-col relative">

            <Nav />

            <router-view></router-view>

            <ConfirmDialog :draggable="false" :pt="{
                root: { class: '!bg-primary' },
                header: { class: '!bg-transparent' },
                headerTitle: { class: '!text-6xl' },
                closeButton: { class: '!h-[3rem] !w-[3rem] !bg-secondary hover:opacity-80 !p-2 !shadow-btn' },
                closeButtonIcon: { class: '!h-[1.5rem] !w-[1.5rem] !text-black' },
                content: { class: '!py-8 !bg-transparent'},
                message: { class: '!text-4xl' },
                icon: { class: 'right-left-padding-1 !text-4xl' },
                acceptButton: { 
                    root: { class: '!bg-secondary hover:opacity-80 w-full shadow-btn' },
                    label: { class: 'text-primary text-2xl font-bold uppercase' }
                },
                rejectButton: {
                    root: { class: '!bg-secondary hover:opacity-80 w-full shadow-btn' },
                    label: { class: 'text-primary text-2xl font-bold uppercase' }
                },
                footer: { class: '!bg-transparent' }
            }" />

            <LoadingScreen />

            <Toast :pt="{
                root: { class: '!w-full !top-0 !right-0 p-[1rem]' },
                message: { class: '!w-full !max-w-screen-md !mx-auto !flex !flex-col !items-end' },
                container: { class: '!bg-secondary !w-full !max-w-lg' },
                summary: { class: '!text-4xl !text-white' },
                detail: { class: '!text-2xl !text-white !font-bold' },
                icon: { class: '!h-[3rem] !w-[3rem] !text-white' },
                buttoncontainer: { class: 'left-right-padding-1' },
                button: { class: '!h-[3rem] !w-[3rem] !bg-primary !shadow-[0px_0px_10px_0.5px_#252424]' },
                buttonIcon: { class: '!text-secondary !h-[1.5rem] !w-[1.5rem]' },
            }" />

        </div>
    </div>
</template>