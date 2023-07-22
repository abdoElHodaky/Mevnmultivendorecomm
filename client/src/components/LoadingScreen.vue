<script setup>
    import { showLoadingScreen } from "../utils/togglers.js";
</script>
<template>
    <Teleport to="body">
        <div v-show="showLoadingScreen" class="bg-primary-dim
            absolute top-0 left-0 z-50 inset-0
            flex flex-col justify-center items-center"
        >
            <ProgressSpinner :pt="{ circle: { class: '!stroke-secondary' } }" />
        </div>
    </Teleport>
</template>