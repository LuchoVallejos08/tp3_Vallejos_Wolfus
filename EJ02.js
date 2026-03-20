import fs from "fs";

function agregarProducto(nombre, precio) {
    const data = fs.readFileSync("productos.json", "utf-8");
    const productos = JSON.parse(data);
    const nuevoProducto = { nombre, precio };
    productos.push(nuevoProducto);
    fs.writeFileSync("productos.json", JSON.stringify(productos, null, 2)); //lo puse asi para que si no existe archivo .JSON lo cree
    console.log("Producto agregado correctamente");
}

export default agregarProducto;