import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/engagement/newsletter/2018/Mar18/640X250.jpg'
          alt=''
          className='checkout_ad'
        />
        <div>
          <h3 className='checkout__userGreet'> Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {basket.map((item) => {
            return (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
