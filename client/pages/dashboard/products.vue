<script setup>

definePageMeta({
    layout: false,
    middleware: ['auth'],
    pageTransition: {
        name: 'rotate',
        mode: 'out-in'
    }
})

useHead({
  title: 'products',
  meta: [
    { name: 'description', content: 'products' }
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