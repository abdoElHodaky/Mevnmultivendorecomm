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
                    <span class="text-[1.2rem] text-black font-montserrat font-bold">{{ usersStore.profile.firstName }}</span>
                </div>
            </template>

            <div class="w-full h-full" v-if="usersStore.profile">

                <ul 
                    class="flex flex-col items-center justify-center
                    mt-12
                    [&_li]:w-full
                    [&_li]:mb-2 
                    [&_li]:text-center
                    [&_a]:block [&_a]:w-full
                    [&_a]:text-[1.2rem] [&_a]:text-black [&_a]:capitalize
                    [&_a]:p-2 [&_a]:border [&_a]:border-black
                    [&_a]:pb-2
                    [&_a.router-link-active]:border-4 [&_a.router-link-active]:border-black"
                >
                    <li>
                        <NuxtLink class="font-openSans" to="/dashboard">account</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="font-openSans" to="/dashboard/products">products</NuxtLink>
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

        <Button @click="visible = !visible" icon="pi pi-bars" aria-label="Filter" size="large" icon-class="text-[28px]" rounded />
    </div>
</template>