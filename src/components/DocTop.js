import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import db from "../server/database";
import Modal from "react-bootstrap/Modal";

const DocTop = () => {

  const [DataTag, setDataTag] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [show, setShow] = useState(false);
  const [chosenConsult, setChosenConsult] = useState();
  const [forRerendering, setForRerendering] = useState(0);
  const [docId, setDocId] = useState(12345);

  function handleClose() {
    setShow(false);
  }

  async function handleAccept() {
    // await db
    //   .database()
    //   .ref(`consult/${chosenConsult}`)
    //   .update({ accepted: true, doctor:docId});
    // setForRerendering(forRerendering + 1);
    // setShow(false);
     await db
      .database()
      .ref(`PatientProfile/${chosenConsult}`)
      .update({ accepted: true});

      await db
      .database()
      .ref(`PatientProfile/${chosenConsult}/consult`)
      .update({ accepted: true, doctor:docId});
    setForRerendering(forRerendering + 1);
    setShow(false);
    await db
      .database()
      .ref(`PatientProfile/${chosenConsult}`)
      .update({ accepted: true });
  }

  async function showData() {
    await db
      .database()
      .ref("PatientProfile")
      .orderByKey()
      .once("value", function (snapshot) {
        const data = [];
        snapshot.forEach((child) => {
          const childKey = child.key;
          const childData = child.val();
          data.push({ [childKey]: childData.consult });
        });
        setDoctors(data);
      });
  }

  useEffect(() => {
    showData();
  }, [forRerendering]);

  function handleAcceptButton(event) {
    const consultId = event.target.parentNode.id;

    setChosenConsult(consultId);
    setShow(true);
  }

  useEffect(() => {
    const newTagsArr = [];
    for (const consult of doctors) {
      const consultId = Object.keys(consult)[0];

      if(consult[consultId]){
      if (!consult[consultId].accepted) { 
        const consultDiv = [];

        consultDiv.push(<p key={consultId}>Id: {consultId}</p>);
        for (const key in consult[consultId]) {
          if (key !== "accepted") {
            consultDiv.push(
              <p key={consultId + key}>
                {key}: {consult[consultId][key]}
              </p>
            );
          }
        }

        newTagsArr.push(
          <div key={consultId + "div"} className="consultDiv" id={consultId}>
            <Button
              variant="outline-success"
              className="accepet_button"
              onClick={handleAcceptButton}
            >
              Accept this consult
            </Button>
            {consultDiv}
          </div>
        );
      }
    }
    }
    setDataTag(newTagsArr);
  }, [doctors]);

  return (
    <>
      <h1>Here is Doctor's Top page!!!</h1>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>{" "}
      <Link to="/docAcceptedList">
        <Button variant="primary">a list of consults accept by the doc</Button>
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confermation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Would you like to accept this consult?<br></br>
          ID: {chosenConsult}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleAccept}>
            Accept this consult
          </Button>
        </Modal.Footer>
      </Modal>
      {DataTag}
    </>
  );
};
export default DocTop;
