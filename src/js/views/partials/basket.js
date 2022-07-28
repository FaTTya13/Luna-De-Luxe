class Basket {
  initBasket() {
      const addItemToBasketBtns = document.getElementsByClassName('shop-button');
      const basketBuyBtn = document.getElementsByClassName('basket_button')[0];

      if (!localStorage.getItem('basketItems')) {
        localStorage.setItem('basketItems', JSON.stringify([]));
      }

      basketBuyBtn.addEventListener('click', buyBtnClicked);

      for (let i = 0; i < addItemToBasketBtns.length; i++) {
        let addButton = addItemToBasketBtns[i];
        addButton.addEventListener('click', addToBasketClicked);
      }

      function addToBasketClicked(event) {
        let addButton = event.target;
        const shopItem = addButton.parentElement.parentElement;
        const title = shopItem.getElementsByClassName('item-header_title')[0].innerHTML;
        const price = shopItem.getElementsByClassName('shop-item-price')[0].innerHTML;
        const imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
        
        let basketItems = [];

        if (localStorage.getItem('basketItems')) {
            basketItems = JSON.parse(localStorage.getItem('basketItems'));
        };

        basketItems.push({
            'title': title,
            'price': price,
            'imageSrc': imageSrc
        })

        localStorage.setItem('basketItems', JSON.stringify(basketItems));

        addButton.disabled = true;
        addButton.innerHTML = 'Добавлено'
      }

      const openBasket = document.getElementsByClassName('header-content_basket-img')[0];
      openBasket.addEventListener('click', refreshBasket);

      function refreshBasket() {
          const catalogItems = document.getElementsByClassName('basket_items')[0];
      
          catalogItems.innerHTML = ``;
      
          addItemToBasket()
      }
    
      function addItemToBasket() {
        let basketItemsContent = JSON.parse(localStorage.getItem('basketItems'));

        if (basketItemsContent.length) {
          for (let i = 0; i < basketItemsContent.length; i++) {
            const catalogItems =
              document.getElementsByClassName('basket_items')[0];
            const basketItem = document.createElement('div');
            const deleteBtn = document.createElement('button');
            let number = i;
            number++;

            basketItem.classList.add('basket-item');
            deleteBtn.classList.add('btn-delete');
            deleteBtn.innerHTML = 'Удалить';

            let basketItemContent = `
            <span class='basket-item_number'>${number}</span>
            <div class='basket-item_content'>
              <img class='shop-item-image' src='${basketItemsContent[i].imageSrc}' alt='bundle-photo'>
              <div class='item_constructor'>
                <span class='item-header_title'>${basketItemsContent[i].title}</span>
                <div class='bed-parametrs'>
                  <span>Выбрать размер</span>
                  <select>
                    <option selected disabled>Не выбрано</option>
                    <option>Полуторный</option>
                    <option>Двуспальный</option>
                    <option>Евростандарт</option>
                    <option>Семейный</option>
                  </select>
                </div>
                <div class='pillowcase-parametrs'>
                  <span>Выбрать размер наволочки</span>
                  <select>
                    <option selected disabled>Не выбрано</option>
                    <option>70X70 см</option>
                    <option>50X70 см</option>
                  </select>
                </div>
              </div>
              <div class='item_price'>
                <span class='shop-item-price'> ${basketItemsContent[i].price}</span>
                <span>₴ 835</span>
              </div>
            <!--  <button class='btn-delete'><span>&times;</span>Удалить</button> -->
              <div>
            `;

            basketItem.innerHTML = basketItemContent;
            catalogItems.append(basketItem);
            basketItem.append(deleteBtn);

            const removeBasketItemBtns =
              document.getElementsByClassName('btn-delete');

            for (let i = 0; i < removeBasketItemBtns.length; i++) {
              let button = removeBasketItemBtns[i];
              button.addEventListener('click', removeBasketItem);
            }
          }
        } else {
          const catalogItems = document.getElementsByClassName('basket_items')[0];

          const basketItemVoid = document.createElement('div');

          let basketItemContent = `Корзина пуста!`;

          basketItemVoid.innerHTML = basketItemContent;
          basketItemVoid.classList.add('emptyBasket');
          catalogItems.append(basketItemVoid);
        }
        updateBasketPrice();
      }

    function removeBasketItem(event) {
      let productElem = event.target.parentElement;
      let productWrapperElem = productElem.parentElement;

      const index = Array.from(productWrapperElem.children).findIndex(el =>
          el === productElem
      )

      const basketItems = JSON.parse(localStorage.getItem('basketItems'));

      for (let i = 0; i < basketItems.length; i++) {
        if (i === index) {
          basketItems.splice(i, 1)
          localStorage.setItem('basketItems', JSON.stringify(basketItems))
          refreshBasket()
        }
      }
    }

    function updateBasketPrice() {
      const basketItemContainer = document.getElementsByClassName('basket_items')[0];
      const basketItems = basketItemContainer.getElementsByClassName('basket-item');
      let total = 0;
    
      for (let i = 0; i < basketItems.length; i++) {
        let basketItem = basketItems[i];
        let basketItemContent = basketItem.getElementsByClassName('basket-item_content')[0];
        let priceElement = basketItemContent.getElementsByClassName('shop-item-price')[0];
        let price = parseFloat(priceElement.innerHTML.replace('₴', ''));
        total += price;
      }
      document.getElementsByClassName('basket_total-price')[0].innerText = `₴ ${total}`;
    }

    function buyBtnClicked(event) {
      const basket = document.getElementsByClassName('basket')[0];
      const shopItems = document.getElementsByClassName('basket_items')[0];

      if (shopItems.children[0].classList.contains('emptyBasket') === false) {
        window.localStorage.setItem('basketItems', JSON.stringify([]));
        
        basket.classList.remove('active'); 
        overlay.classList.remove('active');
        document.getElementById('modal-tnx').classList.add('active')
      } else {
        alert('Корзина пуста! Добавьте товар в корзину')
        refreshBasket();
      }
    }
  }
}

export default Basket;