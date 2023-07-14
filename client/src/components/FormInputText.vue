<script setup>

defineProps(['label', 'modelValue']);
defineEmits(['update:modelValue']);

</script>
<template>
    <div class="relative mt-8 mb-20">
        <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            type="text"
            id="floating_outlined" 
            class="appearance-none w-full block
            bg-transparent
            py-2.5 px-0 
            text-4xl text-white
            border-0 border-b-2 border-secondary
            focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " />
        <label
            for="floating_outlined"
            class="absolute top-3 -z-10
            text-4xl text-secondary capitalize
            duration-300 transform -translate-y-10 scale-75 origin-[0]
            peer-focus:left-0 peer-focus:text-white peer-focus:scale-75 peer-focus:-translate-y-10
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">{{ label }}</label>
    </div>
</template>