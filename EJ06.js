import { readFile, writeFile } from 'fs/promises';

async function h() {
    try {
        const data = await readFile('productos.json', 'utf8');

        const productos = JSON.parse(data);
        let csv = 'nombre,precio\n';

        productos.forEach(producto => {
            csv += `${producto.nombre},${producto.precio}\n`;
        });

        await writeFile('productos.csv', csv);

        console.log('Archivo productos.csv creado correctamente.');

    } catch (error) {
        console.error('Error:', error);
    }
}
export default h;