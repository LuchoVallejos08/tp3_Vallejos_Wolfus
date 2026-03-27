import dayjs from "dayjs";

function mostrarFecha (){

    
    const ahora = dayjs();

    

    console.log(ahora.format('DD/MM/YYYY'));
    console.log(ahora.format('HH:mm'));

}

export default mostrarFecha;