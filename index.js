//Crea protocolo HTTP
const http = require("http");

//Crea Servidor que recibe y da respuestas
const server = http.createServer((peticion, respuesta) => {
  respuesta.end("Hola mundo");
});

//Conectar al puerto 8080
const connectedServer = server.listen(8080, () => {
  console.log(
    `Servidor Http escuchando en el puerto ${connectedServer.address().port}`
  );
});
