import ProductCard from "./components/productCard.js";
import Catalogo from "./components/catalogo.js";
import SearchBar from "./components/searchBar.js";
import React from "react";
import './App.css';
//import data, {} from './data.js';

const App = () => {
  return (
    <>
      <div>
       {/*<Catalogo product={data} />*/} 
      </div>
      <div>
        <SearchBar onSearch={(product) => alert(product)} />
      </div>
      <div>
        <ProductCard />
      </div>
    </>
  );
};
export default App;
