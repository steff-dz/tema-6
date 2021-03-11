import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const PageMenu = ({ title }) => {
  return (
    <HeaderBase>
      <Link href="/">
        <h1>{title}</h1>
      </Link>
    </HeaderBase>
  )
}

const HeaderBase = styled.header`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;

  overflow: hidden;

  h1 {
    font-family: 'Pacifico', cursive;
    color: #ffba6a;
    font-size: 5.5rem;
    height: fit-content;

    @media only screen and (max-width: 380px) {
      font-size: 5rem;
    }
  }
`
export default PageMenu
