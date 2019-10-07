import React from "react";
import Item from "../ShoppingCartItem"
import { render, fireEvent } from "@testing-library/react";

test("<Item/> loads properly when passed props", () => {
    const product = {title: "John's", price: "12.99"}
    const cons = () => console.log("click")
    const shoppingItem = render(<Item {...product} removeItem={cons}/>)

    shoppingItem.getByText(/john/i)
    shoppingItem.getByAltText(/john/i)
    shoppingItem.getByText(/12\.99/i)
    const button = shoppingItem.getByText(/remove/i)
    fireEvent.click(button)
})