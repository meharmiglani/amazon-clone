import * as actionTypes from './actionTypes';

export const initialState = {
  basket: [],
  user: null,
};

//Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case actionTypes.REMOVE_FROM_BASKET:
      const idx = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (idx != -1) {
        newBasket.splice(idx, 1);
      }

      return {
        ...state,
        basket: newBasket,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
