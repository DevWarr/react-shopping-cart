import React, { useState } from "react"
import { Route } from "react-router-dom"
import data from "./data"

// Context
import { ProductContext, CartContext } from "./context"

// Components
import Navigation from "./components/Navigation"
import Products from "./components/Products"
import ShoppingCart from "./components/ShoppingCart"

function App() {
    const [products] = useState(data)
    const [cart, setCart] = useState([])

    const addItem = item => {
        // add the given item to the cart
        setCart([...cart, item])
    }

    return (
        <ProductContext.Provider value={{ products, addItem }}>
            <CartContext value={cart}>
                <div className="App">
                    <Navigation cart={cart} />

                    {/* Routes */}
                    <Route exact path="/" component={Products} />

                    <Route
                        path="/cart"
                        render={() => <ShoppingCart cart={cart} />}
                    />
                </div>
            </CartContext>
        </ProductContext.Provider>
    )
}

export default App
