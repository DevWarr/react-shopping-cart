import React from "react"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import data from "../../data"
import Navigation from "../Navigation"
import { CartContext } from "../../context"

test("<Navigation/> loads properly - Links and Cart total", () => {
    const cart = data
    const tree = (
        <BrowserRouter>
            <CartContext.Provider value={{ cart }}>
                <Navigation />
            </CartContext.Provider>
        </BrowserRouter>
    )
    const Cart = render(tree)

    Cart.getByText(/Products/i)
    Cart.getByText(/Cart/i)
    Cart.getByText(/4/i)
})
