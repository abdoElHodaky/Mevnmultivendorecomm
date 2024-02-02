<script setup>

const visible = ref(false)

const usersStore = useUsersStore()

</script>
<template>

    <div id="sidebar-container">
        
        <Sidebar 
            :pt="{ mask: { class: [{'p-component-overlay-enter': visible}, {'p-component-overlay-leave': !visible}] } }"
            v-model:visible="visible"
            header="Account"
            position="left"
        >

            <template #header>

                <div v-if="usersStore.profile" class="flex items-center gap-2">
                    <Avatar 
                        :label="usersStore.profile.firstName[0].toUpperCase()"
                        size="large"
                        shape="circle" />
                    <span class="text-[1.2rem] text-black font-bold">{{ usersStore.profile.firstName }}</span>
                </div>
            </template>

            <div class="w-full h-full" v-if="usersStore.profile">

                <ul 
                    class="flex flex-col items-center justify-center
                    mt-12
                    [&_li]:mb-6
                    [&_a]:text-[1.4rem] [&_a]:text-black [&_a]:font-bold [&_a]:capitalize
                    [&_a]:pb-2
                    [&_a.router-link-active]:border-b-4 [&_a.router-link-active]:border-black"
                >
                    <li>
                        <NuxtLink to="/dashboard">account</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/dashboard/products">products</NuxtLink>
                    </li>
                </ul>

                <LogoutBtn />
            </div>

            <Swiper v-else
                :slides-per-view="1"
                :space-between="50"
                :initial-slide="1"
                :allow-touch-move="false"
            >
                <SwiperSlide><FormsForgotPassword /></SwiperSlide>
                <SwiperSlide><FormsSignin /></SwiperSlide>
                <SwiperSlide><FormsSignup /></SwiperSlide>
            </Swiper>
        </Sidebar>

        <Button @click="visible = !visible" icon="pi pi-bars" aria-label="Filter" size="large" icon-class="text-[24px]" rounded />
    </div>
</template>