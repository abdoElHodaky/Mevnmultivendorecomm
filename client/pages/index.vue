<script setup>

definePageMeta({
  layout: false,
})

useHead({
  title: 'welcome',
  meta: [
    { name: 'description', content: 'home page' }
  ]
})

</script>
<template>

  <NuxtLayout name="default">

    <div class="h-full flex items-center">
      
      <Logo />
    </div>
  </NuxtLayout>
</template>