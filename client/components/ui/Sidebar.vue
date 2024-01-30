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
            header="Account"
            position="left"
        >
            <Swiper
                :slides-per-view="1"
                :space-between="50"
                :initial-slide="1"
                :allow-touch-move="false"
            >
                <SwiperSlide><FormsForgotPassword /></SwiperSlide>
                <SwiperSlide><FormsSignin /></SwiperSlide>
                <SwiperSlide><FormsSignup /></SwiperSlide>
            </Swiper>
        </Sidebar>
        <Button @click="visible = !visible" icon="pi pi-bars" aria-label="Filter" size="large" icon-class="text-[24px]" rounded />
    </div>
</template>