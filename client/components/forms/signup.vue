<script setup>

import { ref } from "vue"
import { useForm } from "vee-validate"
import { object, string } from "yup"
import { useToast } from "primevue/usetoast"

import useSignup from "@/lib/composables/useSignup"

const validationSchema = object({
    firstName: string().required(),
    lastName: string().required(),
    email: string().email().required(),
    password: string().required()
})

const toast = useToast()
const { fetch, loading } = useSignup()
const { errors, handleSubmit } = useForm({ validationSchema })

const apiError = ref(null)

const submit = handleSubmit(async (values) => {

  apiError.value = null

  const result = await fetch(values)
  if(result.status === 200) toast.add({ severity: 'success', summary: 'Thanks :)', detail: 'Message Sent', position: 'left' })
  else if(result.response.status === 401) apiError.value = result.response.data.errMsg

})

</script>
<template>

    <div class="py-12 space-y-8">

        <form @submit.prevent="submit" action="#" class="w-full max-w-screen-sm space-y-12 px-2">
        
            <UiInputField name="firstName" type="text" labelTextSize="small" />
            <UiInputField name="lastName" type="text" labelTextSize="small" />
            <UiInputField name="email" type="text" labelTextSize="small" />
            <UiInputField name="password" type="password" labelTextSize="small" />
            <Button 
                label="sign up" 
                type="submit" 
                size="small"
                :loading="loading"
                :disabled="Object.keys(errors).length" />
        </form>
    
        <div class="text-[1rem] text-red-500 font-bold capitalize flex items-center justify-center" v-if="apiError">
            <i class="pi pi-exclamation-triangle px-2"></i> <pre>{{ apiError }}</pre>
        </div>
    </div>
</template>