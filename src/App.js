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
	const removeItem = itemID => {
		const newCart = cart.filter(product => product.id !== itemID)
		setCart(newCart)
	}

    return (
        <ProductContext.Provider value={{ products, addItem }}>
            <CartContext.Provider value={{ cart, removeItem}}>
                <div className="App">
                    <Navigation />

                    {/* Routes */}
                    <Route exact path="/" component={Products} />

                    <Route
                        path="/cart"
                        render={() => <ShoppingCart />}
                    />
                </div>
            </CartContext.Provider>
        </ProductContext.Provider>
    )
}

export default App
