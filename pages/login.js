import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import PageMenu from '../components/PageMenu'
import { Wrapper } from '../components/Wrapper'
import { PageTitle } from '../components/PageTitle'
import { FormBase } from '../components/FormBase'
import InputBlock from '../components/InputBlock'
import Link from 'next/link'
import firebaseInstance from '../config/firebase'
import { useAuth } from '../utils/auth'

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const user = useAuth()

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

      //Put a re-route back to home page or menu here!
    } catch (error) {
      console.log(error, 'you failed sucka!')
    }

    setLoginEmail('')
    setLoginPassword('')
  }

  return (
    <>
      <PageMenu title={'B.'} />
      <MainBase>
        <Wrapper>
          <PageTitle>{user ? `You're all set! ` : `Log in here !`}</PageTitle>
          <FormBase
            className={user ? 'hide' : ''}
            name="login-form"
            action="/"
            method="GET"
            onSubmit={(e) => handleSubmit(e)}
          >
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
          </FormBase>

          <MessageContainer>
            <PageTitle className={user ? 'hide' : ''} as="h3">
              Not signed up?
            </PageTitle>
            <Link href={user ? `/menu` : `/signup`}>
              <button>{user ? 'Get some grub' : 'Register'}</button>
            </Link>
          </MessageContainer>
        </Wrapper>
      </MainBase>
    </>
  )
}

const MainBase = styled.main`
  border: 1px solid grey;

  .hide {
    display: none;
  }
`

const MessageContainer = styled.article`
  width: 100%;
  button {
    width: 100%;
  }
`

export default Login
