const validarPassword = (password) => {
    let tieneNumero = false;
    let tieneMayuscula = false;
    let i = 0;

    if (password.length >= 8) {
        
        do { 
            if (password[i] >= '0' && password[i] <= '9') {
                tieneNumero = true;
            }

            if (password[i] >= 'A' && password[i] <= 'Z') {
                tieneMayuscula = true;
            }

            i++;
        } while (i < password.length);
    }

    if (password.length >= 8 && tieneNumero && tieneMayuscula) {
        console.log("La contraseña es valida");
    } else {
        console.log("La contraseña no es valida");
    }
}

export default validarPassword;