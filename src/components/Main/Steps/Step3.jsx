import {ShortResponse} from './Step1';

export default function StepThree({onChange}){  
  return(
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12 input-col-12-4">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <ShortResponse name='持卡人姓名' type="text" placeholder='John Doe' data="cardHolder" onChange={onChange}/>
          </div>
        </div>
        <div className="col col-12 input-col-12-4">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <ShortResponse name='卡號' type="text" placeholder='1111 2222 3333 4444' data="cardNum" onChange={onChange}/>
          </div>
        </div>
        <div className="col col-12 input-col-12-5">
          <div className="input-group input-w-lg-3 input-w-sm-s3 date">
            <ShortResponse name="有效期限" type="text" placeholder="MM/YY" data="expireDate" onChange={onChange}/>
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-s3 ccv">
            <ShortResponse name="CVC / CCV" type="text" placeholder="123"  data="cvc" onChange={onChange}/>
          </div>
        </div>
      </section>
    </form>
  )
}

