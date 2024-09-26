import React from 'react'
import Card from '../card/card'

interface Props {}

const CardList: React.FC<Props> = (props: Props):JSX.Element => {
  return (
    <div className="card-list">
<Card RecipeName='RecipeName' Ingredients='Ingredients' time='time' img='img'/>
 

    </div>
  )
}

export default CardList

