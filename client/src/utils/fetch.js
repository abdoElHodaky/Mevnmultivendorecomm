import { createFetch } from "@vueuse/core";

import { toggleLoadingScreen } from "./togglers.js";

const useBaseFetch = createFetch({
    baseUrl: 'http://localhost:8400/api/v1',
    options: {
        immediate: false,
        beforeFetch: () => {
            toggleLoadingScreen();
        },
        afterFetch: () => {
            toggleLoadingScreen();
        }
    }
});

export default useBaseFetch;