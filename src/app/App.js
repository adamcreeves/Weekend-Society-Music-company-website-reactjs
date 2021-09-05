import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NorcalPrices from "../pages/hidden/NorcalPrices";
import SocalPrices from "../pages/hidden/SocalPrices";
import CocktailGroups from "../pages/hidden/CocktailGroups";
import TravelPrices from "../pages/hidden/TravelPrices";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import VideosPage from "../pages/VideosPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import './../styling/App.css';

function App () {
  return (
    <Router className='app'>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/videos" component={VideosPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/norcalpricing" component={NorcalPrices} />
          <Route exact path="/socalpricing" component={SocalPrices} />
          <Route exact path="/cocktailgroups" component={CocktailGroups} />
          <Route exact path='/travelpricing' component={TravelPrices} />
        </Switch>
    </Router>
  );
}

export default App;
