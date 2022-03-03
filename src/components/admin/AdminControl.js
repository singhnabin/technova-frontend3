import React, { useState, useEffect, useContext } from 'react';
import Base from '../Base';
import { Row, Col, Table, Container, Button } from 'react-bootstrap';
import { getAllUser, deleteUser } from './index';
import { isAutheticated } from '../backend';
import CustomAlerts from '../CustomAlerts';
import { Link } from 'react-router-dom';
import {  UserContext } from '../context/UserContext';

function AdminControl() {
    // const {cartContext,cartDispatch}= useContext(UserContext);
    const [userList, setUserList] = useState([]);
    const isLoggedIn = isAutheticated();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
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

const addToCart=(user)=>{
   // cartDispatch({type:'ADD',payload:user});
    // setCartIte
}

    const handleDelete = userId => {

        console.log("i am clicked "+userId)
        // deleteUser(userId, isLoggedIn.token).
        //     then(res => {

        //         if (res.statusCode === 200) {
        //             setMessage(res.message)
        //             setUserLength(userLength - 1);

        //         } else {
        //             setError(res.errors)
        //         }
        //     }

        //     ).catch(err => {
        //         console.log(err)
        //     })
    }


    return (
        <Base>
            <Container fluid="md">
                <Row>
                    <Col>
                        {/* display error message */}
                        {message && <CustomAlerts info={message} color="success" />}
                        {error && <CustomAlerts info={error} color="danger" />}

                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>S.N</th>
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    userList.map((user, index) => {
                                        return (<tr key={user.id}>
                                            <td>{index + 1}</td>
                                            <td>{user.id}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <Link to={`/update/user/${user.id}`}><Button variant="outline-info">Update</Button></Link>
                                                {"     "}
                                                <Button variant="outline-danger" onClick={()=>handleDelete(user.id)}>Delete</Button>
                                               {'    '}
                                                {/* <Button variant="outline-danger" onClick={()=>addToCart(user)}>ADD</Button> */}
                                            </td>
                                        </tr>)
                                    }

                                    )
                                }


                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </Base>
    );
}

export default AdminControl;