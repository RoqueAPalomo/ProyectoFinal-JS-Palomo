/*Elementos del DOM*/

const carritoItems = document.getElementById("carrito-items");
const botonAgregar = document.getElementsByClassName("btn btn-primary");
const totalProductos = document.getElementById("total");
const botonPago = document.getElementById("checkout-btn");

/*Local Storage y JSON*/

localStorage.setItem("compra","¡Carrito de compra guardado!");
let claceCompra = localStorage.getItem("compra");

/*Arrays de productos disponibles*/

let remeras = [
  { nombre: "Caballeros del Zodiaco", precio: 4000 },
  { nombre: "Pokemon", precio: 4000 },
  { nombre: "Dragon Ball", precio: 4000 }
];
localStorage.setItem("remeras", JSON.stringify(remeras));
remeras = JSON.parse(localStorage.getItem("remeras"));

/*Fetch*/

fetch("./productos.json")
.then((response) => {
  if(response.ok) {
    return response.json()
  } else {
    throw new Error("Error en el servidor:" +response.status);
  }
})
.then((productos) =>{
  console.log(productos)
}
)
.catch((error) => {
  console.log("En este momento no podemos cargar los productos");
})





