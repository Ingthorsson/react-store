//import React, { useState } from "react"
import Card from "./Card";

function Products() {

    const products = [
        { name: "vest", price: 50, id: 1 },
        { name: "jacket", price: 70, id: 2 },
        { name: "sweater", price: 20, id: 3 },
        { name: "tshirt", price: 40, id: 4 },
        { name: "necklace", price: 70, id: 5 },
        { name: "jumper", price: 40, id: 6 },
    ];

    return (
        <div className="product-list">
            {products.map((product) => (
                <Card key={product.id} id={product.id} name={product.name} price={product.price} />
            ))}
        </div>
    )
}

export default Products;