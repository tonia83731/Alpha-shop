import StepOne from './Step1'
import StepTwo from './Step2'
import StepThree from './Step3'

function ChangeStepsForm({phase}){
  if(phase === "address"){
    return <StepOne/>
  }
  if(phase === "shipping"){
    return <StepTwo/>
  }
  return <StepThree/>
}

export default function Steps({phase}){
  return(
    <section className="form-container col col-12">
      <ChangeStepsForm phase={phase}/>
    </section>
  )
}