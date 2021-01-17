import Styles from "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import ProductCard from "./components/productCard.js";
import Catalogo from "./components/catalogo.js";
import SearchBar from "./components/searchBar.js";
import Slider from "./components/slider.js";
import Header from "./components/header.js";
import './App.css';

import Footer from './components/footer.js';
//import data, {} from './data.js';

function App() {
  
  return(

  <Router>
  <Route path="/" render={({match, location}) => <Header match={match} location={location} />} />
    
    <Switch >
      {/*<Route exact path="/" component={Home} />*/}
      {/*<Route exact path="/about" component={About} />*/}
      <Route exact path="/" component={Slider} />
      <Route exact path="/" component={SearchBar} />
      <Route exact path="/" component={Header} />
      <Route exact path="/catalogo" component={Catalogo} />
      <Route exact path="/product" component={ProductCard} />
      </Switch>
      <Route path="/" render={({match}) => <Footer match={match} />} />
    </Router>
  );
}
export default App;
