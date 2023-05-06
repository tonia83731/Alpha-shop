import StepProgress from "./StepProgress";
import Steps from "./Steps/Steps";
import ProgressControl from "./ProgressControl";
import Cart from "./Cart";


export default function Main(){
  return(
    <main className="site-main">
      <div className="main-container">
        <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
          <h2 className="register-title col col-12">結帳</h2>
          <StepProgress/>
          <Steps/>
          <ProgressControl type="desktop"/>
        </section>
        <section className="cart-container col col-lg-5 col-sm-12">
          <h3 className="cart-title">購物籃</h3>
          <Cart/>
        </section>
        <ProgressControl type="mobile"/>
      </div>
    </main>
  )
}