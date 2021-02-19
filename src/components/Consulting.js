import React, { useState, useEffect } from "react";
import "./css/Consulting.css";
import { Card, Button, Modal } from "react-bootstrap";
import img1 from "../image/Succeed.jpg";
import img2 from "../image/waiting.jpg";
import db from "../server/database";
import { useHistory } from "react-router-dom";

const Consulting = (props) => {
  console.log(props);
  const [result, setResult] = useState(false);
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory();

  function handleClose() {
    setShow(false);
  }

  const backToForm = () => {
    history.push("/loginForPatient");
  };
  const handleCancel = () => {
    setShow(true);
  };
  async function profileList() {
    await db
      .database()
      .ref("PatientProfile")
      .orderByKey()
      .once("value", function (snapshot) {
        snapshot.forEach((child) => {
          console.log(props.location);
          if (child.val().email === props.location.state.text) {
            const childData = child;
            setId(child.key);
            setResult(childData.accepted);
          }
        });
      });
  }
  useEffect(() => {
    profileList();
  }, []);

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
                <Button variant="primary">Go to payment</Button>
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
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Confermation</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Would you like to cancel this consult?<br></br>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={backToForm}>
                  Yes
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  No
                </Button>
              </Modal.Footer>
            </Modal>
            <Card style={{ width: "30rem", height: "30rem" }}>
              <Card.Img variant="top" src={img2} height="60%" width="90%" />
              <Card.Body>
                <Card.Title>Your application is not adopted yet</Card.Title>
                <Card.Text>
                  Your application is not selected. You may be change your cost
                  or cancel.
                </Card.Text>
                <Button variant="warning">Change cost</Button>
                <Button variant="danger" onClick={handleCancel}>
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
