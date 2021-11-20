//INICIAMOS SERVIDOR CON EXPRESS
const express = require("express");
const handlebars = require("express-handlebars");
const { Server: HTTPServer } = require("http");
const { Server: SocketServer } = require("socket.io");
const { getProductos } = require("./models/productos");

const server = express();

//CREAMOS CONEXIÒN A SOCKET
const httpServer = new HTTPServer(server);
const io = new SocketServer(httpServer);

//CREAMOS MENSAJE DE CONEXIÒN
io.on("connection", async (socket) => {
  console.log("Nuevo cliente conectado");

  const productos = await getProductos();
  console.log(productos);
  socket.emit("productos", productos);
});

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

server.get("/productos", (req, res) => {
  res.render("main", { productos: f, listExist: true });
});

server.get("/form", (req, res) => {
  res.render("form");
});

//INDICAMOS EL PUERTO QUE ESCUCHA EXPRESS
/* server.listen(8080, () => {
  console.log("listen on port 8080");
}); */

//AL TRABAJAR CON SOCKET SE MODIFICA EL PUERTO Y EL ESCUCHA DEBE SALIR DE HTTP
const PORT = 3000;
const connectedServer = httpServer.listen(PORT, () => {
  console.log(
    `Servidor HTTP con Websocket escuchando en el puerto ${
      connectedServer.address().port
    }`
  );
});
connectedServer.on("error", (error) =>
  console.log(`Error en servidor: ${error}`)
);
