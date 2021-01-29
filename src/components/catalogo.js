/* CATALOGO.
Este componente va mostrar un arreglo de productos (obtenidos de la API) usando Product Card. Tambien debe posibilitar:
Poder ordenar los productos en base a su precio, de forma ascendete o descendente.
Poder filtrar por condicion.
Poder páginar los resultados de a 30 productos por página. */

import React, { useState } from 'react';
import ProductCard from './productCard.js';
import style from './catalogo.module.css';

function Catalogo({products, conditionFilter, filterPrice, paginaSiguiente, paginaAnterior, filters, pagina}){
    const [state, setState] = useState({
        price_asc: (filterPrice === 'price_asc') ? true : false,
        price_desc: (filterPrice === 'price_desc') ? true : false,
        new: (conditionFilter === 'new') ? true : false,
        used: (conditionFilter === 'used') ? true : false,
        priceFilter: null,
        conditionFilter: null
    })
    const submitFilter = () => {
        filters(state.conditionFilter, state.priceFilter)
    }

    const onCheck = (checkbox, name) => { 
        if(name ==='price_asc'){
            setState({
                ...state,
                price_asc: (state.price_asc === false) ? true : false,
                price_desc: false,
                priceFilter: (state.price_asc === false) ? 'price_asc' : null
            })
        }
        if(name === 'price_desc'){
            setState({
                ...state,
                price_asc: false,
                price_desc: (state.price_desc === false) ? true : false,
                priceFilter:  (state.price_desc === false) ? 'price_desc' : null
            })
        }
        if(name === 'new'){
            setState({
                ...state,
                new: (state.new === false) ? true : false,
                used: false,
                conditionFilter: (state.new === false) ? 'new' : null
            })
        }
        if(name === 'used'){
            setState({
                ...state,
                new: false,
                used: (state.used === false) ? true : false,
                conditionFilter: (state.used === false) ? 'used' : null,
            })
        }
    }
    if(products.length === 0) return null
    return(
        <>
            <div className={style.form}>
                <div className={style.checkbox}>

                    <div>
                        <input 
                        type="checkbox" 
                        name="price_asc" 
                        id="checkbox1"
                        checked={state.price_asc}
                        onChange ={(e) => onCheck('1', e.target.name)}/>
                        <label htmlFor="checkbox1">Mayor a Menor</label>
                        <input 
                        type="checkbox" 
                        name="price_desc" 
                        id="checkbox2"
                        checked={state.price_desc}
                        onChange ={(e) => onCheck('1', e.target.name)}/>
                        <label htmlFor="checkbox2"> Menor a Mayor </label>
                    </div>

                    <div>
                        <input 
                        type="checkbox" 
                        name="new" 
                        id="checkbox3"
                        checked={state.new}
                        onChange={(e) => onCheck('2', e.target.name)}/>
                        <label htmlFor="checkbox3"> Nuevo</label>
                        <input 
                        type="checkbox" 
                        name="used" 
                        id="checkbox4"
                        checked={state.used}
                        onChange={(e) => onCheck('2', e.target.name)}/>
                        <label htmlFor="checkbox4"> Usado </label>
                    </div>
                </div>
<div>
                <button variant="outlined" onClick={submitFilter}> Filtrar </button>
                </div>
            <ProductCard className="container spacing={10}" justify="center">   
            {products.map((p) => (
    <div id={p.id} product={p}>
          </div>
            ))}
           </ProductCard>
             

            <br/>
            <br/>
            <div>
            <button variant="outlined" color="secondary" onClick={paginaAnterior}>Pagina Anterior</button>             
            <button variant="outlined" color="primary" onClick={() => paginaSiguiente(products)}>Pagina Siguiente</button>
            </div>
            </div>
        </>
    )
}

export default Catalogo;