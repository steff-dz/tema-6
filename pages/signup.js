import React, { useState } from 'react'
import firebaseInstance from '../config/firebase'
import styled from 'styled-components'
import PageMenu from '../components/PageMenu'
import { Wrapper } from '../components/Wrapper'
import { PageTitle } from '../components/PageTitle'
import { FormBase } from '../components/FormBase'
import InputBlock from '../components/InputBlock'

const SignUp = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  function handleNameChange(e) {
    setUserName(e.target.value)
  }

  function handleEmailChange(e) {
    setUserEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setUserPassword(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await firebaseInstance.auth().createUserWithEmailAndPassword(userEmail, userPassword)
      console.log('you made a new user!', userEmail, userPassword)
    } catch (e) {
      console.log('you failed!', e)
    }

    setUserName('')
    setUserEmail('')
    setUserPassword('')
  }

  return (
    <>
      <PageMenu />
      <Wrapper>
        <PageTitle>Sign Up Form</PageTitle>
        <FormBase name="sign-up" action="/" method="GET" onSubmit={(e) => handleSubmit(e)}>
          <InputBlock
            inputName="user-name"
            inputId="user-name"
            inputType="text"
            inputPlaceholder="your name"
            labelText="Your Name:"
            value={userName}
            inputChangeHandler={(e) => handleNameChange(e)}
          />
          <InputBlock
            inputName="user-email"
            inputId="user-email"
            inputType="email"
            inputPlaceholder="your email"
            labelText="Email:"
            value={userEmail}
            inputChangeHandler={(e) => handleEmailChange(e)}
          />
          <InputBlock
            inputName="password"
            inputId="password"
            inputType="password"
            inputPlaceholder="your pasword"
            labelText="Password:"
            value={userPassword}
            inputChangeHandler={(e) => handlePasswordChange(e)}
          />
          <button>Submit</button>
        </FormBase>
      </Wrapper>
    </>
  )
}

export default SignUp
