<script setup>
import Page from '../../layouts/Page.vue';
import PageHeader from '../../components/PageHeader.vue';
</script>
<template>
    <Page>
        <PageHeader title="products" />
        <Button label="new" icon="pi pi-plus" @click="$router.push('new')"></Button>
        <router-view></router-view>
    </Page>
</template>