import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "../image/how-to-find-a-doctor-in-croatia.jpg";
import img2 from "../image/patient.jpg";

const Home = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log("Clicked!");
    setOpen(!open);
  };

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
                      <Link to="/docTop">
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
      <br />
    </>
  );
};

export default Home;
