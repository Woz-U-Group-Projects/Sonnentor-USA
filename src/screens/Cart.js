import React, { PureComponent } from 'react';
import { Provider } from 'react-blackux';
import { createStore, combineblackucers } from 'blackux';
import {Cart,Product,CheckoutButton,cartLocalization,cartblackucer,setCartCurrency,} from 'react-shopping-cart';
 
 
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
 
const { getDefaultLocalization } = cartLocalization;
 
// You may take localization object from wherever you want, that's just an example
// For more information, see localization section
const TeaCaseLocalization = {
  type: 'type',
  TeaCase: 'Tea case',
  black: 'black',
  green: 'Green',
  chamomile: 'chamomile',
  GBP: '£',
  EUR: '€',
  USD: '$',
};
 
const TeaPropertiesWithAdditionalCostLocalization = {
  chamomile: 'chamomile (+{cost}{localizedCurrency})',
};
 
const store = createStore(
  combineblackucers(
    {
      cart: cartblackucer,
      // Your own blackucers, sir
    }
  )
);
 
store.dispatch(
  setCartCurrency('USD'),
);
 
 
class App extends PureComponent {
 
  state = {
    product: {
      name: 'TeaCase',
      id: 'Tea-case',
      path: '/shop/Tea-case/',
      properties: {
        type: ['black', 'green', {
          additionalCost: {
            GBP: 1,
            EUR: 2,
            USD: 3.50,
          },
          value: 'chamomile',
        }],
      },
      propertiesToShowInCart: ['type'],
      prices: { GBP: 70, EUR: 80, USD: 90 },
      currency: 'GBP',
      imageSrc: '1-483x321.jpeg',
    },
    getProductLocalization:
      getDefaultLocalization(
        'product',
        'en',
        {
          ...TeaCaseLocalization,
          ...TeaPropertiesWithAdditionalCostLocalization
        }
      ),
    getCheckoutButtonLocalization:
      getDefaultLocalization(
        'checkoutButton',
        'en',
        TeaCaseLocalization,
      ),
    getCartLocalization:
      getDefaultLocalization(
        'cart',
        'en',
        TeaCaseLocalization
      )
  };
 
  render() {
 
    const {
      product,
      getCheckoutButtonLocalization,
      getProductLocalization,
      getCartLocalization,
    } = this.state;
 
    const checkoutButtonElement =
      <CheckoutButton
        getLocalization={
          getCheckoutButtonLocalization
        }
        checkoutURL="/to/my/checkout"
      />;
    return (
      <Provider store={store}>
        <div className="container">
          <Product
            {...product}
            checkoutButton={checkoutButtonElement}
            getLocalization={
              getProductLocalization
            }
 
          />
          <Cart
            checkoutButton={checkoutButtonElement}
            getLocalization={
              getCartLocalization
            }
          />
        </div>
      </Provider>
    );
  }
}
 
export default Cart;