import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignUp from "./Compents/SignUp";
import Login from "./Compents/Login";
import Mems from "./Compents/Mems";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/meems">
            <Mems />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
