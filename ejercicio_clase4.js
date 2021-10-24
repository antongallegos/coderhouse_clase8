//INICIAMOS SERVIDOR CON EXPRESS
const express = require("express");
const server = express();

//PARA QUE EL SERVIDOR PUEDA INTERPRETAR EN FORMA AUTOMATICA
//MENSAJES DE TIPO JSON EN CORMATO URLENCODE
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//AGREGA ROUTE
const newRoute = require("./newRoutes");
server.use("/api", newRoute);
server.use(express.static("public"));

//INDICAMOS EL PUERTO QUE ESCUCHA EXPRESS
server.listen(8080, () => {
  console.log("listen on port 8080");
});
