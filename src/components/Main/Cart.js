import JeansOne from '../Assets/images/product-1.jpg'
import JeansTwo from '../Assets/images/product-2.jpg'
import { ReactComponent as IconPlus } from "../Assets/icons/plus.svg";
import { ReactComponent as IconMinus } from "../Assets/icons/minus.svg";

const cartItem = [
  {
    id:1,
    name: "破壞補丁修身牛仔褲",
    price: "$3,999",
    img:JeansOne,
    quantity: 1
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    price: "$1,299",
    img: JeansTwo,
    quantity: 1
  }
]

const cartInfo = [
  {
    id: 1,
    type: 'cart-info shipping col col-12',
    text: '運費',
    price: '免費'
  },
  {
    id: 2,
    type: 'cart-info total col col-12',
    text: '小計',
    price: '$5,298'
  }
]

function CartItem(){
  const cartItemList = cartItem.map(data =>
    <div className="product-container col col-12" data-count="0" data-price={data.price} key={data.name}>
      <img className="img-container" src={data.img} alt={data.name}/>
      <div className="product-info">
        <div className="product-info-base">
          <div className="product-name">{data.name}</div>
          <div className="product-control-container">
              <div className="product-control">
                <IconMinus className="product-action minus"/>
                <span className="product-count">{data.quantity}</span>
                <IconPlus className="product-action plus"/>
              </div>
          </div>
        </div>
        <div className="price">{data.price}</div>
      </div>
    </div>
  )
  return(
    <section className="product-list col col-12" data-total-price="0">
      {cartItemList}
    </section>
  )
}
function CartInfo(){
  const cartInfoList = cartInfo.map(data =>
    <section className={data.type} key={data.text}>
      <div className="text">{data.text}</div>
      <div className="price">{data.price}</div>
    </section>
  )
  return(
    <>
      {cartInfoList}
    </>
  )
}


export default function Cart(){
  return(
    <>
      <CartItem/>
      <CartInfo/>
    </>
  )
}