
import React,{useState,useEffect, createContext} from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import { UserContext } from '../App';
import { getAllUser } from './admin';
import { isAutheticated } from './backend';
import Base from './Base'


export const defaultImage="https://phantom-marca.unidadeditorial.es/df656b39c5cc15a3b3feb71b9854b122/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/11/16366385149173.jpg";

function Shop() {

    const userContext=React.useContext(UserContext);
    //destructuing
    const {userCart,setUserCart}= userContext;


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

    console.log(userCart)
   const handleCart=(user)=>{
     setUserCart([...userCart,user])
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


       <Row xs={1} md={2} className="g-4">
  {userList&& userList.map((user, idx) => (
    <Col key={user.id}>
      <Card style={{marginTop:"20px"}}>
        <Card.Img variant="top" src={user.userUrl?user.userUrl:defaultImage} />
        <Card.Body>
          <Card.Title style={{textAlign:'center'}}>{user.firstName}  { user.lastName}</Card.Title>
          <h2 style={{textAlign:"center",textDecorationLine: user.firstName==="Nab"?"line-through":""}}>Price: ${"99.00"} only</h2>
          <div className="card_button" style={{textAlign:'center'}}>
          {/* product.quantity===0? "Out of Stock"*/}
              <Button disabled={user.firstName==="Nab"?true:false} variant={user.firstName==="Nab"?'danger':"primary"}  onClick={()=>handleCart(user)}> {user.firstName==="Nab"?'Out Of Stock':'Add to Cart'} </Button>
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