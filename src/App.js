import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Videos from './Videos';
//import Testing from "./Testing";

function App() {
  return (
    <Router className='app'>
        <Switch>
          {/* <Route exact path="/" component={Testing} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/videos" component={Videos} />
        </Switch>
    </Router>
  );
}

export default App;
