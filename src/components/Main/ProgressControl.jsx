// import { Children } from "react";
import { ReactComponent as IconLeftArrow } from "../Assets/icons/left-arrow.svg";
import { ReactComponent as IconRightArrow } from "../Assets/icons/right-arrow.svg";


function Next({name, onClick, onSubmit}){
  return(
    <button className="next" onClick={onClick}>
      {name}
      <IconRightArrow className="cursor-point right-arrow"/>
    </button>
  )
}
function Previous({name, onClick}){
  return(
    <button className="prev" onClick={onClick}>
      <IconLeftArrow className="cursor-point left-arrow"/>
      {name}
    </button>
  )
}

function ProgressButtonControl({phase, onClick, onSubmit}){
  if(phase === "address"){
    return <Next name="下一步" onClick={onClick}/>
  }
  if(phase === "shipping"){
    return(
      <>
        <Previous name="上一步" onClick={onClick}/>
        <Next name="下一步" onClick={onClick}/>
      </> 
    )
  }
  return(
    <>
      <Previous name="上一步" onClick={onClick}/>
      <button className="next" onClick={onClick}>確認訂單</button>
    </> 
  )
}

function BtnGroupSection({phase, children}){
  return(
    <section className="button-group col col-12" data-phase={phase}>
      {children}
    </section>
  )
}


export default function ProgressControl({type, phase, onClick, onSubmit}){
  return(
    <section className="progress-control-container col col-lg-6 col-sm-12" data-type={type}>
      <BtnGroupSection phase={phase}>
        <ProgressButtonControl phase={phase} onClick={onClick}/>
      </BtnGroupSection>
    </section>
  )
}