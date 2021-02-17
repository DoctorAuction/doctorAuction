import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Diggle from "../image/img.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log("Clicked!");
    setOpen(!open);
  };

  return (
    <>
      <div className="Home">
        <h1 className="title">Doctor Auction</h1>
        <h1 className="doctext">For Doctor</h1>
        <div className="docbtn">
          <Link to="/doctorLogin">
            <Button variant="primary" className="doctorLogin">
              Log in
            </Button>
          </Link>
          <Link to="/doctorSignup">
            <Button
              variant="success"
              onClick={handleClick}
              className="doctorLogin"
            >
              Sign up
            </Button>
          </Link>
        </div>
        <h1 className="doctext">For Patient</h1>
        <div className="patientbtn">
          <Link to="/patientLogin">
            <Button
              variant="primary"
              onClick={handleClick}
              className="patiantLogin"
            >
              Log in
            </Button>
          </Link>
          <Link to="/patientSignup">
            <Button
              variant="success"
              onClick={handleClick}
              className="patientLogin"
            >
              Sign up
            </Button>
          </Link>
        </div>
        <br />
      </div>
    </>
  );
};

export default Home;
