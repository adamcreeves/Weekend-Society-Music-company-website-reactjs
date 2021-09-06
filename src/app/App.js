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
import { 
  aboutPath, 
  cocktailPath, 
  contactPath, 
  homePath, 
  norCalPath, 
  servicesPath, 
  soCalPath, 
  travelPath, 
  videosPath } from "../resources/Strings";
import { c_0001 } from "../resources/ClassNames";
import './../styling/App.css';

function App() {
  return (
    <Router className={c_0001}>
        <Switch>
          <Route exact path={homePath} component={HomePage} />
          <Route exact path={servicesPath} component={ServicesPage} />
          <Route exact path={videosPath} component={VideosPage} />
          <Route exact path={aboutPath} component={AboutPage} />
          <Route exact path={contactPath} component={ContactPage} />
          <Route exact path={norCalPath} component={NorcalPrices} />
          <Route exact path={soCalPath} component={SocalPrices} />
          <Route exact path={cocktailPath} component={CocktailGroups} />
          <Route exact path={travelPath} component={TravelPrices} />
        </Switch>
    </Router>
  );
}

export default App;
