import React, { createContext, useContext, useState, useEffect } from 'react'
//need to add total, quantity, and possibly a removal/delete option
//maybe an action inside here that will push it up to the restaurant context...?

const CartContext = createContext({
  productLines: [],
  addProductLine: () => {},
})

export const Cart = ({ children }) => {
  const [productLines, setProductLines] = useState([])

  const addProductLine = (product) => {
    setProductLines([...productLines, product])
  }

  return (
    <CartContext.Provider value={(productLines, addProductLine)}>{children}</CartContext.Provider>
  )
}

//this is the custom hook
export const useCart = () => {
  return useContext(CartContext)
}
