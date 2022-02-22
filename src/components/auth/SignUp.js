import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Base from '../Base'

function SignUp() {
    return (
        <Base>
         <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {/* {loading} */}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                // onChange={handleFirstName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter lastname"
                // onChange={handleLastName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                // onChange={handleEmail}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                // onChange={handlePassword}
              />
            </Form.Group>

            <Button variant="primary" type="button"
            //  onClick={handleClick}
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
