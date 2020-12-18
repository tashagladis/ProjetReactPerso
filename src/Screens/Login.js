
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


const Login = () => {

    const [formState, setFormState] = useState({username: '', password:''})
    const history = useHistory()
    const [errorMessage, setErrorMessage ] = useState('')
    
useEffect(() => {
    console.log(formState)
})
const submit = e => {
        e.preventDefault()

        if(!formState.username || !formState.password){
            setErrorMessage("Les champs ne doivent pas etre vide")
            return
        }


    
axios({
    method: 'POST',
    url: 'https://easy-login-api.herokuapp.com/users/login',
    data: {
        username: formState.username,
        password: formState.password
    }
   
})
    .then(res => {
        localStorage.setItem('token', res.headers['x-access-token'])
        history.push('/home')
    })
    .catch(err => {
        setErrorMessage('Une erreur est survenu, veuillez entrer a nouveau vos identifiants')
        console.log(err)
    })
      }

    return (
        <StyledForm onSubmit = {submit}>
            <StyledSpan>Signin</StyledSpan>
            <SigninInput
            placeholder = 'username'
            onChange = {e => setFormState({...formState, username: e.target.value})}>
            </SigninInput>
            <br></br>
            <SigninInput
            placeholder = 'password'
            onChange = {e => setFormState({...formState, password: e.target.value})}>
            </SigninInput>      
            <StyledSpan>{errorMessage}</StyledSpan>
            <SigninInput type='submit'></SigninInput>

        </StyledForm>
    );
};
const StyledForm = styled.form`
display: flex;
flex-direction: column;
`
const StyledSpan = styled.span`
background-color: white;
margin-bottom: 30px;

`
const SigninInput = styled.input`
background-color: white;
width: 300px;
border-radius: 5px;

`


export default Login;

