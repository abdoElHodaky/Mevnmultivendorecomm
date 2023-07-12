const initProductPage = () => {

    const productMoreDetails = document.getElementById("product-more-details");
    const productMoreDetailsBtn = document.getElementById("product-more-details-btn");

    productMoreDetailsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        productMoreDetails.scrollIntoView({behavior: "smooth"});
    });
};

export default initProductPage;