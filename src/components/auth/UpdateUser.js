import React, { useState, useEffect } from 'react';
import Base from '../Base';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CustomAlerts from '../CustomAlerts';
import { getUserById, isAutheticated, updateUser } from '../backend';
import { useHistory } from 'react-router-dom';



function UpdateUser(props) {
    const history = useHistory();
    const isLoggedIn = isAutheticated();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",

    })

    const [message, setMessage] = useState("")
    const [error, setError] = useState('');



    const handleFirstName = event => {
        const firstName = event.target.value
        setUser({ ...user, firstName: firstName })
    }

    const handleLastName = event => {
        const lastName = event.target.value
        setUser({ ...user, lastName: lastName })
    }

    const handleEmail = event => {
        const email = event.target.value
        setUser({ ...user, email: email })
    }
    useEffect(() => {
        getUserById(props.match.params.userId, isLoggedIn.token).then(res => {
            if (res.statusCode === 200) {
                setUser({ ...user, firstName: res.data.firstName, lastName: res.data.lastName, email: res.data.email })
            }
        }).catch(err => {
            console.log(err)
        })

    }, [])



    const handleClick = () => {
        setMessage('');
        setError("")
        updateUser(user, props.match.params.userId, isLoggedIn.token).then(res => {
            if (res.statusCode === 200) {
                history.push('/admin');
                setMessage(res.message)

            } else {
                setError(res.errors)
            }
        }).catch(err => {
            console.log(err)
        })

    }



    return (
        <Base>
            <Container>

                <Row>

                    <Col md={{ span: 6, offset: 3 }}>
                        {/* {loading} */}

                        {/* display error message */}
                        {message && <CustomAlerts info={message} color="success" />}
                        {error && <CustomAlerts info={error} color="danger" />}


                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter First Name"
                                    value={user.firstName}

                                    onChange={handleFirstName}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter lastname"
                                    onChange={handleLastName}
                                    value={user.lastName}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={user.email}
                                    onChange={handleEmail}
                                />
                            </Form.Group>



                            <Button variant="outline-info" type="button"
                                onClick={handleClick}
                            >
                                Submit
            </Button>
                        </Form>
                    </Col>

                </Row>
            </Container>
        </Base>
    )
}

export default UpdateUser;