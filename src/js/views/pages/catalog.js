import Component from '../component.js';
import Modal from '../partials/Modal.js';
import Basket from '../partials/basket.js';
import Carousel from '../partials/carousel.js';

const carousel = new Carousel();
const basket = new Basket();
const modal = new Modal();

class Catalog extends Component {
  render() {
    return `                
      <section class="catalog">
        <div class="catalog_header">
          <h1>Каталог</h1>
          <div class="catalog_header_wrapper">
            <div class="catalog_header_wrapper_factory">
              <p>в г. Хмельницкий</p>
              <p>Полноценное швейное производство с 2009 года</p>
            </div>
            <div class="catalog_header_wrapper_filters">
              <select>
                <option>Только в наличии</option>
              </select>
              <select>
                <option>По популярности</option>
              </select>
            </div>
          </div>
        </div>
        <div class="catalog_items">
          <div class="modal advance" id="modal">
            <span class="modal-title">Оформить заявку</span>
            <button data-close-button class="close-button">×</button>
            <div class="modal-purchase-item">
            </div>
            <div class="modalPurchaseItem_contact-info">
              <input type="text" placeholder="Имя">
              <input type="tel" placeholder="+380_ _ _ _ _ _ _ _ _">
            </div>
            <button data-modal-target="#modal-tnx" class="modalPurchaseItem_button">Заказать</button>
          </div>
          <div class="proposition_form modal" id="modal-tnx">
            <div class="modal-header">
              <p>Спасибо за заявку!</p>
              <button data-close-button class="close-button">&times;</button>
            </div>
            <p>Наши менеджеры совсем скоро позвонят Вам</p>
          </div>
          <div class="catalog_item">
            <div class="catalog_item-header">
              <span class="item-header_title">Земфира</span>
              <div class="item-header_remnants">
                <span>13</span>
                <span>комплектов осталось</span>
              </div>
            </div>
            <div class="item-content">
              <div class="item-content_photo">
                <div>
                  <span>Премиум</span>
                </div>
                <div>
                  <span>-32%</span>
                </div>
              </div>
              <img class="shop-item-image" src="/src/assets/images/bundle.png" alt="bundle-photo">
            </div>
            <div class="item_constructor">
              <div class="bed-parametrs">
                <p>Выберите размер постели</p>
                <select>
                  <option selected disabled>Не выбрано</option>
                  <option>Полуторный</option>
                  <option>Двуспальный</option>
                  <option>Евростандарт</option>
                  <option>Семейный</option>
                </select>
              </div>
              <div class="pillowcase-parametrs">
                <p>Выберите размер наволочек (2 шт)</p>
                <select>
                  <option selected disabled>Не выбрано</option>
                  <option>70X70 см</option>
                  <option>50X70 см</option>
                </select>
              </div>
            </div>
            <div class="item_price">
              <span class="shop-item-price">₴ 565</span>
              <span>₴ 835</span>
            </div>
            <div class="item_buttons">
              <button class="item-buttons_button shop-button">Добавить в корзину</button>
              <button class="item-buttons_button shop-button-now">Купить в 1 клик</button>
            </div>
          </div>
          <div class="catalog_item">
            <div class="catalog_item-header">
              <span class="item-header_title">Лагуна</span>
              <div class="item-header_remnants">
                <span>13</span>
                <span>комплектов осталось</span>
              </div>
            </div>
            <div class="item-content">
              <div class="item-content_photo">
                <div>
                  <span>Премиум</span>
                </div>
                <div>
                  <span>-32%</span>
                </div>
              </div>
              <img class="shop-item-image" src="/src/assets/images/bundle.png" alt="bundle-photo">
            </div>
            <div class="item_constructor">
              <div class="bed-parametrs">
                <p>Выберите размер постели</p>
                <select>
                  <option selected disabled>Не выбрано</option>
                  <option>Полуторный</option>
                  <option>Двуспальный</option>
                  <option>Евростандарт</option>
                  <option>Семейный</option>
                </select>
              </div>
              <div class="pillowcase-parametrs">
                <p>Выберите размер наволочек (2 шт)</p>
                <select>
                  <option selected disabled>Не выбрано</option>
                  <option>70X70 см</option>
                  <option>50X70 см</option>
                </select>
              </div>
            </div>
            <div class="item_price">
              <span class="shop-item-price">₴ 635</span>
              <span>₴ 935</span>
            </div>
            <div class="item_buttons">
              <button class="item-buttons_button shop-button">Добавить в корзину</button>
              <button class="item-buttons_button shop-button-now">Купить в 1 клик</button>
            </div>
          </div>
          <div class="catalog_item">
            <div class="catalog_item-header">
              <span class="item-header_title">Заря</span>
              <div class="item-header_remnants">
                <span>13</span>
                <span>комплектов осталось</span>
              </div>
            </div>
            <div class="item-content">
              <div class="item-content_photo">
                <div>
                  <span>Премиум</span>
                </div>
                <div>
                  <span>-32%</span>
                </div>
              </div>
              <img class="shop-item-image" src="/src/assets/images/bundle.png" alt="bundle-photo">
            </div>
            <div class="item_constructor">
              <div class="bed-parametrs">
                <p>Выберите размер постели</p>
                <select>
                  <option selected disabled>Не выбрано</option>
                  <option>Полуторный</option>
                  <option>Двуспальный</option>
                  <option>Евростандарт</option>
                  <option>Семейный</option>
                </select>
              </div>
              <div class="pillowcase-parametrs">
                <p>Выберите размер наволочек (2 шт)</p>
                <select>
                  <option selected disabled>Не выбрано</option>
                  <option>70X70 см</option>
                  <option>50X70 см</option>
                </select>
              </div>
            </div>
            <div class="item_price">
              <span class="shop-item-price">₴ 745</span>
              <span>₴ 1100</span>
            </div>
            <div class="item_buttons">
              <button class="item-buttons_button shop-button">Добавить в корзину</button>
              <button class="item-buttons_button shop-button-now">Купить в 1 клик</button>
            </div>
          </div>
          <div class="catalog_item">
            <div class="catalog_item-header">
              <span class="item-header_title">Перо</span>
              <div class="item-header_remnants">
                <span>13</span>
                <span>комплектов осталось</span>
              </div>
            </div>
            <div class="item-content">
              <div class="item-content_photo">
                <div>
                  <span>Премиум</span>
                </div>
                <div>
                  <span>-32%</span>
                </div>
              </div>
              <img class="shop-item-image" src="/src/assets/images/bundle.png" alt="bundle-photo">
            </div>
            <div class="item_constructor">
              <div class="bed-parametrs">
                <p>Выберите размер постели</p>
                <select>
                  <option selected disabled>Не выбрано</option>
                  <option>Полуторный</option>
                  <option>Двуспальный</option>
                  <option>Евростандарт</option>
                  <option>Семейный</option>
                </select>
              </div>
              <div class="pillowcase-parametrs">
                <p>Выберите размер наволочек (2 шт)</p>
                <select>
                  <option selected disabled>Не выбрано</option>
                  <option>70X70 см</option>
                  <option>50X70 см</option>
                </select>
              </div>
            </div>
            <div class="item_price">
              <span class="shop-item-price">₴ 845</span>
              <span>₴ 1100</span>
            </div>
            <div class="item_buttons">
              <button class="item-buttons_button shop-button">Добавить в корзину</button>
              <button class="item-buttons_button shop-button-now">Купить в 1 клик</button>
            </div>
          </div>
          <div class="catalog_item">
            <div class="catalog_item-header">
              <span class="item-header_title">Тишь</span>
              <div class="item-header_remnants">
                <span>13</span>
                <span>комплектов осталось</span>
              </div>
            </div>
            <div class="item-content">
              <div class="item-content_photo">
                <div>
                  <span>Премиум</span>
                </div>
                <div>
                  <span>-32%</span>
                </div>
                </div>
              <img class="shop-item-image" src="/src/assets/images/bundle.png" alt="bundle-photo">
              </div>
            <div class="item_constructor">
              <div class="bed-parametrs">
                <p>Выберите размер постели</p>
                <select>
                  <option selected disabled>Не выбрано</option>
                  <option>Полуторный</option>
                  <option>Двуспальный</option>
                  <option>Евростандарт</option>
                  <option>Семейный</option>
                </select>
              </div>
              <div class="pillowcase-parametrs">
                <p>Выберите размер наволочек (2 шт)</p>
                <select>
                  <option selected disabled>Не выбрано</option>
                  <option>70X70 см</option>
                  <option>50X70 см</option>
                </select>
              </div>
            </div>
            <div class="item_price">
              <span class="shop-item-price">₴ 745</span>
              <span>₴ 1100</span>
            </div>
            <div class="item_buttons">
              <button class="item-buttons_button shop-button">Добавить в корзину</button>
              <button class="item-buttons_button shop-button-now">Купить в 1 клик</button>
            </div>
          </div>
          <div class="catalog_item">
            <div class="catalog_item-header">
              <span class="item-header_title">Авалон</span>
              <div class="item-header_remnants">
                <span>13</span>
                <span>комплектов осталось</span>
              </div>
            </div>
            <div class="item-content">
              <div class="item-content_photo">
                <div>
                  <span>Премиум</span>
                </div>
                <div>
                  <span>-32%</span>
                </div>
              </div>
              <img class="shop-item-image" src="/src/assets/images/bundle.png" alt="bundle-photo">
            </div>
            <div class="item_constructor">
              <div class="bed-parametrs">
                <p>Выберите размер постели</p>
                <select>
                  <option selected disabled>Не выбрано</option>
                  <option>Полуторный</option>
                  <option>Двуспальный</option>
                  <option>Евростандарт</option>
                  <option>Семейный</option>
                </select>
              </div>
              <div class="pillowcase-parametrs">
                <p>Выберите размер наволочек (2 шт)</p>
                <select>
                  <option selected disabled>Не выбрано</option>
                  <option>70X70 см</option>
                  <option>50X70 см</option>
                </select>
              </div>
            </div>
            <div class="item_price">
              <span class="shop-item-price">₴ 570</span>
              <span>₴ 800</span>
            </div>
            <div class="item_buttons">
              <button class="item-buttons_button shop-button">Добавить в корзину</button>
              <button class="item-buttons_button shop-button-now">Купить в 1 клик</button>
            </div>
          </div>
        </div>
        <div class="catalog_items-nav">
          <ul class="user-tabs">
            <li class="user-tab">01</li>
            <li class="user-tab">02</li>
            <li class="user-tab">03</li>
            <li class="user-tab">04</li>
            <li class="user-tab">05</li>
            <li class="user-tab">06</li>
          </ul>
        </div>
      </section>
      <section class="about-fabrics">
        <div class="about-fabrics_header">
          <h1>Подробнее о ткани</h1>
        </div>
    <div class="about-fabrics_item-wrapper">
      <div class="about-fabrics_items-wrapper_material">
        <h3>Ranfors elite</h3>
          <p>
            Ранфорс – очень плотная ткань, современная ткань из натуральных хлопковых волокон.
            За основу берут высококлассную пряжу из длинноволокнистого хлопка.
          </p>
          <p>
            Благодаря высокой плотности такое белье долговечно и может выдержать множество
            стирок на протяжении долгого времени. Комплект из ренфорса всегда будет ярким и
            привлекательным, он не будет линять, скатываться и садится.
          </p>
          <p>
           Подходит для всех типов кожи, в том числе и аллергиков.
          </p>
      </div>
      <div class="about-fabrics_items-wrapper_parameters">
        <ul>
          <li>Высокая прочность</li>
          <li>Натуральность</li>
          <li>Простота ухода</li>
          <li>Долговечность</li>
          <li>Несминаемость</li>
          <li>Мягкость</li>
        </ul>
      </div>   
      </section>
      <section class="callback">
      <div class="callback_header">
        <p>Закажите <span>обратный звонок</span></p>
        <p>Наши специалисты готовы ответить на все ваши вопросы</p>
      </div>
      <div class="callback_form">
        <p>Заполните форму</p>
        <div class="callback_form_inputs">
          <input type="text" placeholder="Имя">
          <input type="tel" placeholder="+380_ _ _ _ _ _ _ _ _">
          <button data-modal-target="#modal-tnx">Перезвоните мне</button>
        </div>
        <p>Ваши данные не будут переданы третиим лицам</p>
      </div>
      </section>
      <section class="our-benefits">
      <div class="our-benefits_header">
        <h1>8 причин заказать у нас</h1>
      </div>
      <div class="our-benefits_items-wrapper">
        <div class="our-benefits_items">
          <div class="our-benefits_items_item">
            <h3>Качественный товар</h3>
            <p>Как производитель, мы отвечаем за качество пошива.
               Проверяем изделие перед упаковкой и не допускаем брак в продажу.</p>
          </div>
          <div class="our-benefits_items_item">
            <h3>Подарки</h3>
            <p>Ваш день рождения не оставим без внимания. С удовольствием готовим подарки,
               радуем скидками и акциями.</p>
          </div>
          <div class="our-benefits_items_item">
            <h3>Подстраиваемся под Вас</h3>
            <p>Мы всегда готовы помочь. Неудобно разговаривать — мы перезвоним. Гибкость — важная часть сервиса.</p>
          </div>
        </div>
        <div class="our-benefits_content">
          <img src="/src/assets/images/bed.png">
        </div>
        <div class="our-benefits_items">
          <div class="our-benefits_items_item">
            <h3>Опытный персонал</h3>
            <p>Постельное белье для вас отшивают сотрудники с опытом более 10 лет. Следим за уровнем их квалификации.</p>
          </div>
          <div class="our-benefits_items_item">
            <h3>Сервис 24/7</h3>
            <p>Вы получите обратную связь в любое время. Менеджеры отвечают на звонки 24/7 с понедельника по воскресенье.</p>
          </div>
          <div class="our-benefits_items_item">
            <h3>Экономия время</h3>
            <p>2 клика и ваш заказ в работе. Менеджер перезвонит, уточнит детали и вам останется только ждать посылку.</p>
          </div>
        </div>
      </div>
      <div class="our-benefits-block">
        <div class="our-benefits-block_items-wrapper">
          <div class="our-benefits-block_item">
            <h3>Гарантия на изделия</h3>
            <p>Товары проходят контроль качества. Вы 
              можете вернуть средства, если получите товар ненадлежащего качества или с дефектом.</p>
          </div>
          <div class="our-benefits-block_item">
            <h3>Оплата при получении</h3>
            <p>Вы ничем не рискуете. Оплачивайте заказ по факту в отделении “Новой почты”.
               Работаем без предоплаты для вашего спокойствия.</p>
          </div>
        </div>
      </div>
      </section>           
    `;
  }

  afterRender() {
    modal.init();
    carousel.init();
    basket.initBasket();
    basket.initOneClickBuy();
  }
}

export default Catalog;