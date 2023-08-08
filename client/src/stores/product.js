import { ref } from "vue";
import { defineStore } from "pinia";

const useProductStore = defineStore('product', () => {

    const collection = ref([]);
    const page = ref(1);
    const hasMore = ref(true);

    const productsReceived = (products) => {

        hasMore.value = products.length > 0;
        if(!hasMore.value) return;

        collection.value = collection.value.concat(products);
        page.value += 1;
    };

    return { collection, page, hasMore, productsReceived };
});

export default useProductStore;