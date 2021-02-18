import React, { useState } from "react";
import "./css/Consulting.css";
import { Card, Button } from "react-bootstrap";
import img1 from "../image/Succeed.jpg";
import img2 from "../image/waiting.jpg";
import{ Link } from "react-router-dom";

const Consulting = () => {
  const [result, setResult] = useState(false);

  const toggleResult = () => {
    setResult(!result);
  };

  const toggle = () => {
    if (result === false) {
      return (
        <div className="consulting">
          <h1 className="title">Hello shota san!</h1>;
          <div className="consultingcard">
            <Card style={{ width: "30rem", height: "30rem" }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Your application is adopted!</Card.Title>
                <Card.Text>Your application is addopted by {doc}</Card.Text>
                <Link to="/CheckoutForm">
                  <Button variant="primary" onClick={toggleResult}>
                    Go to payment
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    } else {
      return (
        <div className="consulting">
          <h1 className="title">Hello shota san!</h1>;
          <div className="consultingcard">
            <Card style={{ width: "30rem", height: "30rem" }}>
              <Card.Img variant="top" src={img2} height="60%" width="90%" />
              <Card.Body>
                <Card.Title>Your application is not adopted yet</Card.Title>
                <Card.Text>
                  Your application is not selected. You may change your cost
                  or cancel.
                </Card.Text>
                <Button variant="warning">Change cost</Button>{" "}

                {/* TODO  make cancel button to delete the apply */}
                <Link to="/patientLogin">
                  <Button variant="danger" >
                    Cancel
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    }
  };
  const doc = "shota";
  return <div>{toggle()}</div>;
};

export default Consulting;
