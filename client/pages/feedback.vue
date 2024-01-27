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

import { useForm } from "vee-validate"
import { object, string } from "yup"

import useSendFeedback from "@/lib/composables/useSendFeedback"

const schema = object({
  name: string().required(),
  email: string().email().required(),
  msg: string().required()
})

const { fetch, loading } = useSendFeedback()
const { errors, handleSubmit,  } = useForm({
  validationSchema: schema,
})

const submitFeedback = handleSubmit(async (values) => {

  const result = await fetch(values)
  console.log(result)
})

</script>
<template>

  <div class="page">

    <NuxtLayout name="default">
  
      <div class="h-full flex items-center justify-center">
  
        <form @submit.prevent="submitFeedback" action="#" class="w-full max-w-screen-sm space-y-12">
  
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
      </div>
    </NuxtLayout>
  </div>
</template>