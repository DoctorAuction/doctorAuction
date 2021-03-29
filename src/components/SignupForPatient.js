import React, { useRef, useState } from "react";
import { Button, Card, Form, Alert, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import db from "../server/database";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      setEmail(emailRef.current.value);
      await signup(emailRef.current.value, passwordRef.current.value);
      await history.push({
        pathname: "/form",
        state: { text: email },
      });
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);

    const dataList = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      form: false,
      accepted: false,
      consult:{}
    };

    const database = db.database().ref("PatientProfile");
    database.push(dataList);

    setFirstname("");
    setLastname("");
    setEmail("");
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                    onChange={handleEmail}
                  />
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Form.Group id="first-name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" onChange={handleFirstname} />
                </Form.Group>
                <Form.Group id="last-name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" onChange={handleLastname} />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account ? <Link to="login">Log In</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
