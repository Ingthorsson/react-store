import { Link } from "react-router-dom"
import { AiFillShopping } from "react-icons/ai";
import CartContext from '../CartContext';
import { useContext } from 'react';


function Nav() {

    const { items } = useContext(CartContext);
    console.log(items)

    return (
        <nav>
            <Link to={"/"}>
                <h1>Wear</h1>
            </Link>
            <Link to={"/checkout"}>
                <div className="cart">
                    <AiFillShopping />
                    <span>{items.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Nav;