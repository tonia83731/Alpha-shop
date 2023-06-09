const shipping = [
  {
    id:"shipping-standard",
    name: "標準運送",
    duration: "約 3~7 個工作天",
    price: "免費"
  },
  {
    id:"shipping-dhl",
    name: "DHL 貨運",
    duration: "48 小時內送達",
    price: "$500"
  },
]

function ChoiceResponse(){
  const shippingList = shipping.map((data, index) =>
    <label className={`radio-group col col-12 ${data.id === "shipping-standard"? "standard checked": ""}`} key={data.id} data-price="0">
      <input id={data.id} type="radio" name="shipping" className="radio-input" defaultChecked={index === 0}/>
      <div className="radio-info">
        <div className="col col-12 radio-col-12">
          <div className="text">{data.name}</div>
          <div className="price">{data.price}</div>
        </div>
        <div className="period col col-12">{data.duration}</div>
      </div>
      <div className="radio-box-border"></div>
    </label>
  )
  return <section className="form-body col col-12">{shippingList}</section>
}

export default function StepTwo(){
  return(
    <form className="col col-12" data-phase="shipping">
      <h3 className="form-title">運送方式</h3>
      <ChoiceResponse/>
    </form>
  )
}