//IMPORTAR CLASE CONTENEDOR
const c = require("../Contenedor");
const d = new c();
const productos = d.leerArchivo();

const getProductos = () => productos;

module.exports = {
  getProductos,
};
