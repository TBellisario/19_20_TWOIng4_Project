import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./Pages/Admin";
import Dashboard from "./Pages/Dashboard";
import Header from "./Header";


const routing = (
  <Router>
    <div>
      <Header/>
      <hr />
      <Switch>
        <Route path="./Pages/Dashboard" component={Dashboard} />  
        <Route path="./Pages/Admin" component={Admin} />
        
        <Route exact path="./App" component={App} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
