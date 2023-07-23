<script setup>
    import { watch } from "vue";

    import { showLoadingScreen } from "../utils/togglers.js";
    
    watch(showLoadingScreen, value => document.body.style.overflow = value ? 'hidden' : 'auto');
</script>
<template>
    <Teleport to="body">
        <div v-show="showLoadingScreen" class="bg-primary-dim
            fixed z-50 inset-0
            flex flex-col justify-center items-center"
        >
            <ProgressSpinner :pt="{ circle: { class: '!stroke-secondary' } }" />
        </div>
    </Teleport>
</template>