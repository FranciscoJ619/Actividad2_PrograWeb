function validarLogin(){    
    const formulario = document.getElementById("registro");
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const correo = document.getElementById("correo").value.trim();
        const password = document.getElementById("password").value;
        // Validar correo
        if (!validarCorreo(correo)) {
            mensaje.textContent = "El correo electrónico no es válido.";
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
        mensaje.textContent = "¡Todos los datos son válidos!";
        // Mostrar modal
        document.getElementById("registrar").textContent = "Registro exitoso";
        document.getElementById("modalLogin").style.display="flex";
    });
    // Cerrar modal con el botón Aceptar
    document.getElementById("aceptarModal").addEventListener("click", function() {
    document.getElementById("modalLogin").style.display = "none";
    });
}