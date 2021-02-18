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


import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./components/ChekoutForm";

const stripePromise = loadStripe('pk_test_51IM2LwDWsBSLiHxJUTQKbLGFqPTFzv1cuPkQo4vPZI6Fxb7hTddMLb6tPh5H5spkqqcaLXFCdHZ0K0ggIYX5fkr5002SgXW0pT');

function App() {
  return (
    <Elements stripe={stripePromise}>
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
        <Route exact path="/CheckoutForm" component={CheckoutForm} />
      </div>
    </Router>
    </Elements>
  );
}
export default App;
