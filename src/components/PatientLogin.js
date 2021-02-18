import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import db from "../server/database";
import "./Login.css";
const moment = require("moment");

const PatientLogin = () => {
  const [symptom, setSymptom] = useState("");
  const [money, setMoney] = useState("");

  const handleSetSympton = (e) => {
    setSymptom(e.target.value);
    console.log(symptom);
  };

  const handleSetMoney = (e) => {
    setMoney(e.target.value);
    console.log(money);
  };

  const patientData = () => {
    // if (symptom === "" || money === "") {
    //   alert("Please input in your form!");
    //   return;
    // }
    const time = moment().format("YYYY-MM-DD HH:MM");

    const data = {
      symptom: symptom,
      money: money,
      accepted: false,
      time: time,
    };
    const consultData = db.database().ref("consult");
    consultData.push(data);
  };

  return (
    <section className="login">
      <div className="loginContainer">
        <h1 className="title">Consulting Form</h1>
        <label className="text">Symptom</label>
        <input
          type="text"
          autoFocus
          required
          placeholder="ex) backache"
          className="symptomform"
          wrap="hard"
          onChange={handleSetSympton}
        />
        <p className="errorMsg"></p>
        <label>How much money do you pay?</label>
        <input
          type="tel"
          required
          placeholder="ex) 2000"
          onChange={handleSetMoney}
        />
        <p className="errorMsg"></p>
        <div className="btnContainer">
          <Link to="/patientconsulting" className="btn1">
            <Button variant="success" onClick={patientData}>
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
