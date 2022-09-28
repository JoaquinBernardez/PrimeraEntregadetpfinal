/* Meto en variables el codigo de html */
const contenedorProductos = document.getElementById("contenedor-productos");
let contenedorCarrito = document.getElementById("carrito-contenedor");
let botonVaciar = document.getElementById("vaciar-carrito");
let contadorCarrito = document.getElementById("contadorCarrito");
let carritoCerrar = document.getElementById("carritoCerrar");
let precioTotal = document.getElementById("precioTotal");
const carrito = [];

document.addEventListener("DOMContentLoaded", () => {
	if (localStorage.getItem("carrito")) {
		carrito = JSON.parse(localStorage.getItem("carrito"));
		actualizarCarrito();
	}
});

botonVaciar.addEventListener("click", () => {
	carrito.length = 0;
	actualizarCarrito();
});

stockDeProductos.forEach((producto) => {
	let div = document.createElement("div");
	div.classList.add("producto");
	div.innerHTML = `
	<img src=${producto.img} alt="" >
	<h3 class="producto-h3">${producto.nombre}</h3>
	<p>${producto.tipo}</p>
	<p class="precioProducto">Precio: ${producto.precio}</p>
	<button id="agregar${producto.id}" class="boton-agregar p-2 rounded">Agregar <i class="fas fa-shopping-cart"></i></button>
	`;
	contenedorProductos.appendChild(div);

	let boton = document.getElementById(`agregar${producto.id}`);
	boton.addEventListener("click", () => {
		agregarAlCarrito(producto.id);
	});
});

let agregarAlCarrito = (prodId) => {
	let existe = carrito.some((prod) => prod.id === prodId);

	if (existe) {
		let prod = carrito.map((prod) => {
			if (prod.id === prodId) {
				prod.cantidad++;
			}
		});
	} else {
		let item = stockDeProductos.find((prod) => prod.id === prodId);
		carrito.push(item);
		console.log(carrito);
	}
	actualizarCarrito();
};
let eliminarDelCarrito = (prodId) => {
	let item = carrito.find((prod) => prod.id === prodId);
	let indice = carrito.indexOf(item);
	carrito.splice(indice, 1);
	actualizarCarrito();
};

let actualizarCarrito = () => {
	contenedorCarrito.innerHTML = "";
	carrito.forEach((prod) => {
		let div = document.createElement("div");
		div.className = "productoEnCarrito";
		div.innerHTML = `
		<p>${prod.nombre}</p>
		<p>Precio: ${prod.precio}</p>
		<p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
		<button onclick = "eliminarDelCarrito(${prod.id})"class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
		`;
		contenedorCarrito.appendChild(div);

		localStorage.setItem("carrito", JSON.stringify(carrito));
	});
	contadorCarrito.innerText = carrito.length;
	precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
};

/* Le agrego eventos al modal para ser */

const contenedorModal = document.getElementsByClassName("modal-contenedor")[0];
const botonAbrir = document.getElementById("boton-carrito");
const botonCerrar = document.getElementById("carritoCerrar");
const modalCarrito = document.getElementsByClassName("modal-carrito")[0];

botonAbrir.addEventListener("click", () => {
	contenedorModal.classList.toggle("modal-active");
});
botonCerrar.addEventListener("click", () => {
	contenedorModal.classList.toggle("modal-active");
});

contenedorModal.addEventListener("click", (event) => {
	contenedorModal.classList.toggle("modal-active");
});
modalCarrito.addEventListener("click", (event) => {
	event.stopPropagation();
});
