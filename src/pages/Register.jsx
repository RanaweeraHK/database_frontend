import React, { useState } from 'react';
import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import registerImg from '../assets/images/plane_Register.jpg';
import { FcGoogle } from 'react-icons/fc';
import '../styles/register.css';

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row>
        <Col lg="8" className="m-auto">
          <div
            className="reg__container d-flex justify-content-between"
            style={{ backgroundImage: `url(${registerImg})` }}
          >
            <div className="reg__form">
              <h2>Register</h2>
              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    id="box"
                    onChange={handleChange}
                    style={{ '::placeholder': { color: 'black' } }}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    id="box"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    id="box"
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button className="btn secondary__btn auth__btn" type="submit">
                  Create Account
                </Button>
                <Button className="btn google__btn auth__btn " type="submit">
                  <FcGoogle />
                  Sign up with Google
                </Button>
              </Form>
              <p>
                Already have an account?<Link to="/login">Login </Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

