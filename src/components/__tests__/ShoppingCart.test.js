import React from "react"
import { render } from "@testing-library/react"
import data from "../../data"
import ShoppingCart from "../ShoppingCart"
import { CartContext } from "../../context"

test("<Shoppingcart/> loads properly - with smaller items, and with a proper running total", () => {
    const cart = data
    const removeItem = () => console.log("HEYYO")
    const tree = (
        <CartContext.Provider value={{ cart, removeItem }}>
            <ShoppingCart />
        </CartContext.Provider>
    )
    const Cart = render(tree);

    Cart.getByText(/Art of War/i)
    Cart.getByText(/Civilization/i)
    Cart.getByText(/Influence/i)
    Cart.getByText(/Grokking/i)
    Cart.getByText(/75\.38/i)

})
