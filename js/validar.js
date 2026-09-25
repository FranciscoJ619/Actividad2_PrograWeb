function validarCampos(){
    const formulario = document.getElementById("registro");
    formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const codigoPostal = document.getElementById("codigoPostal").value;
    const password = document.getElementById("password").value;
    const respuesta = document.getElementById("respuesta").value;

    const mensaje = document.getElementById("mensaje");
    // Validar nombre
    if (!soloLetras(nombre)) {
        mensaje.textContent = "El nombre solo debe contener letras.";
        return;
    }
    // Validar correo
    if (!validarCorreo(correo)) {
        mensaje.textContent = "El correo electrónico no es válido.";
        return;
    }
    // Validar fecha
    if (fechaNacimiento === "") {
        mensaje.textContent = "Debes ingresar tu fecha de nacimiento.";
        return;
    }
    // Validar codigo Postal
    if (!validarLongitud(codigoPostal, 5)) {
        mensaje.textContent = "El número debe contener exactamente 5 dígitos.";
        return;
    }
    // Validar contraseña
    const variable=validarPassword(password);
    switch(variable){
        case 1:
            mensaje.textContent = "La contraseña debe tener al menos una letra Mayuscula"
            return
        case 2:
            mensaje.textContent = "La contraseña debe tener al menos una letra Minuscula"
        return
        case 3:
            mensaje.textContent = "La contraseña debe tener al menos un numero"
        return
        case 4:
            mensaje.textContent = "La contraseña debe tener al menos un caracter especial"
        return
        case 5:
            mensaje.textContent = "La contraseña debe tener al menos 8 caracteres"
        return   
    }
    // Calcular edad
    const edad = calcularEdad(fechaNacimiento);
    // Verificar mayoría de edad
    if (!esMayorDeEdad(fechaNacimiento)) {
        mensaje.textContent = "Debes ser mayor de edad.";
        return;
    }
    // Validar robot
    if (!validarRobot(respuesta)) {
        mensaje.textContent = "La respuesta es incorrecta";
        return;
    }
    mensaje.textContent = "¡Todos los datos son válidos!";
    // Mostrar modal
    document.getElementById("resultadoEdad").textContent = "Tu edad es de " + edad + " años.";
    document.getElementById("modalEdad").style.display = "flex";
    });
    // Cerrar modal con el botón Aceptar
    document.getElementById("aceptarModal").addEventListener("click", function() {
    document.getElementById("modalEdad").style.display = "none";
    });
}