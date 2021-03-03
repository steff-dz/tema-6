import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const PageMenu = () => {
  return (
    <HeaderBase>
      <Link href="/">
        <div>
          <h1>B.</h1>
        </div>
      </Link>
    </HeaderBase>
  )
}

const HeaderBase = styled.header`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;

  div {
    h1 {
      font-family: 'Pacifico', cursive;
      font-size: 5.5rem;
      color: #ffba6a;
    }
  }
`
export default PageMenu
