<template>
        <Fieldset legend="products" :pt="{
        root: { class: '!bg-primary' },
        legend: { class: '!bg-primary !text-4xl capitalize' },
    }">
        <slot></slot>
    </Fieldset>
</template>