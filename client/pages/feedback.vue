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

const schema = object({
  name: string().required(),
  email: string().email().required(),
  msg: string().required()
})

const { errors, handleSubmit } = useForm({
  validationSchema: schema,
})

const submitFeedback = handleSubmit((values) => {

  console.log(errors.value)
  console.log(values)
})

</script>
<template>

  <div class="page">

    <NuxtLayout name="default">
  
      <div class="h-full flex items-center justify-center">
  
        <form @submit.prevent="submitFeedback" action="#" class="w-full max-w-screen-sm space-y-12">
  
          <UiInputField name="name" type="text" labelTextSize="medium" />
          <UiInputField name="email" type="text" labelTextSize="medium" />
          <UiInputField name="msg" type="text" labelTextSize="medium" />
          <Button label="submit" type="submit" size="large" />
        </form>
      </div>
    </NuxtLayout>
  </div>
</template>