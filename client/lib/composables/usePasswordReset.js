import {ref} from "vue"

import usersService from "../services/usersServices"

export default function usePasswordReset() {

    const loading = ref(false)

    const fetch = async(credentials) => {

        try {

            loading.value = true
            const result = await usersService('password-reset').post(credentials)
            loading.value = false
            return result

        } catch(err) {

            loading.value = false
            return err
        }
    }

    return { loading, fetch }
}