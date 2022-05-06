import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({children}) {

    const [items, saetItems] = useState([]);

    const addToCart = (id, name,price) => {
        saetItems((prevState) => [...prevState, { id, name, price }])
    }

    return (
        <CartContext.Provider value={{  items, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;