import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PatientSignup = () => {
  return (
    <>
      <h1>Here is Patient Signup page!!!</h1>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </>
  );
};

export default PatientSignup;
