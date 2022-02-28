import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Base from '../Base'
import { createUser } from '../backend'
import CustomAlerts from '../CustomAlerts'

function SignUp() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
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

  const handlePassword = event => {
    const pass = event.target.value
    setUser({ ...user, password: pass })
  }

  const handleClick = () => {
    setMessage('');
    setError("")
    createUser(user).then(data => {
      if (data.statusCode === 201) {
        setMessage(data.message)

      } else {
        setError(data.errors)
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

                  onChange={handleFirstName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter lastname"
                  onChange={handleLastName}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleEmail}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handlePassword}
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

export default SignUp
