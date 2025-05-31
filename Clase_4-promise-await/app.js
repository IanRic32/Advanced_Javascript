// Configuración inicial
const mesasDisponibles = 10;
const resultadoDiv = document.getElementById('resultado');
const loadingDiv = document.getElementById('loading');
const nombreInput = document.getElementById('nombre');
const mesasInput = document.getElementById('mesas');
const promiseBtn = document.getElementById('promise-btn');
const asyncBtn = document.getElementById('async-btn');

// Función para mostrar resultados
function mostrarResultado(mensaje, esError = false) {
    resultadoDiv.textContent = mensaje;
    resultadoDiv.className = esError ? 'result-container error' : 'result-container success';
}

// Función para mostrar/ocultar carga
function toggleLoading(mostrar) {
    loadingDiv.style.display = mostrar ? 'flex' : 'none';
}

function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mesasSolicitadas <= mesasDisponibles) {
                resolve(`${mesasSolicitadas} mesa(s) reservada(s) con éxito.`);
            } else {
                reject(`Lo sentimos, solo tenemos ${mesasDisponibles} mesa(s) disponible(s).`);
            }
        }, 2000);
    });
}

function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.3;
            if (exito) {
                resolve(`Correo de confirmación enviado a ${nombreCliente}`);
            } else {
                reject(`Error al enviar el correo a ${nombreCliente}. Por favor intente más tarde.`);
            }
        }, 1500);
    });
}


function reservarConPromesas() {
    const nombre = nombreInput.value.trim();
    const mesas = parseInt(mesasInput.value);
    
    if (!nombre || isNaN(mesas) || mesas < 1) {
        mostrarResultado('Por favor ingrese un nombre válido y número de mesas (1-10)', true);
        return;
    }
    
    toggleLoading(true);
    resultadoDiv.textContent = '';
    
    verificarDisponibilidad(mesas)
        .then(disponibilidad => {
            mostrarResultado(disponibilidad);
            return enviarConfirmacionReserva(nombre);
        })
        .then(confirmacion => {
            mostrarResultado(`${resultadoDiv.textContent}\n${confirmacion}`);
        })
        .catch(error => {
            mostrarResultado(error, true);
        })
        .finally(() => {
            toggleLoading(false);
        });
}

async function reservarConAsync() {
    const nombre = nombreInput.value.trim();
    const mesas = parseInt(mesasInput.value);
    
    if (!nombre || isNaN(mesas) || mesas < 1) {
        mostrarResultado('Por favor ingrese un nombre válido y número de mesas (1-10)', true);
        return;
    }
    
    toggleLoading(true);
    resultadoDiv.textContent = '';
    
    try {
        const disponibilidad = await verificarDisponibilidad(mesas);
        mostrarResultado(disponibilidad);
        
        const confirmacion = await enviarConfirmacionReserva(nombre);
        mostrarResultado(`${resultadoDiv.textContent}\n${confirmacion}`);
    } catch (error) {
        mostrarResultado(error, true);
    } finally {
        toggleLoading(false);
    }
}

promiseBtn.addEventListener('click', reservarConPromesas);
asyncBtn.addEventListener('click', reservarConAsync);

// Validación de entrada
mesasInput.addEventListener('input', () => {
    if (mesasInput.value > 10) {
        mesasInput.value = 10;
    } else if (mesasInput.value < 1) {
        mesasInput.value = '';
    }
});