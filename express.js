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
const c = require("./coderhouse_clase2/Contenedor");
const d = new c();
const f = d.leerArchivo();

app.get("/productos", function (req, res, next) {
  next();
  res.send(f);
});

app.get("/productosRandom", function (req, res, next) {
  next();
  let rand = Math.floor(Math.random() * (f.length - 0 + 1)) + 0;
  if (rand < 0) {
    console.log("rand menor que cero");
  }
  if (rand > f.length) {
    console.log("random number mayor que array");
  }
  /* if (rand.isFloat()) {
    console.log("random es de tipo float");
  } */
  res.send(f[rand]);
});

app.listen(3000);
