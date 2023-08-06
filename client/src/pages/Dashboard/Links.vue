<script setup>
import { useRouter } from 'vue-router';

import FieldSetBlock from '../../components/FieldSetBlock.vue';
import LabelIconBtn from '../../components/LabelIconBtn.vue';

const router = useRouter();
</script>

<template>
<FieldSetBlock>
    <LabelIconBtn label="New" icon="pi pi-plus" @click="router.push({name: 'add-new-product'})"></LabelIconBtn>
</FieldSetBlock>
</template>

<style lang="scss"></style>