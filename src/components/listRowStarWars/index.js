import React from 'react'
import {Link} from 'react-router-dom'

const ListRowStarWars = ({ element }) => {
  console.log(element);
  return (
    <div>
      <div key={element.id}>
      <Link to={`/Detail/${element.id}`}>nom: {element.name}</Link>
      </div>
      <p>taille: {element.height} cm</p>
    </div>
  )
}

export default ListRowStarWars
