import Component from '../component.js';

class Footer extends Component {
    render() {
        return `
        <section class="footer">
        <div class="footer-header">
            <div class="footer_logo">
              <p>Luna<span>de</span></p>
            </div>
            <nav class="footer_nav">
              <ul class="footer_nav-list">
                <li class="footer_nav-list-item"><a href="#/">О нас</a></li>
                <li class="footer_nav-list-item"><a href="#/catalog">Каталог</a></li>
                <li class="footer_nav-list-item"><a href="#/reviews">Отзывы</a></li>
                <li class="footer_nav-list-item"><a href="#/paymentAndDelivery">Доставка и оплата</a></li>
              </ul>
            </nav>
            <a class="footer_fb" href="https://www.facebook.com/" target="_blank">f</a>
        </div>
        <div class="footer-contacts">
          <p>Контакты</p>
          <div class="footer-contacts-wrapper">
            <div class="footer-contacts_map">
              <p>Украина, г. Хмельницкий, ул. Курчатова, 20</p> 
            </div>
            <div class="footer-contacts_email">
              <p>vippostelnoe@gmail.ua</p> 
            </div>
            <div class="footer-contacts_tel">
              <p>+ 38 (067) 675-77-18</p> 
              <p>+ 38 (093) 170-75-96</p> 
            </div>
          </div>
         <!-- <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae179b9b85a2550b2c8f2796787278bb299da7321348f8589203a1f55518a7e4b&amp;source=constructor" width="100%" height="549" frameborder="0"></iframe> -->
        </div>
        <div class="footer_form">
            <p>Оформите заказ через менеджера</p>
            <div class="footer_form_inputs">
              <input type="text" placeholder="Имя">
              <input type="tel" placeholder="+380_ _ _ _ _ _ _ _ _">
              <button data-modal-target="#modal-tnx">Хочу оформить заказ</button>
            </div>
        </div>
      </section>
        `;
    }

    afterRender() {
    };
}

export default Footer;