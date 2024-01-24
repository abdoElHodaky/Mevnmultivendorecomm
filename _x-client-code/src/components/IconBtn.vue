<script setup>
    const { size } = defineProps(['size']);

    let style = null;

    switch (size) {
        case 'small':
            style = {
                root: { class: '!bg-secondary hover:opacity-80 !p-2 !shadow-btn' },
                icon: { class: '!text-2xl !font-bold' }
            }
            break;
        case 'big':
            style = {
                root: { class: '!bg-secondary hover:opacity-80 !p-8 !shadow-btn' },
                icon: { class: '!text-4xl !font-bold' }
            }
            break;
        default:
            style = {}
            break;
    }
</script>
<template>
    <Button rounded :pt="style"/>
</template>