import { createFetch } from "@vueuse/core";

const useBaseFetch = createFetch({
    baseUrl: 'http://localhost:8400/api/v1',
    options: {
        immediate: false
    }
});

export default useBaseFetch;