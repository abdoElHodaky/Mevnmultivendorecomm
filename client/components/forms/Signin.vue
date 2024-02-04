<script setup>

import { ref } from "vue"
import { useForm } from "vee-validate"
import { object, string } from "yup"
import { useToast } from "primevue/usetoast"
import { useSwiper } from "swiper/vue"

const validationSchema = object({
  email: string().email().required(),
  password: string().required()
})

const toast = useToast()
const { fetch, loading } = useSignin()
const { errors, handleSubmit } = useForm({ validationSchema })
const swiper = useSwiper()
const usersStore = useUsersStore()

const apiError = ref(null)

const submit = handleSubmit(async (values) => {

  apiError.value = null

  const result = await fetch(values)
  if(result.status === 200) {

    toast.add({ severity: 'success', summary: `Welcome!`, detail: `${result.data.firstName}`, position: 'left' })
    usersStore.setProfile(result.data)
    navigateTo('/dashboard')
  } else if(result.response.status === 401) apiError.value = result.response.data.errMsg
})

</script>
<template>

  <div class="py-12 space-y-8">

    <form @submit.prevent="submit" action="#" class="w-full max-w-screen-sm space-y-8 px-2">
    
      <UiInputField name="email" type="text" labelTextSize="small" />
      <UiInputField name="password" type="password" labelTextSize="small" />
      <Button 
        label="sign in" 
        type="submit" 
        size="small"
        :loading="loading"
        :disabled="Object.keys(errors).length" />
    </form>

    <div class="text-[1rem] text-red-500 font-bold capitalize flex items-center justify-center" v-if="apiError">
      <i class="pi pi-exclamation-triangle px-2"></i> <pre>{{ apiError }}</pre>
    </div>

    <div :class="['text-[1rem] font-montserrat font-bold text-center space-y-2', {'opacity-60': loading}]">

      <a 
        :class="['inline-block border-b border-transparent [&:not(.cursor-default):hover]:border-black pb-2', {'cursor-default': loading}]"
        href="#" 
        @click="() => { if(loading) return; swiper.slideTo(0); }"
      >forgot password</a>

      <a 
        :class="['inline-block border-b border-transparent [&:not(.cursor-default):hover]:border-black pb-2', {'cursor-default': loading}]"
        href="#" 
        @click="() => { if(loading) return; swiper.slideTo(2); }"
      >create new account</a>
    </div>
  </div>
</template>