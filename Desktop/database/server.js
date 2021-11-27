const express = require("express");
const app = express();

//IMPORTAMOS CLASES
import Productos from "./ecommerce/Productos";
import Mensajes from "./ecommerce/Mensajes";
//import Productos from "./Productos";
import { mysql } from "./ecommerce/options";
import { sqlite3 } from "./ecommerce/options";

const arrayProductos = [
  {
    title: "Escuadra",
    price: 123.45,
    thumbmail: "https://cdn3.iconfinder.com/",
  },
  {
    title: "Calculadora",
    price: 234.56,
    thumbmail: "https://cdn3.iconfinder.com/",
  },
  {
    title: "Globo Terráqueo",
    price: 345.67,
    thumbmail: "https://cdn3.iconfinder.com/",
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

const productos = new Productos(mysql);
productos
  .crearTabla()
  .then(() => console.log("Tabla Productos creada con éxito"))
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    productos.cerrarDB();
  });

const mensajes = new Mensajes(sqlite3);
mensajes
  .crearTabla()
  .then(() => console.log("Tabla Mensajes creada con éxito"))
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mensajes.cerrarDB();
  });

app.listen(8080, () => {
  console.log("listen on port 8080");
});
