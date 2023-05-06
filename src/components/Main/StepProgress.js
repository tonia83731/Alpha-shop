import { ReactComponent as IconComplete } from "../Assets/icons/pg-complete.svg";

const processData = [
  {
    num: 1,
    name: '寄送地址',
    phase: 'address'
  },
  {
    num: 2,
    name: '運送方式',
    phase: 'shipping'
  },
  {
    num: 3,
    name: '付款資訊',
    phase: 'credit-card'
  },

]


function Progress({num, name, phase}){
  return(
    <>
      <span className={num === 1 ? "progress-group first-step" :"progress-group"} data-phase={phase}>
        <span className="progress-icon">
          <span className="text">{num}</span>
          <IconComplete className="icon cursor-point"/>
        </span>
        <span className="progress-label">{name}</span>
      </span>
      <span className={num === 1 ? "progress-bar link": num === 2 ? "progress-bar" : ""} data-order={num}></span>
    </>
  );
}

export default function StepProgress(){
  const data = processData.map((data) =>
    <Progress num={data.num} name={data.name} phase={data.phase} key={data.id}/>
  )
  return(
   <section className="progress-container col col-12">
    {data}
   </section>
  )
}