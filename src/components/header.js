import React from "react";
import SearchBar from "./searchBar.js";
import Styles from "./searchBar.module.css";
import logo1 from "../img/logo2.png";


export default function Header() {
  return (
   
      <div className="row">
      <div className="col-md-12">

         
        <nav class=" navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
                      
            <img src={logo1} className={Styles.logo}></img>  SHOP

          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class=" navbar-toggler-icon"></span>
          </button>
       
          <div className= "collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
      
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Catalogo
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className={Styles.headerStyle} >
            <SearchBar onSearch={(product) => alert(product)}/>
              </li>
            </ul>
          </div>
        
        </nav>

        </div>
        </div>
    
    
  );
}
