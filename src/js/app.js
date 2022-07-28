import Header from './views//partials/header.js';
import Footer from './views/partials/footer.js';

import About from './views/pages/about.js';
import Catalog from './views/pages/catalog.js';
import PaymentAndDelivery from './views/pages/paymentAndDelivery.js';
import Reviews from './views/pages/reviews.js';
import Error404 from './views/pages/error404.js';

const Routes = {
    '/': About,
    '/catalog': Catalog,
    '/reviews': Reviews,
    '/paymentAndDelivery': PaymentAndDelivery
};

const parseCurrentURL = () => {
    const urlParts = {};

    [urlParts.page, urlParts.id, urlParts.action] = location.hash.slice(2).split('/');

    return urlParts;
};

const router = async () => {
    const headerContainer = document.getElementsByClassName('header-container')[0],
        contentContainer = document.getElementsByClassName('content-container')[0],
        header = new Header();

    const urlParts = parseCurrentURL(),
        pagePath = `/${urlParts.page || ''}`,
        page = Routes[pagePath] ? new Routes[pagePath]() : new Error404();
      
    headerContainer.innerHTML = header.render();
    header.afterRender();

    contentContainer.innerHTML = page.render();
    page.afterRender();

    window.scrollTo(0,0);
};

(async () => {
    const footerContainer = document.getElementsByClassName('footer-container')[0],
        footer = new Footer();

    footerContainer.innerHTML = footer.render();
    footer.afterRender();
})();

window.onload = router;
window.onhashchange = router;