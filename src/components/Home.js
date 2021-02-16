import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Diggle from "../image/img.jpg";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log("Clicked!");
    setOpen(!open);
  };

  const toggle = () => {
    if (open) {
      return (
        <div>
          <p>I'm comming!!!</p>
          <img src={Diggle} alt="アイコン" />
        </div>
      );
    }
  };
  return (
    <>
      <h1>For Doctor</h1>
      <div className="text-right">
        <Button variant="primary" onClick={handleClick} className="doctorLogin">
          Log in
        </Button>
        <Button variant="success" onClick={handleClick} className="doctorLogin">
          Sign up
        </Button>
      </div>
      <h1>For Patient</h1>
      <div className="text-right">
        <Button
          variant="primary"
          onClick={handleClick}
          className="patiantLogin"
        >
          Log in
        </Button>
        <Button
          variant="success"
          onClick={handleClick}
          className="patientLogin"
        >
          Sign up
        </Button>
      </div>
      <br />
      {toggle()}
    </>
  );
};

export default Home;
