import React, { useContext } from "react";
import Base from "./Base";
import { UserContext } from "./context/UserContext";


function Home() {
  
  return (
    <Base>
      <div className="app-home">
        <h1>This is home page</h1>
        
      </div>
    </Base>
  );
}

export default Home;
