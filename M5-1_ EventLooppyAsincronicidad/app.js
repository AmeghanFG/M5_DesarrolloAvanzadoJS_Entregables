const orderList = document.getElementById('orderList'); // Lista <ul>
const addOrderBtn = document.getElementById('addOrderBtn'); // <button> Agregar Pedido

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order); // 1: Manda a llamar a la respectiva función
    processOrder(order); // 2: Manda a llamar a la function
});

function addOrder(order) { // 1: Agrega la orden
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) {
    const time = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000; // Tiempo de preparación aleatorio
    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    // TODO: Actualizar el estado del pedido a "Completado"
}