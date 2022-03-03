import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import React,{useReducer, useState} from 'react';
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Home from "./components/Home";
import AdminControl from "./components/admin/AdminControl";
import UpdateUser from "./components/auth/UpdateUser";


import Shop from "./components/Shop";
import Cart from "./components/Cart";

export const UserContext=React.createContext();



function App() {
 const [userCart,setUserCart]=useState([]);
 
console.log(userCart)
  return <div className="app">

    <BrowserRouter>
      <Switch>
      <UserContext.Provider value={{userCart,setUserCart}}>

        <Route exact path="/" component={Home} />
        <Route exact path='/shop' component={Shop}/>
        <Route exact path="/cart" component={Cart} />
       <Route exact path="/admin" component={AdminControl} />
        <Route exact path="/update/user/:userId" component={UpdateUser} />
        </UserContext.Provider>
        {/* <Route exact path="/product/create/id" component={AddProduct} /> */}
        

 <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        {/* admin route */}
        {/* <Route exact path="/admin" component={Index}></Route> */}
      </Switch>
    </BrowserRouter>
   
  </div>
}

export default App;
