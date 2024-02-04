export default defineNuxtRouteMiddleware(async (to, from) => {
    
    const usersStore = useUsersStore()

    if(!usersStore.profile) {

        const { fetch } = useGetProfile()
        const { data } = await fetch()

        usersStore.setProfile(data ?? 'visitor')
    }

    if(usersStore.profile === 'visitor' &&
    to.meta.authRequired && 
    to.path !== '/') return navigateTo('/')

    return true
})