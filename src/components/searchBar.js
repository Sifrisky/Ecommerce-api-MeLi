/*Un formulario controlado con un input de búsque  que dispare los requests a la API 
(a nuestro BACK-END, no a Mercado Libre). */

import React, { useState } from "react";
import styles from "./searchBar.module.css";

const SearchBar = ({ busqueda }) => {
  const [state, setState] = useState({
    search: null,
    showCat: false
  });

  

  const onSubmit = (e) =>{
    //Evitar que refresque la pagina
    e.preventDefault();
    busqueda(state.search)

}
const onChange = (e) =>{
    //Guardamos lo que el usuario escriba para el posterior envio
    setState({
        ...state, 
        search: e.target.value
    })
}

  return (
    <form
      className={styles.container}
      onSubmit={onSubmit}
      className="d-flex col-12 justify-content-center justify-content-lg-end"
    >
      <div>
        <input
          className="form-control mr-2"
          type="text"
          placeholder="BUSCAR PRODUCTO"
          aria-label="Search"
          onChange={onChange}>
        </input>
      </div>
      <button className={styles.botonSearch} type="submit">
        {" "}
        <i class="fas fa-paper-plane"></i>

{" "}
      </button>
      {/* <button className="btn btn-dark my-sm-0" type="button" onClick={onClear} > Clear </button>*/}
      <div />
    </form>
  );
};

export default SearchBar;
         