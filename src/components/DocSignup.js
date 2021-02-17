import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const DocSignup = () => {
  return (
    <>
      <h1>Here is Doctor Signup page!!!</h1>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </>
  );
};

export default DocSignup;
