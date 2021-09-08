import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NorcalPrices from '../pages/hidden/NorcalPrices';
import SocalPrices from '../pages/hidden/SocalPrices';
import CocktailGroups from '../pages/hidden/CocktailGroups';
import TravelPrices from '../pages/hidden/TravelPrices';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import VideosPage from '../pages/VideosPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import SongList from '../pages/hidden/SongList';
import {  
  p_01, 
  p_02, 
  p_03, 
  p_04, 
  p_05, 
  p_06, 
  p_07, 
  p_08, 
  p_09, 
  p_10} from '../resources/Strings';
import { c_0001 } from '../resources/ClassNames';
import './../styling/app/App.css';

function App() {
  return (
    <Router className={c_0001}>
        <Switch>
          <Route exact path={p_01} component={HomePage} />
          <Route exact path={p_02} component={AboutPage} />
          <Route exact path={p_03} component={CocktailGroups} />
          <Route exact path={p_04} component={ContactPage} />
          <Route exact path={p_05} component={NorcalPrices} />
          <Route exact path={p_06} component={ServicesPage} />
          <Route exact path={p_07} component={SocalPrices} />
          <Route exact path={p_08} component={TravelPrices} />
          <Route exact path={p_09} component={VideosPage} />
          <Route exact path={p_10} component={SongList} />
        </Switch>
    </Router>
  );
}

export default App;
