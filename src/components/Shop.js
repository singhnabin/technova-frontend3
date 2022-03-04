
import React,{useState,useEffect, createContext} from 'react'
import { Container,Row,Col,Card,Button, Form } from 'react-bootstrap'
import { UserContext } from '../App';
import { getAllUser } from './admin';
import { isAutheticated } from './backend';
import Base from './Base'
import CustomAlerts from './CustomAlerts';


export const defaultImage="https://phantom-marca.unidadeditorial.es/df656b39c5cc15a3b3feb71b9854b122/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/11/16366385149173.jpg";

function Shop() {

    const userContext=React.useContext(UserContext);
    //destructuing
    const {userCart,setUserCart}= userContext;
    const [message,setMessage]=useState({error: '',info:''
  })

   const [quantity,setQuantity]=useState(1);


     const [userList, setUserList] = useState([]);
     const isLoggedIn = isAutheticated();
     const [userLength, setUserLength] = useState(0);
       useEffect(() => {
        getAllUser(isLoggedIn.token).then(res => {
            if (res.statusCode === 200) {
                setUserList(res.data);
                setUserLength(userList.length)
            }
        }

        ).catch(err => {
            console.log(err)
        })

    }, [userLength])

  
   const handleCart=(user)=>{
      // setMessage({...message,error:'',info:''})
      console.log(user)
     const userExist=userCart.find(users=>users.id===user.id);
     if(!userExist){
       user.price=99
       user.quantity=quantity;
       setUserCart([...userCart,user])
       setMessage({...message,info:'Succeessfully added to the cart',error:''})
       setQuantity(1);
     } else{
         setMessage({...message,error:'Already added to the cart',info:''})
     }
    
   }

   const handleQuantity=id=>e=>{
 setMessage({...message,error:'',info:''})
     const quan=parseInt(e.target.value);
    const quantityAvailable=userList.find(user=>user.id===id);
    quantityAvailable.quantity=7
  
  if(quan>quantityAvailable.quantity){
    setMessage({...message,error:`Only ${quantityAvailable.quantity} are available`,info:''})
  }
     setQuantity(quan)
     
   }

  return (
    //   <UserContext.Consumer>
    //       <CreateContext.Consime>

    //       </CreateContext.Consime>
    //   </UserContext.Consumer>
    <Base>
      <div className="shop">
      <Container fluid>
      <hr/>
      <h1 style={{textAlign:"center"}}>Shop with Us</h1>
      <hr/>

{message.info&&<CustomAlerts info={message.info} color='success'/>}
{message.error&&<CustomAlerts info={message.error} color='danger'/>}
       <Row xs={1} md={2} className="g-4">
  {userList&& userList.map((user, idx) => (
    <Col key={user.id}>
      <Card style={{marginTop:"20px"}}>
        <Card.Img variant="top" src={user.userUrl?user.userUrl:defaultImage} />
        <Card.Body>
          <Card.Title style={{textAlign:'center'}}>{user.firstName}  { user.lastName}</Card.Title>
          <h2 style={{textAlign:"center",textDecorationLine: user.firstName==="Nab"?"line-through":""}}>Price: ${"99.00"} only</h2>
          <div className="card_button" style={{textAlign:'center'}}>
           <h3> Quantity:  <Form.Control style={{width:"80px", display:'inline'}}
                  type="number"
                  placeholder='1'

                  onChange={handleQuantity(user.id)}
                /></h3>
          {/* product.quantity===0? "Out of Stock"*/}
              <Button disabled={user.firstName==="Nab"?true:false|| message.error? true: false} variant={user.firstName==="Nab"?'danger':"primary"}  onClick={()=>handleCart(user)}> {user.firstName==="Nab"?'Out Of Stock':'Add to Cart'} </Button>
            
          </div>
        </Card.Body>
      </Card>
    </Col>
    
  ))}
</Row>
</Container>
      </div>
    </Base>
  )
}

export default Shop