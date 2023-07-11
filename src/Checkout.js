import React from "react";
import { useStateValue } from "./StateProvider";

import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      {basket?.length === 0 ? (
        <div> 
          <h2>your shopping basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2> your shopping Basket</h2>
          {/* List out all of the checkout Products */}
          {basket.map(item => 
            (
            <CheckoutProduct 
              id = {item.id}
              title={item.title}
              image= {item.image}
              price= {item.price}
              rating= {item.rating}
            />
          )
      )} 
         
        </div>
      )}
    </div>
  );
}
 
export default Checkout;
