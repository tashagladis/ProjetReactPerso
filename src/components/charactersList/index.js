import React from 'react'

const CharactersList = ({ list, component: Component }) => {
  return (
    <div>
      <h1>PERSONNAGES</h1>
      {list.map(element => (
        <Component element={element}></Component>
      ))}
    </div>
  )
}

export default CharactersList
