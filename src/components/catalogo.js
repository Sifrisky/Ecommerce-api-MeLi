import React, { useState, useEffect } from "react";
import ProductCard from "./productCard.js";
import styles from './catalogo.module.css';

const Catalogo = () => {
  const [product, setProduct] = useState([]);

  return (
    <div className={StyleSheet.container}>
      {product &&
        product.map((p) => (
          <ProductCard
            id={product.results.id}
            title={p.results.title}
            price={p.results.price}
            stock={p.results.stock}
            img={p.results.thumbnail}
            onClose={() => alert(p.results.title)}
          />
        ))}
    </div>
  );
};

export default Catalogo;

/*
Este componente va mostrar un arreglo de productos (obtenidos de la API) usando Product Card. Tambien debe posibilitar:

Poder ordenar los productos en base a su precio, de forma ascendete o descendente.
Poder filtrar por condicion.
Poder páginar los resultados de a 30 productos por página. */