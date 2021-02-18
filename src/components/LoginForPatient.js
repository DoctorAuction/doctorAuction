import React, { useRef, useState } from "react";
import { Button, Card, Form, Alert, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import db from "../server/database";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      let boo = false;
      await login(emailRef.current.value, passwordRef.current.value);
      await db
        .database()
        .ref("PatientProfile")
        .orderByKey()
        .once("value", function (snapshot) {
          snapshot.forEach((child) => {
            if (child.val().email === emailRef.current.value) {
              const childData = child.val();
              boo = childData.form;
            }
          });
        });
      if (boo === false) {
        await history.push({
          pathname: "/form",
          state: { text: emailRef.current.value },
        });
      } else {
        await history.push({
          pathname: "/patientconsulting",
          state: { text: emailRef.current.value },
        });
      }
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
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
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Button disabled={loading} className="w-100" type="submit">
                  Login
                </Button>
              </Form>
              <div className="w-1000 text-center mt-3">
                <Link to="/forgot-password">Forgot password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="signup">Sign In</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
