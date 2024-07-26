
import {useContext} from "react";

import { CartContext } from "../context/Cart";





const Cart = () => {

    const cartItemsObj = useContext(CartContext);

    const cartItems= cartItemsObj.item;

    const totalAmount = cartItems.reduce((total, item) => total + parseInt(item.Price), 0);

    console.log(cartItems);


  return (

    <>
    <>
      <div>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}> {item.name} </li>
          ))}
        </ul>

        <h3>Total Amount = ${totalAmount}</h3>
      </div>
    </>

    </> 
  )
}

export default Cart