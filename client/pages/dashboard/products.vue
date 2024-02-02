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
                <i class="pi pi-spin pi-cog" style="font-size: 2rem"></i>
                <span className="animate-bounce px-4 font-lato font-bold capitalize">working ...</span>
            </div>
        </NuxtLayout>
    </div>
</template>