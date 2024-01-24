<template>
    <ClientOnly>
        <nav>
            <NuxtLink to="/">welcome</NuxtLink>
            <NuxtLink to="/dashboard/">home</NuxtLink>
            <NuxtLink to="/dashboard/products">products</NuxtLink>
        </nav>
        <slot />
    </ClientOnly>
</template>