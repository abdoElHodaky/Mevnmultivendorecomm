<script setup>
import { useField } from "vee-validate";
import { toRef } from "vue";

const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    }
});
const name = toRef(props, 'name');

const { value, errorMessage, handleChange, setTouched, validate } = useField(name);

</script>
<template>
    <div class="relative mt-6 mb-12">
        <input
            :type="type"
            :id="name"
            :name="name"
            :value="value"
            @input="handleChange"
            @blur="() => {setTouched(true);validate();}"
            class="appearance-none w-full block
            bg-transparent
            py-2.5 px-0 
            text-4xl text-white
            border-0 border-b-2 border-secondary
            focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " />
        <label
            :for="name"
            class="absolute top-3 -z-10
            text-4xl text-secondary capitalize
            duration-300 transform -translate-y-10 scale-75 origin-[0]
            peer-focus:left-0 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-10
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">{{ label }}</label>
        <div class="text-3xl text-red-500 mt-2"> {{ errorMessage }} </div>
    </div>
</template>