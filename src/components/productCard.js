/* PRODUCT CARD
En este componente se muestra un producto en particular, debemos mostrar:
su imageproductn.
su titulo.
su precio (con la moneda).
su condicion.
si tiene stock o no.

Extra-Credit: En cada request de búsqueda, se deberá crear un caché, de tal manera que a
la siguiente búsqueda no se use la API de Mercado Libre, si no que los datos se recuperen
 del caché. Tip: Usar un objeto (cada propiedad es al término de búsqueda y el valor de esa 
propiedad el arreglo de resultados.)*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./product.module.css";

export default function ProductCard() {
  const [product, setProduct] = useState("");

  const url = "https://api.mercadolibre.com/sites/MLA/search?q=iphone";

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
      <div className="container">
        <div className="row">
          <div className={styles.titulo1}>
            <h2>DESTACADOS</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className={styles.product}>
              {product &&
                product.map((p) => (
                  <div id={p.id}>
                    <img className={styles.imageproduct} src={p.thumbnail} />
                    <p>{p.title}</p>
                    <p>{p.price}</p>
                    <p>{p.stock}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="col-md-3">
            <div className={styles.product}>
              {product &&
                product.map((p) => (
                  <div id={p.id}>
                    <img className={styles.imageproduct} src={p.thumbnail} />
                    <p>{p.title}</p>
                    <p>{p.price}</p>
                    <p>{p.stock}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="col-md-3">
            <div className={styles.product}>
              {product &&
                product.map((p) => (
                  <div id={p.id}>
                    <img className={styles.imageproduct} src={p.thumbnail} />
                    <p>{p.title}</p>
                    <p>{p.price}</p>
                    <p>{p.stock}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="col-md-3">
            <div className={styles.product}>
              {product &&
                product.map((p) => (
                  <div id={p.id}>
                    <img className={styles.imageproduct} src={p.thumbnail} />

                    <p>{p.title}</p>
                    <p>{p.price}</p>
                    <p>{p.stock}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}