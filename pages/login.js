import React, { useState } from 'react'
import styled from 'styled-components'
import PageMenu from '../components/PageMenu'
import { Wrapper } from '../components/Wrapper'
import { PageTitle } from '../components/PageTitle'
import { FormBase } from '../components/FormBase'
import InputBlock from '../components/InputBlock'
import Link from 'next/link'
import { getLocationOrigin } from 'next/dist/next-server/lib/utils'

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  function handleEmailChange(e) {
    setLoginEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setLoginPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(userName, userEmail, userPassword)
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

// const PageTitle = styled.h2`
//   color: white;
//   font-size: 3rem;
// `

// const FormBase = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   color: white;

//   label {
//     font-size: 2rem;
//   }

//   input {
//     padding: 0.5rem;
//   }
// `

export default Login
