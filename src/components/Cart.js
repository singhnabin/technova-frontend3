import React, { useState,Fragment, useEffect } from 'react'
import { Col, Container, Row ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../App'
import Base from './Base'

function Cart() {
    const userContext=React.useContext(UserContext);
    const {userCart,setUserCart}= userContext;
    const [quantity,setQuantity]=useState(1);
    // const [total,setTotal]=useState(0);
    const [cartValue,setCartValue]=useState([...userCart])

    const shopWithUs=()=>{
      return <h3 style={{textAlign:'center',marginTop:'10px'}} >Your cart is empty. Please <Link to="/shop">shop</Link> with us. </h3>
    }
    
   
    useEffect(()=>{
      // cartValue.forEach((cart)=>cart.quantity=1);
    },[quantity])

    const getTotal=()=>{
      let total= 0.00;
  
      userCart.forEach((user)=>{
        total+=user.price*user.quantity
      })
      return total;
    }

   const getSubTotal=()=>{
     let total= 0.00;
  
      userCart.forEach((user)=>{
        total+=user.price*user.quantity
      })
      return total+(0.1*total);
    
   }
  return (
   <Base>
   <div className="cart" style={{marginTop:'20px'}}>
   <hr/>
   <h1 style={{textAlign:'center'}}>Your Cart</h1>
   <hr/>

<Container >
          <Row>
          <Col md={{ span: 8, offset: 2 }}>
          {userCart.length>0&&
          <Fragment>
          <div style={{display:'flex',justifyContent:'space-evenly'}}>
      <p>Product Name</p>
      <p>Product Price</p>
      <p>Product Quantity</p>
      <p>Product Total</p>
    </div>
{userCart&&userCart.map((user)=>{
       return(
       <Fragment key={user.id}>
    <hr/>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
      <p>{user.firstName}</p>
      <p>${user.price}</p>
      <p>{user.quantity}</p>
      <p>${user.price*user.quantity}</p>
    </div>
    </Fragment>)
   
       

   })}
   <hr/>
   
   <div style={{textAlign:'right'}}> 
   <h1 style={{marginBottom:"10px"}}> Price Total: ${getTotal()}</h1>
<hr/>

      <h1 style={{marginBottom:"10px", marginBottom:"20px"}}> Sub Total: ${getSubTotal()}</h1>
      <Button variant='outline-info'>Place your order</Button>
      </div>
     </Fragment>}
     
 
    {userCart.length===0&&shopWithUs()}
    </Col>
  </Row>
       </Container>
  

   </div>
   
   

   </Base>
  )
}

export default Cart