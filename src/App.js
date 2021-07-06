import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Videos from './Videos';
import Services from './Services';
import Contact from './Contact';
import About from './About';
//import Testing from './Testing';

function App() {
  return (
    <Router className='app'>
        <Switch>
          {/* <Route exact path="/" component={Testing} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </Router>
  );
}

export default App;
