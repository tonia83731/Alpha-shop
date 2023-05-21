import { ReactComponent as IconPlus } from "../Assets/icons/plus.svg";
import { ReactComponent as IconMinus } from "../Assets/icons/minus.svg";

// import {useState} from 'react';
import {useContext} from 'react';
import {CartContext} from '../Main/Context/CartContext';

function CartProduct(items){
  return(
    <div className="product-container col col-12" data-count={items.price*items.quantity} data-price={items.price}>
        <img className="img-container" src={items.img} alt={items.name}/>
        <div className="product-info">
          <div className="product-info-base">
            <div className="product-name">{items.name}</div>
            <div className="product-control-container">
                <div className="product-control">
                  <IconMinus className="product-action minus cursor-point" onClick={
                    () => {items.onClickMinus(items.id)}
                  }/>
                  <span className="product-count">{items.quantity}</span>
                  <IconPlus className="product-action plus cursor-point" onClick={
                    () => {items.onClickPlus(items.id)}
                  }/>
                </div>
            </div>
          </div>
          <div className="price">${' '}{items.price*items.quantity}</div>
        </div>
      </div>
  )
}

function CartInfo({type, text, price}){
  return(
    <section className={`cart-info ${type} col col-12`} key={type}>
      <div className="text">{text}</div>
      <div className="price">{price}</div>
    </section>
  )
}

export default function Cart({onClickPlus, onClickMinus ,totalPrice}){
  const cartData = useContext(CartContext)
  return(
    <>
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price={totalPrice}>
        {
          cartData.map((data) => (
            <CartProduct key={data.id} {...data} onClickMinus={onClickMinus} onClickPlus={onClickPlus}/>
          ))
        }
      </section>
      <CartInfo type="shipping" text='運費' price="免費"/>
      <CartInfo type="total" text='小計' price={totalPrice}/>
    </>
  )
}

