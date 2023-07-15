<script setup>
import Nav from "./layouts/Nav.vue";
</script>
<template>
    <div class="w-full h-full max-w-screen-md mx-auto grid items-center p-2">
        <div class="flex flex-col">

            <Nav />

            <router-view></router-view>

        </div>
    </div>
</template>