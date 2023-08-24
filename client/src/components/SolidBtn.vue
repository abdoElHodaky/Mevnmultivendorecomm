<script setup>
const { size } = defineProps(['size']);

let style = null;

switch (size) {
    case 'small':
        style = {
            root: { class: '!bg-secondary hover:opacity-80 w-full shadow-btn' },
            label: { class: 'text-primary text-3xl font-bold uppercase' }
        }
        break;
    case 'big':
        style = {
            root: { class: '!bg-secondary hover:opacity-80 w-full shadow-btn' },
            label: { class: 'text-primary text-5xl font-bold uppercase' }
        }
        break;
    default:
        style = {}
        break;
}
</script>
<template>
    <Button :pt="style" />
</template>