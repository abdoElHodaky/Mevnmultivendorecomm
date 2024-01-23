<template>
    <nav class="flex items-center justify-between max-w-screen-md mx-auto px-2 pt-8">
        <div><UiSidebar /></div>
        <ul 
            class="flex items-center
            [&_a]:text-[18px] [&_a]:font-bold [&_a]:capitalize
            [&_a]:pb-2
            [&_a:hover]:text-orange-600
            [&_a.router-link-active]:text-orange-600 [&_a.router-link-active]:border-b-4 [&_a.router-link-active]:border-orange-600"
        >
            <li class="right-left-margin-1">
                <NuxtLink to="/">home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/feedback">feedback</NuxtLink>
            </li>
        </ul>
    </nav>
    <main>
        <slot></slot>
    </main>
</template>