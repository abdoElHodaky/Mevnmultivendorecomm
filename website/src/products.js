const initProductsPage = () => {
    
    const numPages = document.querySelector('#num-pages');
    const numPagesTotal = parseInt(numPages.getAttribute('data-num-pages'));
    const currentPage = parseInt(numPages.getAttribute('data-current-page'));

    const pages = Array(numPagesTotal).fill(undefined).map( (_, index) => index + 1 );

    let midGroup = [];

    if (currentPage >= 1 && currentPage <= (numPagesTotal - 3)) {
        midGroup = pages.slice(currentPage - 1, currentPage + 2);
    } else if (currentPage >= (numPagesTotal - 2) && currentPage <= numPagesTotal) {
        midGroup = pages.slice(-3);
    }

    midGroup.forEach( (ele) => {
        const pageLink = document.createElement('a');
        pageLink.href = `/products/?page=${ele}`;
        pageLink.innerText = ele;
        pageLink.classList.add('text-4xl');

        const li = document.createElement('li');
        li.classList.add('p-4');
        li.appendChild(pageLink);
        numPages.appendChild(li);
    });

};

export default initProductsPage;