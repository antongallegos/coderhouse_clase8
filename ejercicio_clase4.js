const express = require("express");
const server = express();

//IMPORTAR CLASE CONTENEDOR
const c = require("./Contenedor");
const d = new c();
const f = d.leerArchivo();

server.get("/api/productos", (req, res) => {
  let a = d.leerArchivo();
  res.send(a);
});

server.get("/api/productos/:id", (req, res) => {
  let id = req.params.id;
  let a = d.getById(id);
  res.json(a);
});

server.post("/api/productos", (req, res) => {
  let a = d.leerArchivo();
  res.json(a);
});

server.put("/api/productos/:title/:price/:th", (req, res) => {
  let title = req.params.title;
  let price = req.params.price;
  let th = req.params.th;
  let a = d.addProducto(title, price, th);
  d.saveProd(a);
  res.json(a);
});

server.delete("/api/productos/:id", (req, res) => {
  let id = req.params.id;
  let a = d.deleteById(id);
  d.saveProd();
  res.json(a);
});

server.listen(3000, () => {
  console.log("listen on port 3000");
});
