const socket = io.connect();

socket.on("productos", (data) => {
  console.log(data);
  console.log(renderProductos(data));
});

//Metodo que renderiza los productos en el DOM
const renderProductos = (productos) => {
  const html = productos
    .map((element, index) => {
      return `
        <tr>
            <td>${index}</td>
            <td>${element.title}</td>
            <td>${element[0].price}</td>
            <td>${element[0].thumbmail}</td>
        </tr>
        `;
    })
    .join(" ");
  console.log(html);
  document.getElementById("productos").innerHTML = html;
};
