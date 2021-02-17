import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const DocLogin = () => {
  return (
    <>
      <h1>Here is Doctor Login Page!!!</h1>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </>
  );
};

export default DocLogin;
