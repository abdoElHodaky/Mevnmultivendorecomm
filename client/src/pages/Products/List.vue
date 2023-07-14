<script setup>
import PageHeader from "../../components/PageHeader.vue";
import Page from "../../layouts/Page.vue";
</script>
<template>
    <Page>
        <Button label="back" icon="pi pi-arrow-left" @click="$router.push('/')"></Button>
        <PageHeader title="products list" />
    </Page>
</template>