//IMPORTAMOS ROUTE
const { Router } = require("express");
const router = Router();
//LO DE ARRIBA ES IGUAL A:
// const express = require('express');
// const router = express.Router;

//IMPORTAR CLASE CONTENEDOR
const c = require("./Contenedor");
const d = new c();
const f = d.leerArchivo();

router.get("/productos", (req, res) => {
  let a = d.leerArchivo();
  res.send(a);
});

router.get("/productos/:id", (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.send({ error: "El parámetro ingresado no es un número" });
  }
  if (id < 1 || id > f.length) {
    return res.send({ error: "Producto no encontrado" });
  } else {
    d.leerArchivo();
    res.json(d.getById(id));
  }
});

//FALTA COMPLETAR
router.post("/productos", (req, res) => {
  d.leerArchivo();
  let title = req.body.title;
  let price = req.body.price;
  let th = req.body.th;
  d.addProducto(title, price, th);
  d.saveProd(d.getAll());
  res.redirect("/api/productos");
});

router.put("/productos/:id/:title/:price/:th", (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.send({ error: "El parámetro ingresado no es un número" });
  }
  if (id < 1 || id > f.length) {
    return res.send({ error: "Producto no encontrado" });
  } else {
    let title = req.params.title;
    let price = req.params.price;
    let th = req.params.th;
    let a = d.productos[id].addProducto(title, price, th);
    d.saveProd(a);
    res.json(a);
  }
});

router.delete("/productos/:id", (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.send({ error: "El parámetro ingresado no es un número" });
  }
  if (id < 1 || id > f.length) {
    return res.send({ error: "Producto no encontrado" });
  } else {
    let a = d.deleteById(id);
    d.saveProd();
    res.json(a);
  }
});

module.exports = router;
