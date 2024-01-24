<script setup>

const visible = ref(false)

import { ref } from 'vue'
import Sidebar from 'primevue/sidebar'

</script>
<template>
    <div id="sidebar-container">
        <Sidebar 
            :pt="{ mask: { class: [{'p-component-overlay-enter': visible}, {'p-component-overlay-leave': !visible}] } }" 
            v-model:visible="visible" 
            header="Sidebar"
            position="left"
        >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button @click="visible = !visible" icon="pi pi-bars" aria-label="Filter" size="large" icon-class="text-[24px]" rounded />
    </div>
</template>