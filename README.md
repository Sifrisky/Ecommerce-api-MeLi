# IAM ecommerce

_Online Shop_
E-commerce project in React and postgress.
# Preview
![](docs/screenshot.png)

## Comenzando 🚀

_About Project_


# Labs Challenge
El objetivo del challenge es construir un Front-End y un Back-End que interactuen con una API externa.

Vamos a usar la API pública de Mercado Libre. De ella vamos a extraer publicaciones que luego vamos a guardar en nuestro propio back-end usando un caché. Para el Fron-end vamos a desarrollar una serie de Componentes de React para poder mostrar e interactuar con las publicaciones antes mencionadas.

Back-End
Usaremos el siguiente endpoint de Mercado Libre https://api.mercadolibre.com/sites/MLA/search?q={query}. Recibe un queryString con el parámetro q con un string que indica el keyword a buscar. La API retorna un JSON con la siguiente forma:

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
Podemos ver la documentación completa del endpoint en este link.

Nuestro Back-End va a tener la ruta:

/api/search
/api/search
Esta ruta recibe un queryString con un término de búsqueda. Por ejemplo: /api/search?query=zapatillas. Y debe retornar un arreglo de items de Mercado Libre con la forma:

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
Extra-Credit: En cada request de búsqueda, se deberá crear un caché, de tal manera que a la siguiente búsqueda no se use la API de Mercado Libre, si no que los datos se recuperen del caché. Tip: Usar un objeto (cada propiedad es al término de búsqueda y el valor de esa propiedad el arreglo de resultados.)

Front-End
Deberás crear una App en React con los siguientes componentes:

SearchBar
Un formulario controlado con un input de búsqueda, que dispare los requests a la API (a nuestro BACK-END, no a Mercado Libre).

Product Card
En este componente se muestra un producto en particular, debemos mostrar:

su imagen.
su titulo.
su precio (con la moneda).
su condicion.
si tiene stock o no.

Catalogo
Este componente va mostrar un arreglo de productos (obtenidos de la API) usando Product Card. Tambien debe posibilitar:

Poder ordenar los productos en base a su precio, de forma ascendete o descendente.
Poder filtrar por condicion.
Poder páginar los resultados de a 30 productos por página.

******************************************************************************************
See the section about [deployment](https://) for more information.


### Pre-requisitos 📋

_Que instalar y como instalarlas_
```
npx create-react-app my-app

```
npm install
npm install axios
npm i bootstrap reactstrap (para estilos y carrusel)
```

### Instalación  🔧

_Pasos de lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_como es el paso_
 para el carrusel: https://reactstrap.github.io/components/carousel/
 instalar sass: npm install -g sass

 
```
Ejemplo?
```

_repito_

```
finalizar
```

## Ejecutando las pruebas ⚙️

_como?_

npm start
```

## Despliegue 📦

_nota de como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

This project was created with:
* [Create React App](https://github.com/facebook/create-react-app).
* [Bootstrapped](https://  /) - El framework web
* [OTHER](https:// INSERT HERE /) - Use for
* [OTHER](https:// INSERT HERE /) - Use for 


## Wiki or other 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

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

* Estamos muy contentos con el desarrollo del proyecto y la finalización del mismo y queremos mostrarselos a todos 📢
* Agradezo a Tony Tralice ... 🤓.
* etc.

---
⌨️ con ❤️ por [Sifrisky] para Henry (Agregar Linkedin) 😊