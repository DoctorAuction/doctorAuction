import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Login.css";

const PatientLogin = () => {
  const handleLogin = () => {
    console.log("shgota");
    return;
  };
  return (
    <section className="login">
      <div className="loginContainer">
        <h1 className="title">Consulting Form</h1>
        <label className="text">Symptom</label>
        <input
          type="textarea"
          autoFocus
          required
          placeholder="ex) backache"
          className="symptomform"
          wrap="hard"
        />
        <p className="errorMsg"></p>
        <label>How much money do you pay?</label>
        <input type="tel" required placeholder="ex) 2000" />
        <p className="errorMsg"></p>
        <div className="btnContainer">
          <Link to="/doctor" className="btn1">
            <Button variant="success" onClick={handleLogin}>
              Apply
            </Button>
          </Link>
          <Link to="/" className="btn2">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PatientLogin;
