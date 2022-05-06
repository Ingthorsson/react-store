import React from "react";
//import { useState } from "react";
import { IoShirtOutline } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import CartContext from '../CartContext';
import { useContext } from 'react';

function Card({ id, name, price }) {

    const { addToCart } = useContext(CartContext);

    return (
        <div onClick={() => addToCart(id, name, price)} className="card">
            <div className="product-box">
                <IoShirtOutline />
            </div>
            <div className="purchase">
                <h3>{name}</h3>
                <AiFillShopping />
            </div>
            <h4>${price}</h4>
        </div>
    )
}

export default Card;