import JeansOne from '../Assets/images/product-1.jpg'
import JeansTwo from '../Assets/images/product-2.jpg'
import { ReactComponent as IconPlus } from "../Assets/icons/plus.svg";
import { ReactComponent as IconMinus } from "../Assets/icons/minus.svg";

import {useState} from 'react';

const initialCartItems = [
  {
    id:1,
    name: "破壞補丁修身牛仔褲",
    price: 3999,
    img:JeansOne,
    quantity: 1
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    price: 1299,
    img: JeansTwo,
    quantity: 1
  }
]

function CartInfo({type, text, price}){
  return(
    <section className={`cart-info ${type} col col-12`} key={type}>
      <div className="text">{text}</div>
      <div className="price">{price}</div>
    </section>
  )
}

export default function Cart({shipPrice}){
  const [cartItems, setCartItems] = useState(initialCartItems)
  // Plus
  function handlePlusQuantity(itemId){
    setCartItems(cartItems.map(cartItem => {
      if(cartItem.id === itemId){
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1
        };
      } else {
        return cartItem;
      }
    }))
  }

  // Minus
  function handleMinusQuantity(itemId){
    let nextCartItems = cartItems.map(cartItem => {
      if(cartItem.id === itemId){
        return{
          ...cartItem,
          quantity: cartItem.quantity - 1
        };
      } else {
        return cartItem;
      }
    });
    nextCartItems = nextCartItems.filter(item => item.quantity > 0);
    setCartItems(nextCartItems)
  }
  const totalPrice = cartItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0)

  // return value
  return(
    <>
      <section className="product-list col col-12" data-total-price={totalPrice}>
        {
          cartItems.map(cartItem => (
            <div className="product-container col col-12" data-count={cartItem.price*cartItem.quantity} data-price={cartItem.price} key={cartItem.name}>
              <img className="img-container" src={cartItem.img} alt={cartItem.name}/>
              <div className="product-info">
                <div className="product-info-base">
                  <div className="product-name">{cartItem.name}</div>
                  <div className="product-control-container">
                      <div className="product-control">
                        <IconMinus className="product-action minus cursor-point" onClick={
                          () => {handleMinusQuantity(cartItem.id)}
                        }/>
                        <span className="product-count">{cartItem.quantity}</span>
                        <IconPlus className="product-action plus cursor-point" onClick={
                          () => {handlePlusQuantity(cartItem.id)}
                        }/>
                      </div>
                  </div>
                </div>
                <div className="price">${' '}{cartItem.price*cartItem.quantity}</div>
              </div>
            </div>
          ))
        }
      </section>
      <CartInfo type="shipping" text='運費' price="免費"/>
      <CartInfo type="total" text='小計' price={totalPrice}/>
    </>
  )
}





