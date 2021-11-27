const express = require("express");
const app = express();

//IMPORTAMOS BASE DE DATOS PRODUCTOS
import Productos from "./ecommerce/Productos";
//import Productos from "./Productos";
import { mysql as options } from "./ecommerce/options";
//import { sqlite3 as options } from "./ecommerce/options";

const arrayProductos = [
  {
    title: "Escuadra",
    price: 123.45,
    thumbmail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
    title: "Calculadora",
    price: 234.56,
    thumbmail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
  {
    title: "Globo Terráqueo",
    price: 345.67,
    thumbmail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  },
  {
    title: "werty",
    price: "12345",
    thumbmail: "qwertyv",
  },
  {
    title: "wertytttt",
    price: "123459999",
    thumbmail: "qwertyvtggtg",
  },
  {
    title: "ywgeduegduiwgdiw",
    price: "28479234729",
    thumbmail: "BUDBUWBEUEG",
  },
  {
    title: "nuevo titulo",
    price: "1002",
    thumbmail: "http://www.algo.com",
  },
  {
    title: "nuevo titulo",
    price: "1002",
    thumbmail: "http://www.algo.com",
  },
];

const productos = new Productos(options);
productos
  .crearTabla()
  .then(() => console.log("Tabla Animales creada con éxito"))
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    productos.cerrarDB();
  });

app.listen(8080, () => {
  console.log("listen on port 8080");
});
