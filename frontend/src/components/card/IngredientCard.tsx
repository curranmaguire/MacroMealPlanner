import React from 'react'
import { Interface } from 'readline'
import type { Recipe } from '../../pages/SearchPage'

type Props = {
    Recipe: Recipe
}

const IngredientCard = ({Recipe}: Props) => {

    return (
        <div id={String(Recipe.id)} className="card" style={{width: "18rem"}}>
      <img src={Recipe.img} className={"card-img-top"} style={{width: "18rem"}} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{Recipe.title}</h5>
        <p className="card-text">{Recipe.description}</p>
        
        <a href="#" className="btn btn-primary">Go To Recipe</a>
      </div>
    </div>
      )
}

  


export default IngredientCard