<script setup>

    const { public: { serverUrl } } = useRuntimeConfig()

</script>

<template>

    <div 
        class="max-w-screen-md mx-auto 
        h-screen 
        grid grid-rows-[min-content_1fr_min-content]"
    >
        <nav class="w-full flex items-center justify-between px-2 pt-8">
            <UiSidebar />
            <ul 
                class="flex items-center
                [&_a]:text-[18px] [&_a]:text-black [&_a]:font-bold [&_a]:capitalize
                [&_a]:pb-2
                [&_a.router-link-active]:border-b-2 [&_a.router-link-active]:border-black"
            >
                <li class="right-left-margin-1">
                    <NuxtLink to="/">home</NuxtLink>
                </li>
                <li class="right-left-margin-1">
                    <NuxtLink to="/feedback">feedback</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="`${serverUrl}/docs/api`">API</NuxtLink>
                </li>
            </ul>
        </nav>

        <main>
            <slot></slot>
        </main>

        <footer>
            <ul class="flex items-center justify-end pb-8 [&_li]:px-2">
                <li>
                    <Button
                        icon="pi pi-facebook" 
                        aria-label="facebook"
                        size="small"
                        icon-class="text-[24px]"
                        rounded />
                </li>
                <li>
                    <Button
                        icon="pi pi-instagram" 
                        aria-label="instagram"
                        size="small"
                        icon-class="text-[24px]"
                        rounded />
                    </li>
                <li>
                    <Button
                        icon="pi pi-youtube" 
                        aria-label="youtube"
                        size="small"
                        icon-class="text-[24px]"
                        rounded />
                </li>
            </ul>
        </footer>

        <div class="w-full">
            <Toast position="bottom-right" />
        </div>
    </div>
</template>