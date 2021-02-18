import React, { useState } from "react";
import { Card, Button, Alert, Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Home.css";
import img1 from "../image/how-to-find-a-doctor-in-croatia.jpg";
import img2 from "../image/patient.jpg";

export default function Dashboard() {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleClick = () => {
    console.log("Clicked!");
    setOpen(!open);
  };

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.pushState("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div className="Home">
        <h1 className="title">Doctor Auction</h1>
        <Container>
          <Row>
            <Col md={6}>
              <div className="docbtn">
                <div className="consultingcard">
                  <Card style={{ width: "28rem", height: "30rem" }}>
                    <Card.Img variant="top" src={img1} height="60%" />
                    <Card.Body>
                      <Card.Title>For Doctors Here</Card.Title>
                      <Card.Text>Your application is addopted by</Card.Text>
                      <Link to="/doctorLogin">
                        <Button variant="primary" className="doctorLogin">
                          Log in
                        </Button>
                      </Link>
                      <Link to="/doctorSignup">
                        <Button
                          variant="success"
                          onClick={handleClick}
                          className="doctorLogin"
                        >
                          Sign up
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="patientbtn">
                <Card style={{ width: "28rem", height: "30rem" }}>
                  <Card.Img variant="top" src={img2} height="60%" width="50%" />
                  <Card.Body>
                    <Card.Title>For Patient Here</Card.Title>
                    <Card.Text></Card.Text>
                    <Link to="/patientLogin">
                      <Button
                        variant="primary"
                        onClick={handleClick}
                        className="patiantLogin"
                      >
                        Log in
                      </Button>
                    </Link>
                    <Link to="/patientSignup">
                      <Button
                        variant="success"
                        onClick={handleClick}
                        className="patientLogin"
                      >
                        Sign up
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
        Update Profile
      </Link>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}

{
  /* <br />
        <Link to="/getData">
          <Button variant="success" onClick={handleClick} className="getData">
            getData
          </Button>
        </Link>
      </>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <strong>
            <br />
            Id:
          </strong>{" "}
          {currentUser.uid} */
}
