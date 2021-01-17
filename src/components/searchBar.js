/*Un formulario controlado con un input de búsque  que dispare los requests a la API 
(a nuestro BACK-END, no a Mercado Libre). */

import React, { useState } from "react";
import styles from "./searchBar.module.css";

const SearchBar = ({ onSearch, onClear }) => {
  const [search, setSearch] = useState();

  const handlerInput = (e) => {
    setSearch(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    setSearch("");
  };

  return (
    <form
      className={styles.container}
      onSubmit={handlerSubmit}
      className="d-flex col-12 justify-content-center justify-content-lg-end"
    >
      <div>
        <input
          onChange={handlerInput}
          className="form-control mr-2"
          value={search}
          type="text"
          placeholder="BUSCAR"
          aria-label="Search"
        ></input>
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
         