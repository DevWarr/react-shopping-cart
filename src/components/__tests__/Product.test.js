import React from "react";
import Product from "../Product"
import { render } from "@testing-library/react";

test("<Product/> loads properly when passed props", () => {
    const product = {title: "John's", price: "12.99"}
    const productC = render(<Product product={product}/>)

    productC.getByText(product.title)
    productC.getByAltText(/john/i)
    productC.getByText(/12\.99/i)
})