import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Videos from './Videos';

function App() {
  return (
    <Router className='app'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/videos" component={Videos} />
        </Switch>
    </Router>
  );
}

export default App;
