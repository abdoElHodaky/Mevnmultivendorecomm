<script setup>

definePageMeta({
  layout: false,
  middleware: ['auth']
})

useHead({
  title: 'welcome',
  meta: [
    { name: 'description', content: 'home page' }
  ]
})

</script>
<template>

  <div class="page">

    <NuxtLayout name="default">
  
      <div class="h-full flex items-center">
        
        <Logo />
      </div>
    </NuxtLayout>
  </div>
</template>