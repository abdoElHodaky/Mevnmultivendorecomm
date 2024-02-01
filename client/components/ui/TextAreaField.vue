<script setup>

import { useField } from "vee-validate"

const props = defineProps({
    name: String,
    labelTextSize: String
})

const { value, errorMessage } = useField( () => props.name )

</script>

<template>

<div class="input-row">
        <div 
            class="w-full flex flex-col-reverse"
        >
            <textarea
                class="peer
                text-[1.4rem] font-lato 
                bg-primary 
                p-2 border-2 border-black
                focus:!border-primary-300"
                :rows="2"
                v-model="value"
            ></textarea>
            <label
                :for="props.name"
                :class="[{'text-[1rem]': labelTextSize === 'small'},
                {'text-[1.6rem]': labelTextSize === 'medium'},
                'font-lato font-bold capitalize',
                'transition-all duration-300',
                'peer-focus:text-primary-300']"
            >
                {{ props.name.replace(/([A-Z])/g, ' $1') }}
            </label>
        </div>
        <p v-if="errorMessage" class="text-[1rem] text-red-600">* {{ errorMessage }}</p>
    </div>

</template>