import APICLIENT from "../apiClient"

const usersService = (endpoint) => {

    return new APICLIENT(`users/${endpoint}`)
}

export default usersService