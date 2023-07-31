import { createFetch } from "@vueuse/core";

const useBaseFetch = createFetch({
    baseUrl: 'http://localhost:8400/api/v1',
    combination: "overwrite",
    options: { immediate: false },
    fetchOptions: {
        credentials: 'include'
    }
});

export default useBaseFetch;