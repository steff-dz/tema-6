import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const PageMenu = () => {
  return (
    <HeaderBase>
      <Link href="/">
        <h1>B.</h1>
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
    /* position: absolute;
    top: -5%; */
    /* display: inline; */

    height: fit-content;
  }
`
export default PageMenu
