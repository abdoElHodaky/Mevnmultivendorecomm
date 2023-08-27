import axios from "axios";

import { showLoadingScreen, toggleLoadingScreen } from "./togglers.js";

const axiosIns = axios.create({
    baseURL: 'http://localhost:8400/api/v1',
    withCredentials: true,
});

axiosIns.interceptors.request.use((config) => {

    if(config.withLoadingScreen) toggleLoadingScreen();

    return config;

}, (error) => Promise.reject(error));

axiosIns.interceptors.response.use((response) => {

    if(showLoadingScreen.value) toggleLoadingScreen();

    return response;

}, (error) => {

    if(showLoadingScreen.value) toggleLoadingScreen();

    return Promise.reject(error);
});

class APIClient {

    endpoint = ""

    constructor(endpoint) {

        this.endpoint = endpoint;
    }

    async post(data, config = {}) {

        return await axiosIns.post(this.endpoint, data, config);
    }
}

export default APIClient;