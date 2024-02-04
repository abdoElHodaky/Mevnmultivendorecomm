<script setup>

const error = ref(null)

const { fetch } = useSignout()
const toast = useToast()
const usersStore = useUsersStore()

const logoutUser = async () => {

    const result = await fetch()
    if(result.status === 200) {

        toast.add({ severity: 'success', summary: 'Bye :)', detail: 'logged out', position: 'left' })
        usersStore.setProfile('visitor')
        navigateTo('/')
    } else error.value = "server error"
}

</script>
<template>
    <div class="flex justify-end space-y-4 mt-12">
        <p>
            <Button 
                icon="pi pi-sign-out" 
                label="sign out" 
                icon-pos="right" 
                text 
                @click="logoutUser()" />
        </p>
        <p v-if="error">
            <i class="pi pi-exclamation-triangle px-2"></i> {{ error }}
        </p>
    </div>
</template>