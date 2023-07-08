import initProductsPage from "./products.js";

const pagesloader = () => {

    if(document.body.classList.contains('products')) {
        initProductsPage();
    }
}

export default pagesloader;