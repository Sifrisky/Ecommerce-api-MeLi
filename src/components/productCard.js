import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './product.module.css';

export default function ProductCard() {
  const [product, setProduct] = useState("");

  const url = "https://api.mercadolibre.com/sites/MLA/search?q=zapatilla";

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => {
        //console.log(res);
        setProduct(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    {/*<div className="product">
        <div id="closeIcon" className="row">
            <button onClick={() => onClose(id)} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="product-body">
          <h5 className="product-title">{name}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">*/}
      <div className={styles.product}>
        {product &&
          product.map((p) => (
            <div id={p.id}>
              <p>{p.title}</p>
              <p>{p.price}</p>
              <p>{p.stock}</p>
              <img src={p.thumbnail}/>
            </div>
          ))}
      </div>
    </>
  );
}

/* 
Product Card
En este componente se muestra un producto en particular, debemos mostrar:

su imagen.
su titulo.
su precio (con la moneda).
su condicion.
si tiene stock o no.

Extra-Credit: En cada request de búsqueda, se deberá crear un caché, de tal manera que a
la siguiente búsqueda no se use la API de Mercado Libre, si no que los datos se recuperen
 del caché. Tip: Usar un objeto (cada propiedad es al término de búsqueda y el valor de esa 
propiedad el arreglo de resultados.)*/