export const useUsersStore = defineStore('users', () => {
    
    const profile = ref(null)
    
    const setProfile = (data) => {
      profile.value = data
    }
  
    return { profile, setProfile }
})