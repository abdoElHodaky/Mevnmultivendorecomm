<script setup>
const { type, name, id, label } = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    name: {
        type: String,
        default: '',
    },
    id: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    }
});
const emits = defineEmits(['inputChange']);
</script>
<template>
    <p class="relative mt-12 mb-12">
        <input
            :type="type" 
            :name="name" 
            :id="id"
            class="appearance-none w-full block
            bg-transparent
            py-2.5 px-0 
            text-4xl text-white
            border-0 border-b-2 border-secondary
            focus:outline-none focus:ring-0 focus:border-white peer" 
            placeholder="" 
            @change="emits('inputChange', $event)">
        <label 
            :for="name"
            class="absolute top-3
            text-4xl text-secondary capitalize
            duration-300 transform -translate-y-10 scale-75 origin-[0]
            peer-focus:left-0 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-10
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">{{ label }}</label>
    </p>
</template>