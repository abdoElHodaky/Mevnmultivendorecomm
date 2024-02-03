<script setup>

definePageMeta({
    layout: false,
    middleware: ['auth'],
    pageTransition: {
        name: 'fade',
        mode: 'out-in'
    }
})

useHead({
  title: 'dashboard',
  meta: [
    { name: 'description', content: 'dashboard' }
  ]
})

</script>
<template>
    <div class="page">

        <NuxtLayout name="dashboard">

            <div class="h-full flex items-center justify-center">
                
                <ComingSoon />
            </div>
        </NuxtLayout>
    </div>
</template>