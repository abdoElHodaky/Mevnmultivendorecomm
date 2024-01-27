import {ref} from "vue"

import usersService from "../services/usersServices"

export default function useSendFeedback() {

    const loading = ref(false)

    const fetch = async(credentials) => {

        try {

            loading.value = true
            const result = await usersService('feedback').post(credentials)
            loading.value = false
            return result

        } catch(err) {

            loading.value = false
            return err
        }
    }

    return { loading, fetch }
}