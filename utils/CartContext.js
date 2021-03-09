import React, { createContext, useContext, useState, useEffect } from 'react'
//need to add total, quantity, and possibly a removal/delete option

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

export const useCart = () => {
  return useContext(CartContext)
}
