let section = document.getElementById("productos");
let boton = document.getElementsByClassName("boton");
class Productos {
	constructor(id, nombre, precio, propiedades, color, imagen) {
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.propiedades = propiedades;
		this.color = color;
		this.imagen = [
			"./images/pad2.webp",
			"./images/pad3.webp",
			"./images/pad4.webp",
		];
	}

	mostrarProductos() {
		let div = document.createElement("div");
		div.innerHTML = `<h2> Nombre: ${this.nombre} </h2> <p> Precio: ${this.precio}</p>
    <p>Propiedad: ${this.propiedades}</p> <p> Color: ${this.color} </p><img class="cambio"src="${this.imagen[0]}"></img> <button class="boton"> Agregar al carrito </button>`;
		div.classList.add("productos__card");
		section.append(div);
		/* Evento de click */
		div.addEventListener("click", (a) => {
			/* div.classList.toggle(
				alert(
					"MousePad creado por JCOMPANYY, destinado a la velocidad y a la presicion."
				)
			); */
			div.classList.toggle("primerevento");
		});
	}
	/* agregarAlCarrito() {
		let arr = [];
		boton.addEventListener("click", (a) => {
			boton.push
		}); */
}

let prod1 = new Productos(1, "Pad1", 6000, "Velocidad", "Negro");
let prod2 = new Productos(2, "Pad2", 8000, "Precision", "Negro");
let prod3 = new Productos(3, "Pad3", 6500, "Velocidad", "Rosa");
prod1.mostrarProductos();
prod2.mostrarProductos();
prod3.mostrarProductos();
