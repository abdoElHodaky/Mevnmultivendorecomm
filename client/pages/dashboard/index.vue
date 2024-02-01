<script setup>

definePageMeta({
    layout: false,
    middleware: ['auth']
})

const usersStore = useUsersStore()

</script>
<template>
    <div class="page">

        <NuxtLayout name="dashboard">

            <div class="h-full flex items-center">
                <h1>dashboard-home</h1>
                <NuxtLink to="/dashboard/products">products</NuxtLink>
                <pre>{{ usersStore.profile }}</pre>
            </div>
        </NuxtLayout>
    </div>
</template>