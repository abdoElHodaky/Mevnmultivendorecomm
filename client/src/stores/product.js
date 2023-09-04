import { ref } from "vue";
import { defineStore } from "pinia";

const useProductStore = defineStore('product', () => {

    const itemsPerPage = 10;

    const productsCollection = ref([]);
    const productsPage = ref(1);
    const hasMoreProducts = ref(true);

    const productsImagesCollection = ref([]);
    const productsImagesPage = ref(1);
    const hasMoreProductsImages = ref(true);

    const productsImagesReceived = (images) => {        

        // check if there are more items
        hasMoreProductsImages.value = images.length >= itemsPerPage;

        productsImagesCollection.value = productsImagesCollection.value.concat(images);
    };

    const productsReceived = (products) => {        

        // check if there are more items
        hasMoreProducts.value = products.length >= itemsPerPage;

        productsCollection.value = productsCollection.value.concat(products);
    };

    const paginateProductsImages = () => {

        productsImagesPage.value += 1;

        return productsImagesPage;
    };

    const paginateProducts = () => {

        productsPage.value += 1;

        return productsPage;
    };

    const productImageInserted = (newImage) => {

        productsImagesCollection.value = [newImage, ...productsImagesCollection.value];
    };

    const productInserted = (newProduct) => {

        productsCollection.value = [newProduct, ...productsCollection.value];
    };

    const productUpdated = (product) => {

        productsCollection.value = productsCollection.value.map( (item) => {

            if(item._id === product._id) return product;

            return item;
        });
    };

    const productImageUpdated = (image) => {

        productsImagesCollection.value = productsImagesCollection.value.map( (item) => {

            if(item._id === image._id) return image;

            return item;
        });
    };

    const productRemoved = (product) => {
        productsCollection.value = productsCollection.value.filter( item => item._id !== product._id);
    };

    return {
        productsImagesCollection,
        productsImagesPage,
        hasMoreProductsImages,
        productsCollection,
        productsPage, 
        hasMoreProducts, 
        itemsPerPage,
        productImageUpdated,
        productsImagesReceived,
        paginateProductsImages,
        productImageInserted,
        productsReceived, 
        paginateProducts,
        productInserted,
        productUpdated, 
        productRemoved 
    };
});

export default useProductStore;