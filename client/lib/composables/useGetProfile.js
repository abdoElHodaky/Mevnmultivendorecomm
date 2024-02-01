import {ref} from "vue"

import usersService from "../services/usersServices"

export default function useGetProfile() {

    const loading = ref(false)

    const fetch = async() => {

        try {

            loading.value = true
            const result = await usersService('profile').get()
            loading.value = false
            return result

        } catch(err) {

            loading.value = false
            return err
        }
    }

    return { loading, fetch }
}