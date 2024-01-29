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
            <Swiper
                :slides-per-view="1"
                :space-between="50"
                slide
            >
                <SwiperSlide><FormsSignin /></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </Sidebar>
        <Button @click="visible = !visible" icon="pi pi-bars" aria-label="Filter" size="large" icon-class="text-[24px]" rounded />
    </div>
</template>