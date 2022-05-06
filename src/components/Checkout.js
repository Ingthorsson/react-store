import React, { useContext } from "react"
import CartContext from '../CartContext';

function Checkout() {

    const { items } = useContext(CartContext);

    return (
        <div className="card">
            <h2>Checkout</h2>
            <div className="shopping-bag">
                {items.map((item) => (
                    <div key={item.id} className='checkOutItem'>
                        <h2>{item.name}</h2>
                        <h3>{item.price}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Checkout;