import React from 'react'
import styled from 'styled-components'

const InputBlock = ({ inputId, labelText, inputType, inputName, inputPlaceholder, inputText }) => {
  return (
    <>
      <label htmlFor={inputId}>{labelText}</label>
      <input type={inputType} name={inputName} id={inputId} placeholder={inputPlaceholder} />
    </>
  )
}

export default InputBlock
