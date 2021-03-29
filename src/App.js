import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/SignupForPatient";
import Consulting from "./components/Consulting";
// import Doctor from "./components/Doctor";
import DocTop from "./components/DocTop";
import DocAcceptedList from "./components/DocAcceptedList";
import { AuthProvider } from "./context/AuthContext";
import GetData from "./components/GetData";
// import PatientSignup from "./components/SignupForPatient";
import LoginForDoc from "./components/LoginForDoc";
import LoginForPatient from "./components/LoginForPatient";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./fred/UpdateProfile.js";
import Form from "./components/Form";


import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./components/ChekoutForm";

const stripePromise = loadStripe('pk_test_51IM2LwDWsBSLiHxJUTQKbLGFqPTFzv1cuPkQo4vPZI6Fxb7hTddMLb6tPh5H5spkqqcaLXFCdHZ0K0ggIYX5fkr5002SgXW0pT');

function App() {
  return (
    <>
       <Elements stripe={stripePromise}>
      <Router>
        <AuthProvider>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/doctorSignup" component={Signup} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/patientSignup" component={Signup} />
            <Route exact path="/patientconsulting" component={Consulting} />
            <Route exact path="/docTop" component={DocTop} />
            <Route exact path="/getData" component={GetData} />
            <Route exact path="/DocAcceptedList" component={DocAcceptedList} />
            <Route exact path="/loginForDoc" component={LoginForDoc} />
            <Route exact path="/loginForPatient" component={LoginForPatient} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/CheckoutForm" component={CheckoutForm} />
          </div>
        </AuthProvider>
      </Router>
      </Elements>
    </>
  );
}
export default App;
