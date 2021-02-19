import React, { useState, useEffect } from "react";
import "./css/Consulting.css";
import { Card, Button, Modal, Form } from "react-bootstrap";
import img1 from "../image/Succeed.jpg";
import img2 from "../image/waiting.jpg";
// <<<<<<< HEAD
// import{ Link } from "react-router-dom";
// import CheckoutForm from "./ChekoutForm";
// =======
import{ Link } from "react-router-dom";
import CheckoutForm from "./ChekoutForm";
import db from "../server/database";
import { useHistory } from "react-router-dom";
// >>>>>>> 72a4ca951f6bd2666e3d5b2abfbd3dc2b71a9b40

const Consulting = (props) => {
  const [result, setResult] = useState(false);
const [modalShow, setModalShow] = React.useState(false);///////////

const toggleResult = () => {
  // setResult(!result);
  setModalShow(true)
}
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const history = useHistory();

  function handleClose() {
    setShow(false);
  }

  const handleShow1 = () => {
    setShow1(!show1);
  };

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
          if (child.val().email === props.location.state.text) {
            const childData = child;
            setId(child.key);
            setResult(childData.val().accepted);
            console.log("childData.val()",childData.val().accepted)
          }
        });
      });
  }
  useEffect(() => {
    profileList();
  }, []);

  const toggle = () => {
    if (result === true) {
      return (
        <div className="consulting">
          <div className="consultingcard">
            <Card style={{ width: "30rem", height: "30rem" }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Your application is adopted!</Card.Title>
                <Card.Text>Your application is addopted by {doc}</Card.Text>

<CheckoutForm
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
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
          <div className="consultingcard">
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
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
            <Modal show={show1} onHide={handleShow1}>
              <Modal.Header closeButton>
                <Modal.Title>Change your setting money</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Change setting money"
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={backToForm}>
                  Change
                </Button>
                <Button variant="secondary" onClick={handleShow1}>
                  Back
                </Button>
              </Modal.Footer>
            </Modal>
            <Card style={{ width: "30rem", height: "30rem" }}>
              <Card.Img variant="top" src={img2} height="60%" width="90%" />
              <Card.Body>
                <Card.Title>Your application is not adopted yet</Card.Title>
                <Card.Text>
                  Your application is not selected. You may change your cost
                  or cancel.
                </Card.Text>
{/* <<<<<<< HEAD
                <Button variant="warning">Change cost</Button>

                <Link to="/patientLogin">
                  <Button variant="danger" >
                    Cancel
                  </Button>
                </Link>
======= */}
                <Button variant="warning" onClick={handleShow1}>
                  Change cost
                </Button>{" "}
                <Button variant="danger" onClick={handleCancel}>
                  Cancel
                </Button>
{/* >>>>>>> 72a4ca951f6bd2666e3d5b2abfbd3dc2b71a9b40 */}
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
