import React from "react"
import { render, fireEvent } from "@testing-library/react"
import data from "../../data"
import Products from "../Products"
import { ProductContext } from "../../context"

test("<Products/> loads properly, with smaller products being displayed", () => {
    const products = data
    const addItem = () => console.log("HEYYO")
    const tree = (
        <ProductContext.Provider value={{ products, addItem }}>
            <Products />
        </ProductContext.Provider>
    )
    const productsC = render(tree);

    productsC.getByText(/Art of War/i)
    productsC.getByText(/Civilization/i)
    productsC.getByText(/Influence/i)
    productsC.getByText(/Grokking/i)
    const button = productsC.getAllByText(/Add to cart/i)[0]
    fireEvent.click(button)

})
