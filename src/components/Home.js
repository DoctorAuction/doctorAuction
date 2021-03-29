import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./css/Home.css";
import img1 from "../image/how-to-find-a-doctor-in-croatia.jpg";
import img2 from "../image/patient.jpg";
// import LOGO from "../image/LOGO.jpg"

const Home = () => {
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
                      <br></br>
                      <Link to="/loginForDoc">
                        <Button variant="primary" className="doctorLogin">
                          Log in
                        </Button>
                      </Link>
                      <Link to="/doctorSignup">
                        <Button variant="success" className="doctorLogin">
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
                    <Card.Text></Card.Text><br></br>
                    <Link to="/loginForPatient">
                      <Button variant="primary" className="patiantLogin">
                        Log in
                      </Button>
                    </Link>
                    <Link to="/patientSignup">
                      <Button variant="success" className="patientLogin">
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
