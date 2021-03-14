import React, { createContext, useContext, useState, useEffect } from 'react'
//need to add total, quantity, and possibly a removal/delete option
//maybe an action inside here that will push it up to the restaurant context...?
//Would there be a way to gather all the carts going on for a possible restaurant context, or should I possibly push these orders to a collection in firebase, and if it is being pushed to a collection in firebase, should it be firestore or realtime database?

const CartContext = createContext({
  productLines: [],
  addProductLine: () => {},
  quantity: 0,
  total: 0,
})

export const Cart = ({ children }) => {
  const [productLines, setProductLines] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  //function to add more products to cart
  const addProductLine = (product) => {
    setProductLines([...productLines, product])
  }

  //keeping track of total price and quantity of all items.
  useEffect(() => {
    const total = productLines.reduce((prev, curr) => {
      return prev + curr.price
    }, 0)
    const qty = productLines.reduce((prev, curr) => {
      return prev + curr.qty
    }, 0)
    setQuantity(qty)

    //setQuantity(productLines.length)
  }, [productLines])

  return (
    <CartContext.Provider
      value={{ productLines, setProductLines, addProductLine, quantity, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

//this is the custom hook
export const useCart = () => {
  return useContext(CartContext)
}
