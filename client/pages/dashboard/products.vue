<script setup>

definePageMeta({
    layout: false,
    middleware: ['auth']
})

</script>
<template>
    <div class="page">

        <NuxtLayout name="dashboard">

            <div class="h-full flex items-center">
                <h1>products</h1>
                <NuxtLink to="/dashboard">dashboard</NuxtLink>
            </div>
        </NuxtLayout>
    </div>
</template>