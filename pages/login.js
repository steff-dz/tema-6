import React, { useState, useContext } from 'react'
//import { LoginContext } from '../utils/status'
import styled from 'styled-components'
import PageMenu from '../components/PageMenu'
import { Wrapper } from '../components/Wrapper'
import { PageTitle } from '../components/PageTitle'
import { FormBase } from '../components/FormBase'
import InputBlock from '../components/InputBlock'
import Link from 'next/link'
import firebaseInstance from '../config/firebase'

const Login = () => {
  //const { loggedIn, setLoggedIn } = useContext(LoginContext)

  //const { user, setUser } = useAuth()

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  //needs to be the same as when you defined the state for the Context

  function handleEmailChange(e) {
    setLoginEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setLoginPassword(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(loginEmail, loginPassword)
    try {
      await firebaseInstance.auth().signInWithEmailAndPassword(loginEmail, loginPassword)

      console.log('you are signed in!')
      //Put a re-route back to home page or menu here!
      //setLoggedIn(true)
    } catch (error) {
      console.log(error, 'you failed sucka!')
    }

    setLoginEmail('')
    setLoginPassword('')
  }

  return (
    <>
      <PageMenu />
      <Wrapper>
        <PageTitle>Log in here!</PageTitle>
        <FormBase name="login-form" action="/" method="GET" onSubmit={(e) => handleSubmit(e)}>
          <InputBlock
            inputName="user-email"
            inputId="user-email"
            inputType="email"
            inputPlaceholder="your email"
            labelText="Email:"
            value={loginEmail}
            inputChangeHandler={(e) => handleEmailChange(e)}
          />
          <InputBlock
            inputName="password"
            inputId="password"
            inputType="password"
            inputPlaceholder="your pasword"
            labelText="Password:"
            value={loginPassword}
            inputChangeHandler={(e) => handlePasswordChange(e)}
          />
          <button>Submit</button>

          <PageTitle as="h3">Not signed up?</PageTitle>
          <Link href="/signup">
            <button>Register</button>
          </Link>
        </FormBase>
      </Wrapper>
    </>
  )
}

//<button onClick={() => setLoggedIn(true)}

export default Login
//  {loggedIn ? <h4>You are logged in!</h4> : <h4>You are NOT logged in!</h4>}
//{loggedIn ? <h4>You are logged in!</h4> : <h4>You are NOT logged in!</h4>}
