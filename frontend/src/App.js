import React, {Component} from 'react';
import './App.css';
import Linechart from './Component/widget1/Linechart';
import Barchart from './Component/widget2/Barchart';
import Piechart from './Component/widget3/Piechart'; 
import Areachart from './Component/widget4/Areachart';
import Header from './Header';
import Admin from './Pages/Admin';
import Dashboard from './Pages/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header>
            <Router path="./Pages/Dashboard" Component={Dashboard}></Router>
          </Header>
          <Linechart></Linechart>
          <Barchart></Barchart>
          <Piechart></Piechart>
          <Areachart></Areachart>
        </div>
        
      </Router>
    );
  }
}

export default App;