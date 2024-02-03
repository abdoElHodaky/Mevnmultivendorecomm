<script setup>

    useHead({
        link: [
            {rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"},
            {rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
            {rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
            {rel:"manifest", href:"/site.webmanifest"},
            {name:"msapplication-TileColor", content:"#00aba9"},
            {name:"theme-color", content:"#ffffff"}
        ]
    })

</script>

<template>

    <div 
        class="max-w-screen-md mx-auto 
        h-screen 
        grid grid-rows-[min-content_1fr_min-content]"
    >
        <nav class="w-full flex items-center justify-between px-2 pt-8">
            <UiSidebar />
            <div>status / cart</div>
        </nav>

        <main>
            <slot></slot>
        </main>

        <div class="w-full">
            <Toast position="bottom-right" />
        </div>
    </div>
</template>