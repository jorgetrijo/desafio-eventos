const productos = [
    {
        id: 1,
        nombre: "Jean Levis",
        precio: 2599,
        imagen: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwfae42a71/HH5047_MK9_24.jpg?imwidth=915&impolicy=product",
    },
    {
        id: 2,
        nombre: "Jean Kevinston",
        precio: 2999,
        imagen: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw17e28082/HH5047_ML4_24.jpg?imwidth=915&impolicy=product",
    },
    {
        id: 3,
        nombre: "Jean Zara",
        precio: 2499,
        imagen: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw8c9b3b49/HH9570_9LM_24.jpg?imwidth=915&impolicy=product",
    },
    {
        id: 4,
        nombre: "Jean McOwens",
        precio: 3999,
        imagen: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw6f0ff881/HH9362_MK9_24.jpg?imwidth=915&impolicy=product",
    },
]

let contadorCarrito = 0;
const carrito = [];

const productoCatalogoHTML = (producto) => {
  return `
    <div class="col">
      <div class="card">
        <img
          src="${producto.imagen}"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Precio: ${producto.precio}</p>
          <button id="btn-catalogo-${producto.id}" class="btn btn-success">Agregar</button>
        </div>
      </div>
    </div>`;
};

const productoCarritoHTML = (producto) => {
  return `
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <button id="btn-carrito-${producto.idCompra}" class="btn btn-danger">Quitar</button>
        </div>
      </div>
    </div>`;
};

const mostrarCatalogo = () => {
  const catalogoNodo = document.getElementById("catalogo");
  let catalogoHTML = "";

  for (const producto of productos) {
    catalogoHTML += productoCatalogoHTML(producto);
  }

  catalogoNodo.innerHTML = catalogoHTML;
  botonesCatalogo();
};
const mostrarCarrito = () => {
  const carritoNodo = document.getElementById("carrito");
  const precioNodo = document.getElementById("precioTotal");

  let carritoHTML = "";
  let precio = 0;
  for (const producto of carrito) {
    carritoHTML += productoCarritoHTML(producto);
    precio += producto.precio;
  }

  precioNodo.innerHTML = precio;
  carritoNodo.innerHTML = carritoHTML;
  botonesCarrito();
};

const botonesCatalogo = () => {
  for (const producto of productos) {
    const botonId = `btn-catalogo-${producto.id}`;
    const botonNodo = document.getElementById(botonId);

    botonNodo.addEventListener("click", () => {
      const productoCarrito = {
        nombre: producto.nombre,
        idCompra: contadorCarrito,
        precio: producto.precio,
      };

      contadorCarrito += 1;
      carrito.push(productoCarrito);
      mostrarCarrito();
    });
  }
};

const botonesCarrito = () => {
  for (const producto of carrito) {
    const botonId = `btn-carrito-${producto.idCompra}`;
    const botonNodo = document.getElementById(botonId);

    botonNodo.addEventListener("click", () => {
      const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
      carrito.splice(index, 1);
      mostrarCarrito();
    });
  }
};

mostrarCatalogo();

console.log(productoCatalogoHTML(productos[0]));