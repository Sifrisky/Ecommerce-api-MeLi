import React from "react";
import { render } from "react-dom";
import ProductCard from "./components/productCard.js";
import Catalogo from "./components/catalogo.js";
import SearchBar from "./components/searchBar.js";
import './App.css';
//import Footer from './components/footer.js';
//import data, {} from './data.js';

const App = () => {
  return (
    <>
      <div>
       <Catalogo />
      </div>
      <div>
        <SearchBar onSearch={(product) => alert(product)} />
      </div>
      <div>
        <ProductCard />
      </div>
      {/*<div>
        <Footer />
      </div>*/}
    </>
  );
};
export default App;
