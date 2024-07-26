

import {useContext} from "react";

import { CartContext } from "../context/Cart";


const Item = (props) => {
   
    const cart = useContext(CartContext);
   
    console.log(cart);

  return (
    <div className='item-div'> 

       <h2>{props.name}</h2>
       <p>Price : $ {props.Price}</p>
       <button
          onClick={()=>{
           cart.setItem(
              [...cart.item,{name :props.name ,Price : props.Price , id : props.id}

              ]
           )
          }}
       >Add to Cart</button>

    </div>
  )
}

export default Item