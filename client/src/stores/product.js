import { ref } from "vue";
import { defineStore } from "pinia";

const useProductStore = defineStore('product', () => {

    const collection = ref([]);
    const page = ref(1);
    const hasMore = ref(true);

    const productsReceived = (products) => {        

        // escape in case no more items
        hasMore.value = products.length > 0;
        if(!hasMore.value) return;

        collection.value = collection.value.concat(products);
    };

    const doPaginate = () => {
        page.value += 1;
    };

    return { collection, page, hasMore, productsReceived, doPaginate };
});

export default useProductStore;