import React, { useState } from "react";
import "./Consulting.css";
import { Card, Button } from "react-bootstrap";
import img1 from "../image/Succeed.jpg";
import img2 from "../image/waiting.jpg";

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
                <Button variant="primary" onClick={toggleResult}>
                  Go to payment
                </Button>
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
                  Your application is not selected. You may be change your cost
                  or cancel.
                </Card.Text>
                <Button variant="warning">Change cost</Button>
                <Button variant="danger" onClick={toggleResult}>
                  Cancel
                </Button>
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
