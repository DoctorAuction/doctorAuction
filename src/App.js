import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import DocLogin from "./components/DocLogin";

import GetData from "./components/GetData";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/doctorLogin" component={DocLogin} />
        <Route exact path="/getData" component={GetData} />
      </div>
    </Router>
  );
}
export default App;
