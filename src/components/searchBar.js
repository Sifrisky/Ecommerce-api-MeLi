import React from "react";
import styles from './searchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input placeholder="Buscar productos, marcas y más..." />
      <button className= {styles.botonSearch} onClick={() => "Buscando..."}>Buscar</button>
    </div>
  );
};

export default SearchBar;

/*Un formulario controlado con un input de búsque
 que dispare los requests a la API (a nuestro BACK-END, no a Mercado Libre). */
