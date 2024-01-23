<script setup>

import { ref } from 'vue';
import Sidebar from 'primevue/sidebar';

const visible = ref(true)
</script>
<template>
    <h1 class="text-4xl">home page</h1>
    <NuxtLink to="/dashboard/">dashboard</NuxtLink>
    <Sidebar 
        :pt="{ mask: { class: [{'p-component-overlay-leave': !visible}] } }" 
        v-model:visible="visible" header="Sidebar"
    >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Sidebar>
    <button @click="visible = !visible">toggle</button>
</template>