<script setup>
const { size } = defineProps(['size']);

let style = null;

switch (size) {
    case 'small':
        style = {
            root: { class: '!bg-primary !border-2 !border-solid !border-secondary hover:opacity-80 w-full' },
            label: { class: 'text-secondary text-2xl font-bold uppercase' }
        }
        break;
    case 'big':
        style = {
            root: { class: '!bg-primary !border-2 !border-solid !border-secondary hover:opacity-80 w-full' },
            label: { class: 'text-secondary text-3xl font-bold uppercase' }
        }
        break;
    default:
        style = {}
        break;
}
</script>
<template>
    <Button :pt="style" outline />
</template>