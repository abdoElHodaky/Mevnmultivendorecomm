import axios from "axios"

const { public: { serverUrl } } = useRuntimeConfig()

const axiosIns = axios.create({
    baseURL: `${serverUrl}/api/v1/`,
    withCredentials: true
})

class APICLIENT {

    endpoint = ''

    constructor(endpoint) {
        this.endpoint = endpoint
    }

    async getAll() {
        return (await axiosIns.get(this.endpoint))
    }

    async get() {
        return (await axiosIns.get(this.endpoint))
    }

    async post(credentials) {
        return (await axiosIns.post(this.endpoint, credentials))
    }

    async patch(credentials) {
        return (await axiosIns.patch(this.endpoint, credentials))
    }
}

export default APICLIENT