import DocSignUp from './components/DocSignUp';
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import DocLogin from "./components/DocLogin";

function App() {
  return (
   <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/doctorLogin" component={DocLogin} />
      </div>
    </Router>
  );
}
export default App;
