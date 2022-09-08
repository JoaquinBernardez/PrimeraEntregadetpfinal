class CompraDeProductos {
    constructor() {
        this.productos = [
            parseInt(prompt("Seleccione el numero de producto que desea comprar: \n1-BlackPad ($6000), \n2-Largeblackpad ($7500), \n3-Pinkpad (6500), \nSELECCIONE 0 PARA FINALIZAR SU COMPRA"))
        ]
    }
    seleccionarProducto(){
      let prod2 = parseInt(prompt("Seleccione el numero de producto que desea comprar: \n1-BlackPad ($6000), \n2-Largeblackpad ($7500), \n3-Pinkpad (6500), \nSELECCIONE 0 PARA FINALIZAR SU COMPRA"))
      while(prod2 !== 0){
        if(prod2 > 0 && prod2 <= 3){
          this.productos.push(prod2)
          alert(`Se ha agregado el producto ${prod2} correctamente`)
          prod2 = parseInt(prompt("Seleccione el numero de producto que desea comprar: \n1-BlackPad ($6000), \n2-Largeblackpad ($7500), \n3-Pinkpad (6500), \nSELECCIONE 0 PARA FINALIZAR SU COMPRA"))
        }
        else{
          alert("Producto no existente")
          prod2 = parseInt(prompt("Seleccione el numero de producto que desea comprar: \n1-BlackPad ($6000), \n2-Largeblackpad ($7500), \n3-Pinkpad (6500), \nSELECCIONE 0 PARA FINALIZAR SU COMPRA"))
        }
      }
      console.log(this.productos)
    }

    eliminarProducto(){
      let eliminar = confirm("Desea eliminar un producto?")
        while(eliminar){
          let productoAEliminar = parseInt(prompt(`Tu carrito: ${this.productos}\nIngrese el numero de producto que desea eliminar`))
          this.productos.splice(this.productos.indexOf(productoAEliminar),1)
          eliminar = confirm("Desea eliminar un producto?")
        }
      }
    }

let general = new CompraDeProductos();
general.seleccionarProducto();
general.eliminarProducto();
