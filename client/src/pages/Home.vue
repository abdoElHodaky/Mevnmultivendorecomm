<script setup>
import Page from "../layouts/Page.vue";
import PageHeader from "../components/PageHeader.vue";
</script>
<template>
    <Page>
        <PageHeader title="home" />
        <Button label="collection" icon="pi pi-arrows-v" @click="$router.push('/products/list')"></Button>
        <Button label="new product" icon="pi pi-plus" @click="$router.push('/products/new')"></Button>
    </Page>
</template>