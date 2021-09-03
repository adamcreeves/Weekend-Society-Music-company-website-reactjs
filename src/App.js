import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styling/App.css';
import Home from './screens/Home';
import Services from './screens/Services';
import Contact from './screens/Contact';
import About from './screens/About';
import VideosPage from "./screens/VideosPage";
import NorcalPrices from "./screensHidden/NorcalPrices";
import SocalPrices from "./screensHidden/SocalPrices";
import CocktailGroups from "./screensHidden/CocktailGroups";
import TravelPrices from "./screensHidden/TravelPrices";

function App() {
  return (
    <Router className='app'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/videos" component={VideosPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/norcalpricing" component={NorcalPrices} />
          <Route exact path="/socalpricing" component={SocalPrices} />
          <Route exact path="/cocktailgroups" component={CocktailGroups} />
          <Route exact path='/travelpricing' component={TravelPrices} />
        </Switch>
    </Router>
  );
}

export default App;
