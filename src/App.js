import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import DocLogin from "./components/DocLogin";
import DocSignUp from "./components/DocSignup";
import PatientLogin from "./components/PatientLogin";
import PatientSignup from "./components/PatientSignup";
import Consulting from "./components/Consulting";
// import Doctor from "./components/Doctor";
import DocTop from "./components/DocTop";
import DocAcceptedList from "./components/DocAcceptedList";
import { AuthProvider } from "./context/AuthContext";
import GetData from "./components/GetData";
import { Container } from "react-bootstrap";
import Signup from "./fred/Signup";
import Dashboard from "./fred/Dashboard";
import LoginForDoc from "./components/LoginForDoc";
import LoginForPatient from "./components/LoginForPatient";
import PrivateRoute from "./fred/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./fred/UpdateProfile.js";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/doctorLogin" component={DocLogin} />
            <Route exact path="/doctorSignup" component={Signup} />
            <Route exact path="/patientLogin" component={PatientLogin} />
            <Route exact path="/patientSignup" component={Signup} />
            <Route exact path="/patientconsulting" component={Consulting} />
            {/* <Route exact path="/doctor" component={Doctor} /> */}
            <Route exact path="/docTop" component={DocTop} />
            <Route exact path="/getData" component={GetData} />
            <Route exact path="/DocAcceptedList" component={DocAcceptedList} />
            <Route exact path="/loginForDoc" component={LoginForDoc} />
            <Route exact path="/loginForPatient" component={LoginForPatient} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
          </div>
        </AuthProvider>
      </Router>
    </>
  );
}
export default App;
