import { ReactComponent as IconLeftArrow } from "../Assets/icons/left-arrow.svg";
import { ReactComponent as IconRightArrow } from "../Assets/icons/right-arrow.svg";

function Next({next, name}){
  return(
    <button className={next}>
      {name}
      <IconRightArrow className="cursor-point right-arrow"/>
    </button>
  )
}
function Previous({prev, name}){
  return(
    <button className={prev}>
      <IconLeftArrow className="cursor-point left-arrow"/>
      {name}
    </button>
  )
}

export default function ProgressControl({type}){
  return(
    <section className="progress-control-container col col-lg-6 col-sm-12" data-type={type}>
      <section className="button-group col col-12" data-phase="address">
        <Next next="next" name="下一步"/>
      </section>
      {/* <section className="button-group col col-12" data-phase="shipping">
        <Previous prev="prev" name="上一步"/>
        <Next next="next" name="下一步"/>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <Previous prev="prev" name="上一步"/>
        <button className="next">
          確認下單
        </button>
      </section> */}
    </section>
  )
}