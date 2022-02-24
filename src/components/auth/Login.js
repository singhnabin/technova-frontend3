import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap'
import Base from '../Base';
import { logUsers } from '../backend'
import { Redirect } from 'react-router-dom';


function Login() {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: ""
  });
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState('');

  const handleEmail = (e) => {
    // const  = ;
    setLoginUser({ ...loginUser, email: e.target.value })
  }

  const handlePassword = (e) => {
    // const  = ;
    setLoginUser({ ...loginUser, password: e.target.value })
  }
  const doRedirect = () => {
    return <Redirect to='/' />
  }
  const handleClick = () => {
    setError('');
    logUsers(loginUser).then(data => {
      if (data.statusCode === 200) {
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(data.data));
          setRedirect(true);
        }

      } else {
        setError(data.errors)

      }

    }).catch(error => {
      console.log(error);

    }
    )
  }

  return (
    <Base>
      <div className='app-login'>
        {redirect && doRedirect()}
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              {error && <Alert variant={"danger"}>
                {error}



              </Alert>}

              <Form>
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

                <Button variant="primary" type="button"
                  onClick={handleClick}
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
