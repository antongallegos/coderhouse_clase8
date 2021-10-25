//INICIAMOS SERVIDOR CON EXPRESS
const express = require("express");
const server = express();

//PARA QUE EL SERVIDOR PUEDA INTERPRETAR EN FORMA AUTOMATICA
//MENSAJES DE TIPO JSON EN CORMATO URLENCODE
server.use(express.json());
//NECESARIO PARA INTERPRETAR LOS FORMULARIOS DEL HTML
server.use(express.urlencoded({ extended: true }));

//AGREGA ROUTE
const newRoute = require("./newRoutes");
server.use("/api", newRoute);

//Agrega ruta a carpeta public
server.use(express.static("public"));
//Si quisiero que el archivo vaya a una ruta especifica:
//server.use('/static', express.static("public"));

//INDICAMOS EL PUERTO QUE ESCUCHA EXPRESS
server.listen(8080, () => {
  console.log("listen on port 8080");
});
