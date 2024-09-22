import React from 'react'
import "./card.css"
interface Props {
    RecipeName:string
    Ingredients:string
    time:string
    img:string
}

const Card:React.FC<Props> = ({RecipeName, Ingredients, time, img}: Props):JSX.Element => {
  return (
    <div className="card" style={{width: "18rem"}}>
  <img src={img} className={"card-img-top"} style={{width: "18rem"}} alt="..." />
  <div className="card-body">
    <h5 className="card-title">{RecipeName}</h5>
    <p className="card-text">{Ingredients}</p>
    
    <a href="#" className="btn btn-primary">Go To Recipe</a>
  </div>
</div>
  )
}

export default Card