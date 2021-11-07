const socket = io.connect();

socket.on("productos", (data) => {
  console.log(data);
  console.log(renderProductos(data));
});

//Metodo que renderiza los productos en el DOM
const renderProductos = (productos) => {
  const html = productos
    .map((element, index) => {
      console.log("element");
      return array.forEach((element) => {
        `<tr>
        <td>${element.title}</td>
        <td>${element.title}</td>
        <td></td>
        <td></td>
    </tr>`ZZ
      });
    })
    .join(" ");
  console.log(html);
  document.getElementById("productos").innerHTML = html;
};
