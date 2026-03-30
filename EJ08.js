

 function analizarTexto(texto) {
    const resultado = {
        caracteres: texto.length,
        palabras: 0,
        vocales: 0,
        consonantes: 0
    };

    for (let char of texto.toLowerCase()) {
        if (/[aeiou]/.test(char)) resultado.vocales++;
        else if (/[a-z]/.test(char)) resultado.consonantes++;
        else if (char === ' ') resultado.palabras++;
    }
    return resultado;

}
export default analizarTexto;