//Here we'll write the whole logic related to the add to basket button and the changes we will see
import React from "react";

export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for above action
      return {
        ...state,
        basket: [...state.basket, action.item]
      };

    case "REMOVE_FROM_BASKET":
      //logic to remove item from basket
      return { state };
      break;

    default:
      return state;
  }
}
export default reducer;
