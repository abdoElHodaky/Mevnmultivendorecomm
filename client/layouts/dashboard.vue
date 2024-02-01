<script setup></script>

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