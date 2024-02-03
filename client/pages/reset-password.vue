<script setup>

definePageMeta({
  layout: false,
  middleware: ['auth']
})

useHead({
  title: 'reset password',
  meta: [
    { name: 'description', content: 'reset password page' }
  ]
})

import { ref as refVue } from "vue"
import { useForm } from "vee-validate"
import { object, string, ref } from "yup"
import { useToast } from "primevue/usetoast"

const { query: {email, exp, token} } = useRoute()

const validationSchema = object({
    newPassword: string().required(),
    confirmPassword: string().required().oneOf([ref('newPassword'), null], 'passwords must match')
})

const toast = useToast()
const { fetch, loading } = usePasswordReset()
const { errors, handleSubmit } = useForm({ validationSchema })

const apiError = refVue(null)

const submit = handleSubmit(async (values) => {

  apiError.value = null

  const result = await fetch({
    newPassword: values.newPassword,
    email,
    expTime:exp,
    hashedToken:token
  })
  if(result.status === 200) toast.add({ severity: 'success', summary: 'Done :)', detail: 'Use the new password and sign in', position: 'left' })
  else if(result.response.status === 400) apiError.value = result.response.data
})

</script>
<template>

  <div class="page">

    <NuxtLayout name="default">
  
      <div class="h-full flex flex-col items-center justify-center space-y-6">
  
        <form @submit.prevent="submit" action="#" class="w-full max-w-screen-sm space-y-12 px-2">
  
          <UiInputField name="newPassword" type="password" labelTextSize="small" />
          <UiInputField name="confirmPassword" type="password" labelTextSize="small" />
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