import useGetProfile from "@/lib/composables/useGetProfile"

export default defineNuxtRouteMiddleware(async (to, from) => {
    
    const usersStore = useUsersStore()
    if(usersStore.profile) return true

    const { fetch } = useGetProfile()
    const { data } = await fetch()

    if(data) return usersStore.setProfile(data)
    else if(!data && to.path !== '/') return navigateTo('/')
})