import fs from "fs"

function buscarProducto(nombre) {

    const productoEncontrado = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if(productoEncontrado == null){
        console.log("Producto no encontrado")
    }else{
        console.log("Nombre " + productoEncontrado.nombre + "; precio " + productoEncontrado.precio)
    }
}