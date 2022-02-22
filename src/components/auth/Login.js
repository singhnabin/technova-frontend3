import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Base from '../Base'

function Login() {
    return (
        <Base>
        <div className='app-login'>
        <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
           
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                //   onChange={handleChange("email")}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                //   onChange={handleChange("password")}
                />
              </Form.Group>

              <Button variant="primary" type="button" 
            //   onClick={handleClick}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
            </div>
        </Base>
        
    )
}

export default Login
