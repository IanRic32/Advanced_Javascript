document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('registroEvento');
    
    // Configuración de validaciones
    const validaciones = {
        nombre: {
            validar: valor => valor.trim().length >= 3,
            mensaje: 'El nombre debe tener al menos 3 caracteres'
        },
        correo: {
            validar: valor => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
            mensaje: 'Por favor, ingresa un correo electrónico válido'
        },
        telefono: {
            validar: valor => /^\d{10}$/.test(valor),
            mensaje: 'El teléfono debe tener 10 dígitos'
        },
        intereses: {
            validar: elementos => elementos.length > 0,
            mensaje: 'Selecciona al menos un interés'
        },
        horario: {
            validar: elemento => elemento !== null,
            mensaje: 'Selecciona un horario preferido'
        },
        fecha: {
            validar: valor => {
                const fechaSeleccionada = new Date(valor);
                const hoy = new Date();
                hoy.setHours(0, 0, 0, 0);
                return fechaSeleccionada >= hoy;
            },
            mensaje: 'La fecha no puede ser en el pasado'
        },
        archivo: {
            validar: archivo => {
                if (!archivo) return true; // Opcional
                const extensionesPermitidas = ['pdf', 'jpg', 'png'];
                const extension = archivo.name.split('.').pop().toLowerCase();
                return extensionesPermitidas.includes(extension);
            },
            mensaje: 'Solo se permiten archivos PDF, JPG o PNG'
        }
    };

    // Función para mostrar errores
    function mostrarError(campo, mensaje) {
        const errorElement = document.getElementById(`error-${campo.id || campo.name}`);
        errorElement.textContent = mensaje;
        errorElement.style.display = 'block';
        campo.classList.add('invalido');
    }

    // Función para limpiar errores
    function limpiarError(campo) {
        const errorElement = document.getElementById(`error-${campo.id || campo.name}`);
        errorElement.style.display = 'none';
        campo.classList.remove('invalido');
    }

    // Validación en tiempo real
    document.getElementById('nombre').addEventListener('input', function() {
        if (this.value.trim() !== '') {
            validaciones.nombre.validar(this.value) 
                ? limpiarError(this) 
                : mostrarError(this, validaciones.nombre.mensaje);
        } else {
            limpiarError(this);
        }
    });

    document.getElementById('correo').addEventListener('input', function() {
        if (this.value.trim() !== '') {
            validaciones.correo.validar(this.value) 
                ? limpiarError(this) 
                : mostrarError(this, validaciones.correo.mensaje);
        } else {
            limpiarError(this);
        }
    });

    document.getElementById('telefono').addEventListener('input', function() {
        if (this.value.trim() !== '') {
            validaciones.telefono.validar(this.value) 
                ? limpiarError(this) 
                : mostrarError(this, validaciones.telefono.mensaje);
        } else {
            limpiarError(this);
        }
    });

    document.getElementById('fecha').addEventListener('change', function() {
        validaciones.fecha.validar(this.value) 
            ? limpiarError(this) 
            : mostrarError(this, validaciones.fecha.mensaje);
    });

    document.getElementById('archivo').addEventListener('change', function() {
        validaciones.archivo.validar(this.files[0]) 
            ? limpiarError(this) 
            : mostrarError(this, validaciones.archivo.mensaje);
    });

    // Validación al enviar el formulario
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        let formularioValido = true;

        // Validar nombre
        const nombre = document.getElementById('nombre');
        if (!validaciones.nombre.validar(nombre.value)) {
            mostrarError(nombre, validaciones.nombre.mensaje);
            formularioValido = false;
        }

        // Validar correo
        const correo = document.getElementById('correo');
        if (!validaciones.correo.validar(correo.value)) {
            mostrarError(correo, validaciones.correo.mensaje);
            formularioValido = false;
        }

        // Validar teléfono
        const telefono = document.getElementById('telefono');
        if (!validaciones.telefono.validar(telefono.value)) {
            mostrarError(telefono, validaciones.telefono.mensaje);
            formularioValido = false;
        }

        // Validar intereses
        const intereses = document.querySelectorAll('input[name="intereses"]:checked');
        if (!validaciones.intereses.validar(intereses)) {
            mostrarError(document.querySelector('input[name="intereses"]'), validaciones.intereses.mensaje);
            formularioValido = false;
        }

        // Validar horario
        const horario = document.querySelector('input[name="horario"]:checked');
        if (!validaciones.horario.validar(horario)) {
            mostrarError(document.querySelector('input[name="horario"]'), validaciones.horario.mensaje);
            formularioValido = false;
        }

        // Validar fecha
        const fecha = document.getElementById('fecha');
        if (!validaciones.fecha.validar(fecha.value)) {
            mostrarError(fecha, validaciones.fecha.mensaje);
            formularioValido = false;
        }

        // Validar archivo
        const archivo = document.getElementById('archivo').files[0];
        if (!validaciones.archivo.validar(archivo)) {
            mostrarError(document.getElementById('archivo'), validaciones.archivo.mensaje);
            formularioValido = false;
        }

        // Si todo es válido
        if (formularioValido) {
            alert('¡Registro exitoso! Gracias por registrarte en nuestro evento.');
            // formulario.submit(); // Descomentar para envío real
        }
    });
});
