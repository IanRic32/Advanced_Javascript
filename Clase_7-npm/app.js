const planetas = [
    {
        nombre: "Titán",
        descripcion: "La luna más grande de Saturno, con lagos de metano.",
        descubiertoEn: "1655",
        imagen: "https://apod.nasa.gov/apod/image/2012/PIA20016titan1024.jpg",
        tipo: "Luna"
    },
    {
        nombre: "Próxima Centauri b",
        descripcion: "Exoplaneta rocoso en la zona habitable de la estrella más cercana al Sol.",
        descubiertoEn: "2016",
        imagen: "https://www.nasa.gov/sites/default/files/thumbnails/image/pia21424-16.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "TRAPPIST-1e",
        descripcion: "Planeta potencialmente habitable en el sistema TRAPPIST-1 con siete planetas.",
        descubiertoEn: "2017",
        imagen: "https://www.nasa.gov/sites/default/files/thumbnails/image/trappist1e_0.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "Kepler-186f",
        descripcion: "Primer planeta del tamaño de la Tierra encontrado en la zona habitable de su estrella.",
        descubiertoEn: "2014",
        imagen: "https://www.nasa.gov/sites/default/files/kepler186f.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "HD 189733 b",
        descripcion: "Exoplaneta azul cobalto donde llueve vidrio debido a los vientos supersónicos.",
        descubiertoEn: "2005",
        imagen: "https://www.nasa.gov/sites/default/files/hd189733b.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "55 Cancri e",
        descripcion: "Planeta supertierra con superficie que podría estar compuesta de diamante y grafito.",
        descubiertoEn: "2004",
        imagen: "https://www.nasa.gov/sites/default/files/55cancrie.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "WASP-12b",
        descripcion: "Exoplaneta que está siendo devorado lentamente por su estrella anfitriona.",
        descubiertoEn: "2008",
        imagen: "https://www.nasa.gov/sites/default/files/wasp12b.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "PSR B1620-26 b",
        descripcion: "El planeta más antiguo conocido, apodado 'Matusalén', con ~12.7 mil millones de años.",
        descubiertoEn: "2003",
        imagen: "https://www.nasa.gov/sites/default/files/psrb1620.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "Gliese 581c",
        descripcion: "Uno de los primeros exoplanetas potencialmente habitables descubiertos.",
        descubiertoEn: "2007",
        imagen: "https://www.nasa.gov/sites/default/files/gliese581.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "Kepler-22b",
        descripcion: "Primer planeta en zona habitable descubierto por el telescopio Kepler.",
        descubiertoEn: "2011",
        imagen: "https://www.nasa.gov/sites/default/files/kepler22b.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "TOI 700 d",
        descripcion: "Primer planeta del tamaño de la Tierra en zona habitable descubierto por TESS.",
        descubiertoEn: "2020",
        imagen: "https://www.nasa.gov/sites/default/files/toi700d_0.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "LHS 3844 b",
        descripcion: "Exoplaneta rocoso con una órbita extremadamente cercana a su estrella.",
        descubiertoEn: "2018",
        imagen: "https://www.nasa.gov/sites/default/files/lhs3844b.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "K2-18b",
        descripcion: "Exoplaneta con posible presencia de agua en su atmósfera.",
        descubiertoEn: "2015",
        imagen: "https://www.nasa.gov/sites/default/files/k2-18b.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "GJ 1214 b",
        descripcion: "Planeta océano con atmósfera rica en vapor de agua.",
        descubiertoEn: "2009",
        imagen: "https://www.nasa.gov/sites/default/files/gj1214b.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "Kepler-452b",
        descripcion: "Llamado 'Tierra 2.0' por su similitud con nuestro planeta.",
        descubiertoEn: "2015",
        imagen: "https://www.nasa.gov/sites/default/files/kepler452b.jpg",
        tipo: "Exoplaneta"
    },
    {
        nombre: "Europa",
        descripcion: "Luna de Júpiter con océano subterráneo que podría albergar vida.",
        descubiertoEn: "1610",
        imagen: "https://apod.nasa.gov/apod/image/2103/Europa_Galileo_960.jpg",
        tipo: "Luna"
    },
    {
        nombre: "Encélado",
        descripcion: "Luna de Saturno con géiseres de agua que sugieren un océano bajo su superficie.",
        descubiertoEn: "1789",
        imagen: "https://apod.nasa.gov/apod/image/2005/EnceladusPlume_Cassini_960.jpg",
        tipo: "Luna"
    },
    {
        nombre: "Ganímedes",
        descripcion: "La luna más grande del Sistema Solar, con su propio campo magnético.",
        descubiertoEn: "1610",
        imagen: "https://apod.nasa.gov/apod/image/2106/Ganymede_Galileo_960.jpg",
        tipo: "Luna"
    },
    {
        nombre: "Io",
        descripcion: "Luna de Júpiter con intensa actividad volcánica.",
        descubiertoEn: "1610",
        imagen: "https://apod.nasa.gov/apod/image/2101/IoVolcano_Juno_960.jpg",
        tipo: "Luna"
    },
    {
        nombre: "Tritón",
        descripcion: "Luna más grande de Neptuno con géiseres de nitrógeno.",
        descubiertoEn: "1846",
        imagen: "https://apod.nasa.gov/apod/image/1408/triton_voyager2_960.jpg",
        tipo: "Luna"
    },
    {
        nombre: "Plutón",
        descripcion: "Planeta enano con corazón de hielo y montañas de agua helada.",
        descubiertoEn: "1930",
        imagen: "https://apod.nasa.gov/apod/image/1507/PlutoNewHorizons_NASA_960.jpg",
        tipo: "Planeta enano"
    },
    {
        nombre: "Ceres",
        descripcion: "Planeta enano en el cinturón de asteroides con posibles criovolcanes.",
        descubiertoEn: "1801",
        imagen: "https://apod.nasa.gov/apod/image/1601/Ceres_Dawn_960.jpg",
        tipo: "Planeta enano"
    },
    {
        nombre: "Haumea",
        descripcion: "Planeta enano con forma ovalada y anillos de hielo.",
        descubiertoEn: "2004",
        imagen: "https://apod.nasa.gov/apod/image/1710/Haumea_Art_960.jpg",
        tipo: "Planeta enano"
    },
    {
        nombre: "Makemake",
        descripcion: "Planeta enano sin atmósfera en el cinturón de Kuiper.",
        descubiertoEn: "2005",
        imagen: "https://apod.nasa.gov/apod/image/1207/makemake_hubble_960.jpg",
        tipo: "Planeta enano"
    },
    {
        nombre: "Eris",
        descripcion: "Planeta enano más masivo que Plutón, descubierto en 2005.",
        descubiertoEn: "2005",
        imagen: "https://apod.nasa.gov/apod/image/0510/eris_art_960.jpg",
        tipo: "Planeta enano"
    },
    {
        nombre: "Sedna",
        descripcion: "Objeto transneptuniano con una de las órbitas más largas conocidas.",
        descubiertoEn: "2003",
        imagen: "https://apod.nasa.gov/apod/image/0403/sedna_hst_960.jpg",
        tipo: "Objeto transneptuniano"
    },
    {
        nombre: "Arrokoth",
        descripcion: "Objeto del cinturón de Kuiper visitado por New Horizons en 2019.",
        descubiertoEn: "2014",
        imagen: "https://apod.nasa.gov/apod/image/2001/Arrokoth_NewHorizons_960.jpg",
        tipo: "Objeto del cinturón de Kuiper"
    },
    {
        nombre: "Oumuamua",
        descripcion: "Primer objeto interestelar detectado pasando por nuestro sistema solar.",
        descubiertoEn: "2017",
        imagen: "https://apod.nasa.gov/apod/image/1711/oumuamua_eso_960.jpg",
        tipo: "Objeto interestelar"
    },
    {
        nombre: "2I/Borisov",
        descripcion: "Segundo objeto interestelar detectado, un cometa con composición inusual.",
        descubiertoEn: "2019",
        imagen: "https://apod.nasa.gov/apod/image/1912/borisov_hst_960.jpg",
        tipo: "Cometa interestelar"
    },
    {
        nombre: "TOI 1338 b",
        descripcion: "Primer planeta circumbinario descubierto por TESS, orbita dos estrellas.",
        descubiertoEn: "2020",
        imagen: "https://www.nasa.gov/sites/default/files/toi1338b.jpg",
        tipo: "Exoplaneta circumbinario"
    }
];

// Función para mostrar planetas
function mostrarPlanetas(planetasAMostrar = planetas) {
    const contenedor = document.getElementById('contenedor-planetas');
    contenedor.innerHTML = '';

    planetasAMostrar.forEach(planeta => {
        const card = document.createElement('div');
        card.className = 'planeta-card';
        
        card.innerHTML = `
            <img src="${planeta.imagen}" alt="${planeta.nombre}" class="planeta-img">
            <h2>${planeta.nombre}</h2>
            <span class="ano-descubrimiento">${planeta.descubiertoEn}</span>
            <p>${planeta.descripcion}</p>
            <p><strong>Tipo:</strong> ${planeta.tipo}</p>
        `;
        
        contenedor.appendChild(card);
    });
}

// Filtros
document.getElementById('buscador').addEventListener('input', (e) => {
    const busqueda = e.target.value.toLowerCase();
    const planetasFiltrados = planetas.filter(planeta => 
        planeta.nombre.toLowerCase().includes(busqueda) || 
        planeta.descripcion.toLowerCase().includes(busqueda)
    );
    mostrarPlanetas(planetasFiltrados);
});

document.getElementById('filtro-ano').addEventListener('change', (e) => {
    const valor = e.target.value;
    let planetasFiltrados = planetas;
    
    if (valor === 'antiguos') {
        planetasFiltrados = planetas.filter(p => p.descubiertoEn === 'Antigüedad');
    } else if (valor === 'modernos') {
        planetasFiltrados = planetas.filter(p => p.descubiertoEn !== 'Antigüedad');
    }
    
    mostrarPlanetas(planetasFiltrados);
});

// Mostrar todos los planetas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarPlanetas();
});