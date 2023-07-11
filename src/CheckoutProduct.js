import React from 'react'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {
  
    const [{basket}, dispatch] = useStateValue();


    const removeFromBasket = () => {
      //remove item from basket
      dispatch({type: "REMOVE FROM BASKET",
       id:id,
      });
    }


  return (
    <div className='checkoutProduct'>
     <img src={image} alt=""/>

     <div className='checkoutProduct__info'>
      <p className='checkoutProduct__title'>{title}
           <small>$</small>
           <strong>{price}</strong>
      
      </p>
      <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>
     </div>
      
    </div>
  )
}

export default CheckoutProduct
