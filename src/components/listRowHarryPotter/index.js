import React from 'react'
import Avatar from '../avatar'

const ListRow = ({ element }) => {
  return (
    <div>
      <Avatar url={element.image}></Avatar>
      <p>{element.name}</p>
    </div>
  )
}

export default ListRow
