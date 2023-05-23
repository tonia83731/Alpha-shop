import StepProgress from "./StepProgress";
import Steps from "./Steps/Steps";
import ProgressControl from "./ProgressControl";
import Cart from "./Cart";
import {useState, useContext} from 'react';
import {CartContext} from '../Main/Context/CartContext';
import {CreditCardContext} from '../Main/Context/CreditCardContext';


const stepPhaseList = ['address', 'shipping', 'credit-card']

export default function Main(){  
  const creditCardData = useContext(CreditCardContext)
  const [creditCardInfo, setCreditCardInfo] = useState(creditCardData)
  const cartData = useContext(CartContext)
  const [cartItems, setCartItems] = useState(cartData)
  const [nextSteps, setNextSteps] =useState(0)
  // Total Price
  const totalPrice = cartItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0)


  function handleStep(e){
    if(e.target.classList.contains('next')&& nextSteps < 2){
      setNextSteps(nextSteps + 1)
    } else if(e.target.classList.contains('prev')&& nextSteps > 0){
      setNextSteps(nextSteps - 1)
    } else if (nextSteps === 2){
      handleSubmit(e)
    }
  }

  let currentStep = stepPhaseList[nextSteps]

  function handleChange(e){
    setCreditCardInfo({
      ...creditCardInfo,
      [e.target.dataset.name]: e.target.value,
    })
  }

  function handleSubmit(){
    const creditCard = 
      `持卡人姓名: ${creditCardInfo.cardHolder}
       卡號: ${creditCardInfo.cardNum}
       有效期限: ${creditCardInfo.expireDate}
       CVC / CCV: ${creditCardInfo.cvc}
      `
    console.log(`${creditCard}`)
    console.log(`總金額: ${totalPrice}`)
  }


  // Cart Event Start Here
    // Cart Minus
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
    // Cart Plus
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


  return(
    <main className="site-main">
      <div className="main-container">
          <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
          <h2 className="register-title col col-12">結帳</h2>
          <StepProgress step={currentStep}/>
          {/* edit here to change steps */}
          <Steps phase={currentStep} onChange={handleChange}/> 
          <ProgressControl type="desktop" phase={currentStep} onClick={handleStep}/>
        </section>
        <CartContext.Provider value={cartItems}>
          <section className="cart-container col col-lg-5 col-sm-12">
            <Cart onClickMinus={handleMinusQuantity} onClickPlus={handlePlusQuantity} totalPrice={totalPrice}/>
          </section>
        </CartContext.Provider>
        <ProgressControl type="mobile" phase={currentStep} onClick={handleStep}/>
      </div>
    </main>
  )
}