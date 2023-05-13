import StepProgress from "./StepProgress";
import Steps from "./Steps/Steps";
import ProgressControl from "./ProgressControl";
import Cart from "./Cart";
import {useState} from 'react';

const stepPhaseList = ['address', 'shipping', 'credit-card']

export default function Main(){
  const [nextSteps, setNextSteps] =useState(0)
  function handleStep(e){
    if(e.target.classList.contains('next')&& nextSteps < 2){
      setNextSteps(nextSteps + 1)
    } else if(e.target.classList.contains('prev')&& nextSteps > 0){
      setNextSteps(nextSteps - 1)
    }
  }

  let currentStep = stepPhaseList[nextSteps]

  return(
    <main className="site-main">
      <div className="main-container">
        <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
          <h2 className="register-title col col-12">結帳</h2>
          <StepProgress step={currentStep}/>
          {/* edit here to change steps */}
          <Steps phase={currentStep}/> 
          <ProgressControl type="desktop" phase={currentStep} onClick={handleStep} />
        </section>
        <section className="cart-container col col-lg-5 col-sm-12">
          <h3 className="cart-title">購物籃</h3>
          <Cart/>
        </section>
        <ProgressControl type="mobile" phase={currentStep} onClick={handleStep} />
      </div>
    </main>
  )
}