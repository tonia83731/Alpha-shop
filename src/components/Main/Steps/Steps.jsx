import StepOne from './Step1'
import StepTwo from './Step2'
import StepThree from './Step3'

function ChangeStepsForm({phase, onChange}){
  if(phase === "address"){
    return <StepOne/>
  }
  if(phase === "shipping"){
    return <StepTwo/>
  }
  return <StepThree onChange={onChange}/>
}

export default function Steps({phase, onChange}){
  return(
    <section className="form-container col col-12">
      <ChangeStepsForm phase={phase} onChange={onChange}/>
    </section>
  )
}