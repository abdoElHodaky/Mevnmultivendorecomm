const initProductsPage = () => {

    doPagination();

};

const doPagination = () => {
    
    const prevPageLink = document.querySelector('#prev-page-link');
    const nextPageLink = document.querySelector('#next-page-link');
    const numPagesList = document.querySelector('#num-pages');
    const numPagesTotal = parseInt(numPagesList.getAttribute('data-num-pages'));
    const currentPage = parseInt(numPagesList.getAttribute('data-current-page'));

    const pages = Array(numPagesTotal).fill(undefined).map( (_, index) => index + 1 );

    const createSingleLink = (pageNum) => {
        const pageLink = document.createElement('a');
        pageLink.href = `/products/?page=${pageNum}`;
        pageLink.innerText = pageNum;
        pageLink.classList.add('text-4xl');

        const li = document.createElement('li');
        li.classList.add('p-4');
        li.appendChild(pageLink);
        if(pageNum === currentPage) { 
            li.style.borderBottom = '1px solid black';
            li.style.fontWeight = 'bold';
        }
        numPagesList.appendChild(li);
    }

    const createLinksSeparator = (txt) => {
        const linksSeparator = document.createElement('span');
        linksSeparator.innerText = txt;
        linksSeparator.classList.add('text-4xl');

        const li = document.createElement('li');
        li.classList.add('p-4');
        li.appendChild(linksSeparator);
        numPagesList.appendChild(li);
    }

    // disable next/prev btns if necessary
    if(currentPage <= 1) {
        prevPageLink.style.opacity = 0.3;
        prevPageLink.addEventListener('click', (e) => e.preventDefault());
    } else if(currentPage >= pages.length) {
        nextPageLink.style.opacity = 0.3;
        nextPageLink.addEventListener('click', (e) => e.preventDefault());
    }

    // create head jumper
    const distanceBack = 5;
    const backTargetIndex = currentPage - distanceBack;
    if (backTargetIndex > 0) {
        createSingleLink(pages[backTargetIndex]);
        createLinksSeparator('...');
    }

    // create mid segment
    let midGroup = [];
    if (currentPage >= 1 && currentPage <= (numPagesTotal - 3)) {
        midGroup = pages.slice(currentPage - 1, currentPage + 2);
    } else if (currentPage >= (numPagesTotal - 2) && currentPage <= numPagesTotal) {
        midGroup = pages.slice(-3);
    }
    midGroup.forEach( (ele) => {
        createSingleLink(ele);
    });

    // create tail jumper
    const distanceForward = 4;
    const forwardTargetIndex = currentPage + distanceForward;
    if (forwardTargetIndex < numPagesTotal) {
        createLinksSeparator('...');
        createSingleLink(pages[forwardTargetIndex]);
    }

};

export default initProductsPage;