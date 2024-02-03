import {ref} from "vue"

import usersService from "@/lib/services/usersService"

export default function useSignout() {

    const loading = ref(false)

    const fetch = async() => {

        try {

            loading.value = true
            const result = await usersService('logout').get()
            loading.value = false
            return result

        } catch(err) {

            loading.value = false
            return err
        }
    }

    return { loading, fetch }
}