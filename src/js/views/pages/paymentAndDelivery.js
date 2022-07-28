import Component from '../component.js';
import Basket from '../partials/basket.js';

const basket = new Basket();

class PaymentAndDelivery extends Component {
    render() {
        return `                
        <section class="payment-delivery">
            <img src="/src/assets/images/payment-delivery.png" alt="payment-delivery">
        </section>       
        `;
    }

    afterRender() {
        basket.initBasket();
    }
}

export default PaymentAndDelivery;