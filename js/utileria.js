function validarCorreo(correo) { 
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return expresion.test(correo); 
}

function soloLetras(texto) { 
    const expresion = /^[A-Za-z\s]+$/; 
    return expresion.test(texto); 
}

function validarLongitud(numero, maxLongitud) { 
    return String(numero).length == maxLongitud; 
}

function calcularEdad(fechaNacimiento) { 
    const nacimiento = new Date(fechaNacimiento); 
    const hoy = new Date(); 
    let edad = hoy.getFullYear() - nacimiento.getFullYear(); 
    const mes = hoy.getMonth() - nacimiento.getMonth(); 
    if (mes <= 0) { 
        edad--; 
    }
    if (edad<0){
        return 0;
    }
    return edad; 
}

function esMayorDeEdad(fechaNacimiento) { 
    return calcularEdad(fechaNacimiento) >= 18; 
}

function validarPassword(contrasena) { 
    const tieneMayuscula = /[A-Z]/.test(contrasena); 
    const tieneMinuscula = /[a-z]/.test(contrasena); 
    const tieneNumero = /[0-9]/.test(contrasena); 
    const tieneEspecial = /[^A-Za-z0-9]/.test(contrasena); 
    const tieneLongitud = contrasena.length >= 8; 
    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial && tieneLongitud){
        return true;
    } else {
        return false;
    }
}