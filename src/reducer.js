//Here we'll write the whole logic related to the add to basket button and the changes we will see
import React from "react";

export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return{
        ...state,
        user: action.user,

      }
    case "ADD_TO_BASKET":
      //logic for above action
      return {
        ...state,
        basket: [...state.basket, action.item]
      };

    case "REMOVE_FROM_BASKET":
      //logic to remove item from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      if(index >= 0){
        //item exist in basket and remove it
        newBasket.splice(index, 1);
       
        
      }else{
        console.warn("can't remove product (id: ${action.id})");
      }
      return { ...state, 
        basket: newBasket, 
      };
     

      
    default:
      return state;
  }
}
export default reducer;
