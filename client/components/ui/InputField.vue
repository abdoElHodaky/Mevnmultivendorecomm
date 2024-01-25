<script setup>

import { useField } from "vee-validate"

const props = defineProps({
    name: String,
    type: String,
    labelTextSize: String
})

const { value, errorMessage } = useField( () => props.name )

</script>

<template>

<div class="input-row">
        <div 
            class="relative border-b-2 border-black focus-within:border-primary-300 mb-2"
        >
            <input 
                :type="props.type"
                v-model="value"
                placeholder=" "
                class="peer 
                relative z-20 
                block w-full 
                bg-transparent appearance-none
                text-[1.4rem] font-lato
                focus:outline-none"
            />
            <label 
                :for="props.name"
                :class="[{'text-[1rem]': props.labelTextSize === 'small'},
                {'text-[1.6rem]': props.labelTextSize === 'medium'},
                'font-lato font-bold capitalize',
                'absolute top-[.1rem] z-10',
                'transform',
                {'scale-[0.9]': props.labelTextSize === 'small'},
                {'scale-75': props.labelTextSize === 'medium'},
                {'-translate-y-6': props.labelTextSize === 'small'},
                {'-translate-y-8': props.labelTextSize === 'medium'},
                'duration-300 origin-left',
                'peer-focus:text-primary-300',
                'peer-placeholder-shown:scale-100',
                {'peer-focus:-translate-y-6 peer-focus:scale-[0.9] peer-placeholder-shown:translate-y-2': props.labelTextSize === 'small'},
                {'peer-focus:-translate-y-8 peer-focus:scale-75 peer-placeholder-shown:-translate-y-1': props.labelTextSize === 'medium'}]"
            >
                {{ props.name.replace(/([A-Z])/g, ' $1') }}
            </label>
        </div>
        <p v-if="errorMessage" className="text-[1rem] text-red-600">* {{ errorMessage }}</p>
    </div>

</template>