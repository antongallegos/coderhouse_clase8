var express = require("express");
var app = express();
//Establecemos el puerto de nuestro servidor como 8080
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
//Conexión con evento error
server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/", function (req, res, next) {
  next();
});

app.get("/", (req, res) => {
  res.send({ mensaje: "hola mundo" });
});
//req = request (petición) / res = response (respuesta)

//IMPORTAR CLASE CONTENEDOR
const c = require("./coderhouse_clase2/Contenedor.js");

const todos = c.getAll;

console.log(todos);

app.get("/productos", function (req, res, next) {
  next();
});

app.listen(3000);
