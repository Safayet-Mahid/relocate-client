import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import Destination from './Pages/DestinationPage/Destination/Destination';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
