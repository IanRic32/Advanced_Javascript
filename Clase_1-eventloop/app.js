const orderlist = document.getElementById('list'); // Lista donde se mostrarán los pedidos
const addorderbtn = document.getElementById('addboton');// Botón para agregar un nuevo pedido

let orderId = 1; // Para identificar los pedidos    

addorderbtn.addEventListener('click', () => {
    const orden = { id: orderId++, status: 'En Proceso' };
    addorder(orden);
    processorder(orden);
});

function addorder(orden) {
    const listItem = document.createElement('li');
    listItem.id = `order-${orden.id}`;
    listItem.textContent = `Pedido #${orden.id}: ${orden.status}`;
    orderlist.appendChild(listItem);
}

function updateOrderStatus(orden, status) {
    const listItem = document.getElementById(`order-${orden.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${orden.id}: ${status}`;
        // Cambiar color según el estado
        if (status === 'Completado') {
            listItem.style.color = 'green';
        } else {
            listItem.style.color = 'black';
        }
    }
}

async function processOrder(orden) {
    try {
        // Simulamos el tiempo de preparación con un retraso aleatorio entre 2 y 5 segundos
        const preparationTime = Math.floor(Math.random() * 3000) + 2000;
        
        // Usamos una Promise con setTimeout para simular la preparación asíncrona
        await new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, preparationTime);
        });
        
        // Actualizamos el estado del pedido
        updateOrderStatus(orden, 'Completado');
        
    } catch (error) {
        console.error(`Error procesando el pedido #${orden.id}:`, error);
        updateOrderStatus(orden, 'Error en preparación');
    }
}