import React from "react";
import "./Prduct.css";
import { useStateValue } from "./StateProvider";


function Prduct({ id, title, image, price, rating }) {
  
  const [{basket}, dispatch] = useStateValue();
  
  const addToBasket = () => {
        //Add item to basket
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
          }
        })
  };


  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p>{id}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <p id="pimg">{image}</p>
      {/* <img src={image} /> */}

      <button className="p_button" onClick={addToBasket}>Add to Basket</button>
         
        
       
    </div>
  );
}

export default Prduct;
