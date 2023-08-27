<script setup>

import { ref } from 'vue';

import LabelIconBtn from "./LabelIconBtn.vue";

const { id, label } = defineProps(['id', 'label']);
const emits = defineEmits(['selected']);

const fileInput = ref(null);

</script>
<template>
    <LabelIconBtn :label="label" icon="pi pi-upload" @click="() => fileInput.click()"></LabelIconBtn>
    <input ref="fileInput" type="file" :id="id" :name="id" class="hidden" @input="emits('selected', $event)">
</template>