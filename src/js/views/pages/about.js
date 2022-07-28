import Component from '../component.js';
import Basket from '../partials/basket.js';

const basket = new Basket();

class About extends Component {
  render() {
    return `
      <section class="about-us">
        <div class="about-us_header">
          <h1>О нас</h1>
        </div>
        <div class="about-us_items-wrapper">
          <div class="about-us_items-wrapper_item">
            <div class="about-us_items-wrapper_item-img">
              <img src="/src/assets/images/icon-control.png" alt="icon-conrol">
            </div>
            <div class="about-us_items-wrapper_item-content">
              <p>Контролируем производство на всех этапах</p>
              <p> Проверяем каждый шаг: закупка тканей, крой и пошив,
                  сборка изделия и упаковка. Вы получаете изделие без дефектов</p>
              <p><span>1</span></p>
            </div>
          </div>
          <div class="about-us_items-wrapper_item">
            <div class="about-us_items-wrapper_item-img">
              <img src="/src/assets/images/machine.png" alt="icon-machine">
            </div>
            <div class="about-us_items-wrapper_item-content">
              <p>Используем новейшее оборудование </p>
              <p> Отшиваем изделия на современных швейных машинках. Это европейская техника,
                  которую мы постоянно обновляем. </p>
              <p><span>2</span></p>
            </div>
          </div>
          <div class="about-us_items-wrapper_item">
            <div class="about-us_items-wrapper_item-img">
              <img src="/src/assets/images/colors.png" alt="icon-colors">
            </div>
            <div class="about-us_items-wrapper_item-content">
              <p>Подбираем гармоничные сочетания цветов</p>
              <p> Мелкие недочеты могут испортить впечатление об изделии.
                  Поэтому особое внимание уделяем подбору цветовой гаммы. </p>
              <p><span>3</span></p>
            </div>
          </div>
        </div>
      </section>
      <section class="popular-bundles">
        <div class="popular-bundles_header">
          <p>Популярные комплекты</p>
          <p>Эти комплекты больше всего нравятся нашим покупателям</p>
        </div>
        <div class="catalog_items">
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
              <button class="item-buttons_button">Купить в 1 клик</button>
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
        </div>
        <div class="popular-bundles_items-wrapper_nav">
          <ul class="user-tabs">
            <li class="user-tab">01</li>
            <li class="user-tab">02</li>
            <li class="user-tab">03</li>
          </ul>
        </div>
      </section>
    `;
  }

  afterRender() {
    basket.initBasket();
    this.carousel();
  }

  carousel() {
    const users = document.getElementsByClassName('catalog_item');
    const userTabs = document.getElementsByClassName('user-tabs')[0];

    userTabs.children[0].classList.add('activeTab');
    userTabs.addEventListener('click', showUser);

    users[0].classList.add('activeUser');

    function showUser(e) {
      let target = e.target;

      if (target.classList.contains('user-tab')) {
        for (let i = 0; i < users.length; i++) {
          userTabs.children[i].classList.remove('activeTab');
          users[i].classList.remove('activeTab');

          if (userTabs.children[i] == target) {
            users[i].classList.add('activeUser');
          } else {
            users[i].classList.remove('activeUser');
          }
        }
        target.classList.add('activeTab');
      }
    }
  }
}

export default About;