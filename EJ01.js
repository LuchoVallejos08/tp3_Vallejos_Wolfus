import fs from "fs";
import { json, text } from "stream/consumers";

function mostrarArchivo(){

     fs.readFile("productos.json", "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const productos = JSON.parse(data);
        console.log("contenido:", productos);
})}

export default mostrarArchivo;