import { ReactComponent as IconComplete } from "../Assets/icons/pg-complete.svg";




function Progress({num, name, phase, className}){
  return(
    <>
      <span className={`progress-group ${className}`} data-phase={phase}>
        <span className="progress-icon">
          <span className="text">{num}</span>
          <IconComplete className="icon cursor-point"/>
        </span>
        <span className="progress-label">{name}</span>
      </span>
      <span className={num === 1 ? "progress-bar going": num === 2 ? `progress-bar ${className}` : ""} data-order={num}></span>
    </>
  );
}

function StepProgressChange({step}){
  if(step === 'address'){
    return(
      <>
        <Progress num={1} name='寄送地址' phase='address' className="first-step"/>
        <Progress num={2} name='運送方式' phase='shipping' className=""/>
        <Progress num={3} name='付款資訊' phase='credit-card' className=""/>
      </>
    )
  }
  if(step === 'shipping'){
    return(
      <>
        <Progress num={1} name='寄送地址' phase='address' className="done"/>
        <Progress num={2} name='運送方式' phase='shipping' className="going"/>
        <Progress num={3} name='付款資訊' phase='credit-card' className=""/>
      </>
    )
  }
  if(step === 'credit-card'){
    return(
      <>
        <Progress num={1} name='寄送地址' phase='address' className="done"/>
        <Progress num={2} name='運送方式' phase='shipping' className="done"/>
        <Progress num={3} name='付款資訊' phase='credit-card' className="going"/>
      </>
    )
  }
}


export default function StepProgress({step}){
  if(step === "address"){

  }
  return(
   <section className="progress-container col col-12" step={step}>
      <StepProgressChange step={step}/>
   </section>
  )
}
