import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PatientLogin = () => {
  return (
    <>
      <h1>Here is Patient Login page!!!</h1>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </>
  );
};

export default PatientLogin;
