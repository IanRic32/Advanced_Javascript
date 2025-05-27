// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Elementos del DOM
const librosList = document.getElementById('libros');
const agregarBtn = document.createElement('button');
agregarBtn.textContent = 'Agregar Libro';
document.body.prepend(agregarBtn);

// Función para simular la lectura de datos
function leerDatos(callback) {
    setTimeout(() => {
        callback(null, biblioteca);
    }, 500);
}

// Función para simular la escritura de datos
function escribirDatos(nuevosDatos, callback) {
    setTimeout(() => {
        try {
            biblioteca = nuevosDatos;
            callback(null, "Datos actualizados correctamente");
        } catch (error) {
            callback(error, null);
        }
    }, 500);
}

// Función para mostrar libros en la interfaz
function mostrarLibros() {
    leerDatos((error, datos) => {
        if (error) {
            console.error("Error al leer los datos:", error);
            return;
        }
        
        librosList.innerHTML = '';
        datos.libros.forEach((libro, index) => {
            const libroItem = document.createElement('li');
            libroItem.innerHTML = `
                <strong>${libro.titulo}</strong> - ${libro.autor} 
                (${libro.genero}) 
                <span class="disponibilidad ${libro.disponible ? 'disponible' : 'prestado'}">
                    ${libro.disponible ? 'Disponible' : 'Prestado'}
                </span>
                <button class="toggle-btn" data-titulo="${libro.titulo}">
                    Cambiar disponibilidad
                </button>
            `;
            librosList.appendChild(libroItem);
        });

        // Agregar event listeners a los botones
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const titulo = e.target.getAttribute('data-titulo');
                actualizarDisponibilidad(titulo);
            });
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    
    leerDatos((error, datos) => {
        if (error) {
            console.error("Error al leer los datos:", error);
            return;
        }
        
        const nuevosDatos = JSON.parse(JSON.stringify(datos));
        nuevosDatos.libros.push(nuevoLibro);
        
        escribirDatos(nuevosDatos, (error) => {
            if (error) {
                console.error("Error al guardar el libro:", error);
            } else {
                mostrarLibros();
            }
        });
    });
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo) {
    leerDatos((error, datos) => {
        if (error) {
            console.error("Error al leer los datos:", error);
            return;
        }
        
        const libroIndex = datos.libros.findIndex(libro => libro.titulo === titulo);
        
        if (libroIndex === -1) {
            console.error(`Libro "${titulo}" no encontrado.`);
            return;
        }
        
        const nuevosDatos = JSON.parse(JSON.stringify(datos));
        nuevosDatos.libros[libroIndex].disponible = !nuevosDatos.libros[libroIndex].disponible;
        
        escribirDatos(nuevosDatos, (error) => {
            if (error) {
                console.error("Error al actualizar disponibilidad:", error);
            } else {
                mostrarLibros();
            }
        });
    });
}

// Formulario para agregar libros
function crearFormulario() {
    const form = document.createElement('div');
    form.innerHTML = `
        <h2>Agregar Nuevo Libro</h2>
        <input type="text" id="titulo" placeholder="Título" required>
        <input type="text" id="autor" placeholder="Autor" required>
        <input type="text" id="genero" placeholder="Género" required>
        <label>
            <input type="checkbox" id="disponible" checked> Disponible
        </label>
        <button id="submit-btn">Agregar</button>
    `;
    form.style.margin = '20px';
    document.body.insertBefore(form, librosList);

    document.getElementById('submit-btn').addEventListener('click', () => {
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const genero = document.getElementById('genero').value;
        const disponible = document.getElementById('disponible').checked;

        if (titulo && autor && genero) {
            agregarLibro(titulo, autor, genero, disponible);
            // Limpiar formulario
            document.getElementById('titulo').value = '';
            document.getElementById('autor').value = '';
            document.getElementById('genero').value = '';
        } else {
            alert('Por favor complete todos los campos');
        }
    });
}

// Inicializar la aplicación
crearFormulario();
mostrarLibros();