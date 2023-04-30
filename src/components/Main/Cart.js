import JeansOne from '../Assets/images/product-1.jpg'
import JeansTwo from '../Assets/images/product-2.jpg'
import { ReactComponent as IconPlus } from "../Assets/icons/plus.svg";
import { ReactComponent as IconMinus } from "../Assets/icons/minus.svg";

const cartItem = [
  {
    name: "破壞補丁修身牛仔褲",
    price: "3999",
    src:{JeansOne}
  },
  {
    name: "刷色直筒牛仔褲",
    price: "1299",
    src: {JeansTwo}
  }
]




export default function Cart(){
  const cartItemList = cartItem.map(data =>
    <div className="product-container col col-12" data-count="0" data-price={data.price}>
      <img className="img-container" src={data.src} alt={data.name}/>
      <div className="product-info">
        <div className="product-name">{data.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <IconMinus className="product-action minus"/>
            <span className="product-count"></span>
            <IconPlus className="product-action plus"/>
          </div>
        </div>
        <div className="price"></div>
      </div>
    </div>
  )
  return(
    <section className="product-list col col-12" data-total-price="0">
      {cartItemList}
    </section>
  )
}