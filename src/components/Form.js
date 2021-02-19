import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import db from "../server/database";
import "./css/Form.css";
const moment = require("moment");

const Form = (props) => {
  const [profile, setProfile] = useState([]);
  const [symptom, setSymptom] = useState("");
  const [money, setMoney] = useState("");
  const [id, setId] = useState("");
  const history = useHistory();

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
            setProfile(childData);
          }
        });
      });
  }
  useEffect(() => {
    profileList();
  }, []);

  const handleSetSympton = (e) => {
    setSymptom(e.target.value);
  };

  const handleSetMoney = (e) => {
    setMoney(e.target.value);
  };

  async function handleAccept() {
    const time = moment().format("YYYY-MM-DD HH:MM");
    const data = {
      symptom: symptom,
      money: money,
      accepted: false,
      time: time,
      email: props.location.state.text,
    };
    await db.database().ref(`PatientProfile/${id}`).update({ form: true, consult:data });
    history.push({
      pathname: "/patientConsulting",
      state: {text: props.location.state.text}
    })
  }

  // const patientData = () => {

 
  //   const consultData = db.database().ref("consult");
  //   consultData.push(data);
  //   handleAccept();

  // };

  return (
// <<<<<<< HEAD
//     <section className="login">
//       <div className="loginContainer">
//         <h1 className="title">Consulting Form</h1>
//         <label className="text">Symptom</label>
//         <input
//           type="text"
//           autoFocus
//           required
//           placeholder="ex) backache"
//           className="symptomform"
//           wrap="hard"
//           onChange={handleSetSympton}
//         />
//         <p className="errorMsg"></p>
//         <label>How much money do you want pay?</label>
//         <input
//           type="tel"
//           required
//           placeholder="ex) 2000"
//           onChange={handleSetMoney}
//         />
//         <p className="errorMsg"></p>
//         <div className="btnContainer">
//           <Link to="/patientconsulting" className="btn1">
//             <Button variant="success" onClick={patientData}>
//               Apply
//             </Button>
//           </Link>
//           <Link to="/" className="btn2">
//             <Button variant="primary">Back to Home</Button>
//           </Link>
//         </div>
// =======
    <>
      <div className="consultform">
        <h1 className="profile"> Hello {profile.firstname} !</h1>
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
              {/* <Link to="/patientconsulting" className="btn1"> */}
                <Button variant="success" onClick={handleAccept}>
                  Apply
                </Button>
              {/* </Link> */}
              <Link to="/" className="btn2">
                <Button variant="primary">Back to Home</Button>
              </Link>
            </div>
          </div>
        </section>
{/* >>>>>>> 72a4ca951f6bd2666e3d5b2abfbd3dc2b71a9b40 */}
      </div>
    </>
  );
};

export default Form;
