import { ref } from "vue";
import { defineStore } from "pinia";

const useProductStore = defineStore('product', () => {

    const collection = ref([]);
    const page = ref(1);
    const itemsPerPage = 10;
    const hasMore = ref(true);

    const productsReceived = (products) => {        

        // check if there are more items
        hasMore.value = products.length >= itemsPerPage;

        collection.value = collection.value.concat(products);
    };

    const doPaginate = () => {

        page.value += 1;

        return page;
    };

    const productInserted = () => {

        collection.value = [];
        page.value = 1;
        hasMore.value = true;
    };

    const productUpdated = (product) => {

        collection.value = collection.value.map( (item) => {

            if(item._id === product._id) return product;

            return item;
        });
    };

    const productRemoved = (product) => {
        collection.value = collection.value.filter( item => item._id !== product._id);
    };

    return { 
        collection, 
        page, 
        hasMore, 
        itemsPerPage, 
        productsReceived, 
        doPaginate, 
        productInserted, 
        productUpdated, 
        productRemoved 
    };
});

export default useProductStore;