let i = 1;

function mostrarSegundo() {
    console.log(i);
    i++;
}

function contador() {
    //arranca el intervalo y guardo el id
    const id = setInterval(mostrarSegundo, 1000);

    //despues de 10.5 segundos lo freno
    setTimeout(() => {
        clearInterval(id);
        console.log("Contador finalizado");
    }, 10500);
}

export default contador;