import React, { useState } from 'react'
import { uuid } from 'uuidv4'

const Connexion = () => {

  const [inputValueName, setInputValueName] = useState('')
  const submit = e => {
    e.preventDefault()
   
  }
  const [inputValuePassWord, setInputValuePassWord] = useState('')
  const submit = e => {
    e.preventDefault()
  }



  return (
    <div>
      <span>Connexion</span>
      <form onSubmit={submit}>
        <label> Login </label>
        <input
          value={inputValueName}
          onChange={e => setInputValueName(e.target.value)}
          type='text'
        ></input>
         <label> Password </label>
        <input
          value={inputValuePassWord}
          onChange={e => setInputValuePassWord(e.target.value)}
          type='text'
        ></input>
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default Connexion
