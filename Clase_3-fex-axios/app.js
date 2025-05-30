const publicKey = '0f153ab23c55f092a1a21f5c6a313f1c'; 
const privateKey = '05630d383e2c545c8fd60f5718a83b059f4c5056';
const timestamp = Date.now().toString();
const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();

const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=20`;

// Elementos del DOM
const fetchBtn = document.getElementById('fetch-btn');
const axiosBtn = document.getElementById('axios-btn');
const dataContainer = document.getElementById('data-container');

// Mostrar estado de carga
function showLoading() {
  dataContainer.innerHTML = '<div class="loading">Cargando personajes...</div>';
}

// Mostrar error
function showError(message) {
  dataContainer.innerHTML = `<div class="error">${message}</div>`;
}

// Implementación con Fetch
fetchBtn.addEventListener('click', () => {
    showLoading();  
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
    return response.json();
    })
    .then(data => {
        if (data.code === 200) {
            renderCharacters(data.data.results);
        } else {
            throw new Error(data.status || 'Error desconocido');
        }
    })
    .catch(error => {
    console.error('Error con Fetch:', error);
    showError(`Hubo un error al obtener los datos: ${error.message}`);
    });
});

// Implementación con Axios
axiosBtn.addEventListener('click', () => {
showLoading();  
axios.get(apiUrl)
    .then(response => {
    if (response.data.code === 200) {
        renderCharacters(response.data.data.results);
    } else {
        throw new Error(response.data.status || 'Error desconocido');
    }
    })
    .catch(error => {
    console.error('Error con Axios:', error);
    showError(`Hubo un error al obtener los datos: ${error.message}`);
    });
});

// Función para renderizar los personajes
function renderCharacters(characters) {
    if (!characters || characters.length === 0) {
        showError('No se encontraron personajes.');
    return;
}
dataContainer.innerHTML = '';
characters.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.className = 'character';
    const imageUrl = character.thumbnail ? `${character.thumbnail.path}.${character.thumbnail.extension}`.replace('http://', 'https://')
    : 'https://via.placeholder.com/250x250?text=No+Image';//condicional ternaria
    let description = character.description || 'Descripción no disponible';
    if (description.length > 100) {
    description = description.substring(0, 1000) + '...';
    }
    
    characterElement.innerHTML = `
    <img src="${imageUrl}" alt="${character.name}">
    <div class="character-info">
        <h3>${character.name}</h3>
        <p>${description}</p>
    </div>
    `;
    dataContainer.appendChild(characterElement);
});
}