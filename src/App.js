import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import DocLogin from "./components/DocLogin";
import DocSignUp from "./components/DocSignup";
import PatientLogin from "./components/PatientLogin";
import PatientSignup from "./components/PatientSignup";
import Consulting from "./components/Consulting";
// import Doctor from "./components/Doctor";
import DocTop from "./components/DocTop";
import DocAcceptedList from "./components/DocAcceptedList";

import GetData from "./components/GetData";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/doctorLogin" component={DocLogin} />
        <Route exact path="/doctorSignup" component={DocSignUp} />
        <Route exact path="/patientLogin" component={PatientLogin} />
        <Route exact path="/patientSignup" component={PatientSignup} />
        <Route exact path="/patientconsulting" component={Consulting} />
        {/* <Route exact path="/doctor" component={Doctor} /> */}
        <Route exact path="/docTop" component={DocTop} />
        <Route exact path="/getData" component={GetData} />
        <Route exact path="/DocAcceptedList" component={DocAcceptedList} />
      </div>
    </Router>
  );
}
export default App;
