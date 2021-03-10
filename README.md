# IAM ecommerce

_Online Shop_
E-commerce project in React and postgress.
# Preview
![](docs/screenshot.png)

## Comenzando 🚀

_El objetivo del challenge es construir un Front-End y un Back-End que interactuen con una API externa._

_Vamos a usar la API pública de Mercado Libre. De ella vamos a extraer publicaciones que luego vamos a guardar en nuestro propio back-end usando un caché. Para el Fron-end vamos a desarrollar una serie de Componentes de React para poder mostrar e interactuar con las publicaciones antes mencionadas._

_Back-End
Usaremos el siguiente endpoint de Mercado Libre https://api.mercadolibre.com/sites/MLA/search?q={query}. Recibe un queryString con el parámetro q con un string que indica el keyword a buscar. La API retorna un JSON con la siguiente forma:_

```
{
  "site_id": "MLA",
  "query": "iphone",
  "paging": {},
  "results": [{
  	"id": "MLA851931164",
    "site_id": "MLA",
    "title": "iPhone 11 128 Gb Morado 4 Gb Ram",
    "seller": {},
    "price": 182240,
    ...
  }],
  "secondary_results": [
    ...
  ],
  "related_results": [
  	...
  ],
  "sort": {
    "id": "relevance",
    "name": "More relevant"
  },
  "available_sorts": [],
  "filters": [],
  "available_filters": []
}
```
Podemos ver la documentación completa del endpoint en este link.

Nuestro Back-End va a tener la ruta:

/api/search
/api/search
Esta ruta recibe un queryString con un término de búsqueda. Por ejemplo: /api/search?query=zapatillas. Y debe retornar un arreglo de items de Mercado Libre con la forma:
```
[
  {
      "id": "MLA785937833",
      "title": "Zapatillas Marca Rcn Ultraliviana Negra",
      "price": 1769,
      "currency_id": "ARS",
      "available_quantity": 200,
      "thumbnail": "http://http2.mlstatic.com/D_728833-MLA32445355209_102019-I.jpg",
      "condition": "new"
  },
  {
      "id": "MLA716347136",
      "title": "Zapatillas Ozono Skate Directo De Fábrica",
      "price": 1769,
      "currency_id": "ARS",
      "available_quantity": 200,
      "thumbnail": "http://http2.mlstatic.com/D_728833-MLA32445355209_102019-I.jpg",
      "condition": "new"
  }
]
```
_En cada request de búsqueda, se deberá crear un caché, de tal manera que a la siguiente búsqueda no se use la API de Mercado Libre, si no que los datos se recuperen del caché. Tip: Usar un objeto (cada propiedad es al término de búsqueda y el valor de esa propiedad el arreglo de resultados.)_

_* Front-End. Crear una App en React con los siguientes componentes:_

_* SearchBar. Un formulario controlado con un input de búsqueda, que dispare los requests a la API (a nuestro BACK-END, no a Mercado Libre)._

_* Product Card. En este componente se muestra un producto en particular, debemos mostrar:_

- su imagen.
- su titulo.
- su precio (con la moneda).
- su condicion.
- si tiene stock o no.

_* Catalogo. Este componente va mostrar un arreglo de productos (obtenidos de la API) usando Product Card. Tambien debe posibilitar:_

- Ordenar los productos en base a su precio, de forma ascendete o descendente.
- Filtrar por condicion.
- Páginar los resultados de a 30 productos por página.

******************************************************************************************
See the section about [deployment](https://) for more information.


### Pre-requisitos 📋


```
npx create-react-app my-app
```

### Instalación  🔧

```
npm install
npm install axios
npm i bootstrap reactstrap (para estilos y carrusel)
npm install -g sass
para el carrusel: https://reactstrap.github.io/components/carousel/

```
 

## Ejecutando las pruebas ⚙️

```
npm start
```

## Despliegue 📦

_El deployment se realizo con herokuapp_

## Construido con 🛠️

_This project was created with:_
* [Create React App](https://github.com/facebook/create-react-app).
* [Bootstrapped](https://  /) - El framework web
* [OTHER](https:// INSERT HERE /) - Use for
* [OTHER](https:// INSERT HERE /) - Use for 


## Versionado 📌

Usamos las versiones:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## Autores ✒️

Desde - *Trabajo Inicial* -  *Documentación* - *Planificación* - *Maquetado* -
* **Astrid Medina** - [Sifrisky](https://github.com/Sifrisky)

## Agradecimientos 🎁

* Estoy muy contenta con el desarrollo del proyecto y la finalización del mismo y queremos mostrarselos a todos 📢
* Agradezo a Tony Tralice por todo su apoyo y consejos 🤓.

---
⌨️ con ❤️ por [Sifrisky] para Henry (https://www.linkedin.com/in/astrid-medina/) 😊
