import React from 'react'
import { UserContext } from '../App'
import Base from './Base'

function Cart() {
    const userContext=React.useContext(UserContext);
    const {userCart,setUserCart}= userContext;
    console.log(userCart)
  return (
   <Base>
   <h1>This is cart page</h1>
   {userCart&&userCart.map((user)=>{
       return <p key={user.id}>{user.firstName}  {user.lastName}</p>
   })}

   </Base>
  )
}

export default Cart