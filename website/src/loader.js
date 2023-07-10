import initProductsPage from "./products.js";
import initProductPage from "./product.js";

const pagesloader = () => {

    if(document.body.classList.contains('products')) initProductsPage();
    if(document.body.classList.contains('product')) initProductPage();
};

export default pagesloader;