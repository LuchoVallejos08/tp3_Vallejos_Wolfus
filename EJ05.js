import fs from "fs"
import productos from './productos.json' with { type: 'json' };

function buscarProducto(nombre) {

    const data = fs.readFileSync('./productos.json', 'utf-8');
    const productos = JSON.parse(data);

    const productoEncontrado = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if(productoEncontrado == null){
        console.log("Producto no encontrado")
    }else{
        console.log("Producto encontrado: Nombre " + productoEncontrado.nombre + "; precio " + productoEncontrado.precio)
    }
}

export default buscarProducto;