<script setup>
import { useSwiper } from 'swiper/vue';

const swiper = useSwiper();
</script>
<template>
    slide1
    <button @click="swiper.slideNext()">Slide to the next slide</button>
</template>