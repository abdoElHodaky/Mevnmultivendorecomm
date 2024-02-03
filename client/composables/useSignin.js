import {ref} from "vue"

import usersService from "@/lib/services/usersService"

export default function useSignin() {

    const loading = ref(false)

    const fetch = async(credentials) => {

        try {

            loading.value = true
            const result = await usersService('signin').post(credentials)
            loading.value = false
            return result

        } catch(err) {

            loading.value = false
            return err
        }
    }

    return { loading, fetch }
}