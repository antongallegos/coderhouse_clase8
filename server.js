//INICIAMOS SERVIDOR CON EXPRESS
const express = require("express");
const handlebars = require("express-handlebars");
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

//IMPORTAMOS CONTENEDOR
const c = require("./Contenedor");
const d = new c();
const f = d.leerArchivo();

//HANDLEBARS
server.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials/",
  })
);

server.set("view engine", "hbs");
server.set("views", "./views");

server.get("/", (req, res) => {
  res.render("main", { productos: f, listExist: true });
});

//INDICAMOS EL PUERTO QUE ESCUCHA EXPRESS
server.listen(8080, () => {
  console.log("listen on port 8080");
});
