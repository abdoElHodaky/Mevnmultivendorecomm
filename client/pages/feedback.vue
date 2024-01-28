<script setup>

definePageMeta({
  layout: false
})

useHead({
  title: 'feedback',
  meta: [
    { name: 'description', content: 'feedback page' }
  ]
})

import { ref } from "vue";
import { useForm } from "vee-validate"
import { object, string } from "yup"
import { useToast } from "primevue/usetoast"

import useSendFeedback from "@/lib/composables/useSendFeedback"

const schema = object({
  name: string().required(),
  email: string().email().required(),
  msg: string().required()
})

const toast = useToast()
const { fetch, loading } = useSendFeedback()
const { errors, handleSubmit,  } = useForm({
  validationSchema: schema,
})
const apiError = ref(null)

const submitFeedback = handleSubmit(async (values) => {

  apiError.value = null

  const result = await fetch(values)
  if(result.status === 200) toast.add({ severity: 'success', summary: 'Thanks :)', detail: 'Message Sent', position: 'left' })
  else apiError.value = 'server error'
})

</script>
<template>

  <div class="page">

    <NuxtLayout name="default">
  
      <div class="h-full flex flex-col items-center justify-center space-y-6">
  
        <form @submit.prevent="submitFeedback" action="#" class="w-full max-w-screen-sm space-y-12 px-2">
  
          <UiInputField name="name" type="text" labelTextSize="small" />
          <UiInputField name="email" type="text" labelTextSize="small" />
          <UiInputField name="msg" type="text" labelTextSize="small" />
          <Button 
            label="submit" 
            type="submit" 
            size="small"
            :loading="loading"
            :disabled="Object.keys(errors).length" />
        </form>

        <div class="text-[1rem] text-red-500 font-bold capitalize flex items-center" v-if="apiError">
          <i class="pi pi-exclamation-triangle px-2"></i> <span>{{ apiError }}</span>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>