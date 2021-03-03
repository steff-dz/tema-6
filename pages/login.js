import React from 'react'
import styled from 'styled-components'
import PageMenu from '../components/PageMenu'
import { Wrapper } from '../components/Wrapper'
import InputBlock from '../components/InputBlock'
import Link from 'next/link'

const Login = () => {
  return (
    <>
      <PageMenu />
      <Wrapper>
        <PageTitle>Log in here!</PageTitle>
        <FormBase name="login-form">
          <InputBlock
            inputName="user-email"
            inputId="user-email"
            inputType="email"
            inputPlaceholder="your email"
            labelText="Email:"
          />
          <InputBlock
            inputName="password"
            inputId="password"
            inputType="password"
            inputPlaceholder="your pasword"
            labelText="Password:"
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

const PageTitle = styled.h2`
  color: white;
  font-size: 3rem;
`

const FormBase = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;

  label {
    font-size: 2rem;
  }

  input {
    padding: 0.5rem;
  }
`

export default Login
