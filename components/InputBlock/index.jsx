import React from 'react'
import styled from 'styled-components'

const InputBlock = ({
  inputId,
  labelText,
  inputType,
  inputName,
  inputPlaceholder,
  inputTxt,
  inputChangeHandler,
  value,
}) => {
  return (
    <>
      <label htmlFor={inputId}>{labelText}</label>
      <input
        type={inputType}
        name={inputName}
        id={inputId}
        placeholder={inputPlaceholder}
        value={value}
        onChange={(e) => inputChangeHandler(e)}
      />
    </>
  )
}

export default InputBlock
