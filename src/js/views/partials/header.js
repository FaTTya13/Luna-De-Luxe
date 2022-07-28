import Component from '../component.js';
import Modal from './Modal.js';
import Basket from './basket.js';

const basket = new Basket();
const modal = new Modal();

class Header extends Component {
  render() {
    const page = this.urlParts.page;
    return `
        <section class="main">
        <header>
          <div class="header-content">
            <div class="header-content_logo">
              <p>Luna<span>de</span></p>
            </div>
            <nav class="header-content_nav">
              <ul class="header-content_nav-list">
                <li class="header-content_nav-list-item"><a class="${
                  !page ? "active" : ""
                }" href="#/">О нас</a></li>
                <li class="header-content_nav-list-item"><a class="${
                  page === "catalog" ? "active" : ""
                }" href="#/catalog">Каталог</a></li>
                <li class="header-content_nav-list-item"><a class="${
                  page === "reviews" ? "active" : ""
                }" href="#/reviews">Отзывы</a></li>
                <li class="header-content_nav-list-item"><a class="${
                  page === "paymentAndDelivery" ? "active" : ""
                }" href="#/paymentAndDelivery">Доставка и оплата</a></li>
              </ul>
            </nav>
            <div class="header-content_phone">
              <div class="header-content_phone-img">
                <img>     
              </div>
              <div class="header-content_phone-info">
                <p>+38 067 675 77 18</p>
                <a href="#" data-modal-target="#modal">Обратный звонок</a>
              </div>
            <div class="proposition_form modal" id="modal">
              <div class="modal-header">
                <p>Заказать обратный звонок</p>
                <button data-close-button class="close-button">&times;</button>
              </div>
              <div class="modal_form_inputs">
                <input type="text" placeholder="Имя">
                <input type="tel" placeholder="+380_ _ _ _ _ _ _ _ _">
                <button data-modal-target="#modal-tnx">Перезвоните мне</button>
              </div>
              <p>Ваши данные не будут переданы третиим лицам</p>
              </div>
              <div class="proposition_form modal" id="modal-tnx">
                <div class="modal-header">
                  <p>Спасибо за заявку!</p>
                  <button data-close-button class="close-button">&times;</button>
                </div>
                <p>Наши менеджеры совсем скоро позвонят Вам</p>
              </div>
            <div id="overlay"></div>
            <div class="header-content_basket">
              <div class="header-content_basket-img" data-modal-target="#modal-basket">
                <img>     
              </div>
              <div class="header-content_basket-info">
                <p>0 грн</p>
                <p>0 товаров</p> 
              </div>
            </div>
          </div>
        </header>
        <div class="main-content">
          <h1>Постельное белье<span> премиум класса</span></h1>
          <p>Уже более 10 лет наши покупатели довольны качеством нашей продукции</p>
          <button class="toCatalogBtn">Перейти в каталог</button>
        </div>
        <div class="goods-description-block">
          <div class="goods-description-block_items-wrapper">
            <div class="goods-description-block_item">
              <div class="goods-description-block_item-content">
                <p>Импортная</p>
                <p>ткань высшего качества</p>
                <p>01</p>
              </div>
            </div>
            <div class="goods-description-block_item">
              <div class="goods-description-block_item-content">
                <p>Стоимость</p>
                <p>без наценок магазинов</p>
                <p>02</p>
              </div>
            </div>
              <div class="goods-description-block_item">
                <div class="goods-description-block_item-content">
                  <p>Трендовый</p>
                  <p>дизайн под любой интерьер</p>
                  <p>03</p>
              </div>
            </div>
          </div>
          <a class="fb-link" href="https://www.facebook.com/" target="_blank">f</a>  
        </div>
      </section>
      <div class="basket modal" id="modal-basket">
        <button data-close-button class="close-button">&times;</button>
        <h3>корзина</h3>
        <p>Выбранные товары</p>
        <div class="basket_items">
        </div>
        <p>Личная информация</p>
        <div class="basket_contact-info">
          <input type="text" placeholder="Имя">
          <input type="tel" placeholder="+380_ _ _ _ _ _ _ _ _">
        </div>
        <button class ="basket_button" data-modal-target="#modal-tnx">Заказать</button>
        <div class="basket_total">
          <span>Итого</span>
          <span class="basket_total-price">₴ 0</span>
        </div>
        </div>
        `;
  }

  afterRender() {
    basket.checklocal();
    modal.init();
    this.toCatalog();
  }

  toCatalog() {
    const button = document.querySelector('.toCatalogBtn');
    button.addEventListener('click', () => {
      location.href = '#/catalog';
      if ((location.href = '#/catalog')) {
        window.scrollTo({ top: 1000, left: 0, behavior: 'smooth' });
      }
    });
  }
}

export default Header;