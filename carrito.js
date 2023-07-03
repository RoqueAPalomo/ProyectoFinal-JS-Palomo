
/* Evento del botón "Agregar al carrito", for y operador*/

for (let i = 0; i < botonAgregar.length; i++) {
    botonAgregar[i].addEventListener("click", agregarCarrito);
  }
  
  
  /* Carrito de compras*/

  let carrito = [];
  let total = 0;
  
  /* Función para agregar un producto al carrito*/
  
  function agregarCarrito(evento) {
    const remeraItem = Array.from(botonAgregar).indexOf(evento.target);
    const remeraSeleccionada = remeras[remeraItem];
  
    carrito.push(remeraSeleccionada);
    total += remeraSeleccionada.precio;
  
    actualizar();
  }
  
  /* Actualización del carrito. innerHTML y operador avanzado ++*/
  
  function actualizar() {
    carritoItems.innerHTML = "";
    for (let i = 0; i < carrito.length; i++) {
      const remerasCarrito = carrito[i];
      const li = document.createElement("li");/*modificación del elemneto del DOM*/
      li.textContent = remerasCarrito.nombre;
      carritoItems.appendChild(li);
    }
  
    totalProductos.textContent = `Total: $${total}`;
  }
  
  /* Evento del botón "Realizar Pago"*/
  
  botonPago.addEventListener("click", pago);
  
  /* Función para el pago*/
  
  function pago() {
    if (carrito.length > 0) {

  /*Librería SweetAlert*/  

      Swal.fire({
        icon: 'success',
        title: '¡Pago Exitoso!',
        text: 'Gracias por su compra',
      });

      carrito = [];
      total = 0;
      actualizar();
    } else {
      Swal.fire({
        icon: 'warning',
        title: '¡Carrito vacio!',
        text: 'Agregue productos antes de realizar el pago.',
      });
    
    }
  }
  