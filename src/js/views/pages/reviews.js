import Component from '../component.js';
import Modal from '../partials/Modal.js';

const modal = new Modal();

class Reviews extends Component {
  render() {
    return `                
      <section class="proposition">   
      <div class="proposition_header">
        <h1>Акция</h1>
      </div>
      <div class="proposition_about">
        <p>Купите от 2-х комплектов постельного белья, и мы <b>бесплатно</b> доставим ваш заказ</p>
        <h3>До конца акции осталось</h3>
        <div class="proposition_about_timer">
          <span id="time"></span>
        </div>
      </div>
      <div class="proposition_form">
        <p>Оформите заказ через нашего менеджера</p>
        <div class="proposition_form_inputs">
          <input type="text" placeholder="Имя">
          <input type="tel" placeholder="+380_ _ _ _ _ _ _ _ _">
          <button data-modal-target="#modal-tnx">Хочу оформить заказ</button>
        </div>
        <p>Ваши данные не будут переданы третиим лицам</p>
      </div>
    </section>   
    <section class="reviews">     
    <div class="reviews_header">
      <h1>Что говорят о нашем товаре</h1>
    </div>
    <div class="reviews-wrapper">
      <div class="reviews_item">
        <div class="reviews_item_user">
          <p>Ксения Маринова</p>
          <img src="/src/assets/images/avatar-ksenia.png" alt="avatar">
        </div>
        <div class="reviews_item_content">
          <p>Материал приятный. Доставили вовремя</p>
          <p>Решила купить постельное белье подруге на новоселье. Красивая упаковка и само белье пошито аккуратно, качественно, материал приятный. Доставили вовремя, подружка благодарила за такой подарок.
           Раньше не покупала белье ранфорс, а теперь думаю заказать и себе. Спасибо!
          </p>
        </div>
      </div>
      <div class="reviews_item">
      <div class="reviews_item_user">
        <p>Евтухова Виктория</p>
        <img src="/src/assets/images/avatar.png" alt="avatar">
      </div>
      <div class="reviews_item_content">
        <p>Пошит отлично. Я довольна!</p>
        <p>Я довольна. Комплект пережил несколько стирок и не полинял. Пошит отлично, нитки не торчат.
           Покупала себе, но белье подойдет и в качестве подарка. Комплект как на фото, все размеры и
           дизайн сходятся. Это радует, потому что магазины часто присылают белье, которое отличается
           от фото. 
        </p>
      </div>
    </div>
    <div class="reviews_item">
    <div class="reviews_item_user">
      <p>Ольга Петровна</p>
      <img src="/src/assets/images/avatar-olga.png" alt="avatar">
    </div>
    <div class="reviews_item_content">
      <p>Качество замечательное. Порадовала доставка!</p>
      <p>Качество постели замечательное. Все цвета как на картинке, можно заказывать и подбирать под интерьер.
       Правда, наволочки оказались темнее, чем на фото. Но менеджер предупредила, что цвет может передаваться
       чуть по-разному на разных телефонах. Это не критично. Порадовала доставка, все вовремя 
      </p>
    </div>
  </div>
    </div>
    <div class="reviews_pages">
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
    modal.init();
    this.countDownTimer();
    this.carousel();
  }

  countDownTimer() {
    let timer = setInterval(function () {
      let now = new Date().getTime();
      let countDownDate = new Date('Aug 01, 2022 00:00:00').getTime();

      let distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const format = (time) => {
        return time < 10 ? `0${time}` : time;
      };

      if (window.location.hash === '#/reviews') {
        document.getElementById('time').innerHTML = `${days} дня ${format(
          hours
        )} : ${format(minutes)} : ${format(seconds)}`;
      } else return;

      if (distance <= 0) {
        clearInterval(timer);
        document.getElementById('time').innerHTML = 'Акция окончена';
      }
    }, 1000);
  }

  carousel() {
    const users = document.getElementsByClassName('reviews_item');
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

export default Reviews;