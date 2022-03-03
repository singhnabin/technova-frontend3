import React from 'react';

const initialState={
    cart:[]
}
export const CART_ACTION={
    ADD:"ADD",

}
// export const UserContext=React.createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case CART_ACTION.ADD:
        console.log(action)
      return [...state,action.payload]
     default:
         return state;
  }
 

};