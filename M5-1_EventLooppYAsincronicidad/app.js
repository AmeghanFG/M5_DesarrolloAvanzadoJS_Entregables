const orderList = document.getElementById("orderList"); // Lista <ul>
const addOrderBtn = document.getElementById("addOrderBtn"); // <button> Agregar Pedido
const btnClearOrders = document.getElementById("btnClearOrders"); // <button> Limpiar pedidos

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener("click", () => {
  const order = { id: orderId++, status: "En Proceso" };
  addOrder(order); // 1: Manda a llamar a la respectiva función
  processOrder(order); // 2: Manda a llamar a la function
});

btnClearOrders.addEventListener("click", () => {
  orderList.textContent = "";
});

function addOrder(order) {
  // 1: Agrega la orden
  const listItem = document.createElement("li");
  listItem.id = `order-${order.id}`;
  listItem.textContent = `Pedido #${order.id}: ${order.status}`;
  orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
  // Actualización de estado
  const listItem = document.getElementById(`order-${order.id}`);
  if (listItem) {
    listItem.textContent = `Pedido #${order.id}: ${status}`;
  }
}

async function processOrder(order) {
  // 2: Preparación de la orden
  const time = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000; // Tiempo de preparación aleatorio
  // TODO: Simular la preparación del pedido usando setTimeout y Promise
  // TODO: Actualizar el estado del pedido a "Completado"
  setTimeout(() => {
    order.status = "Completado";
    updateOrderStatus(order, order.status); // 3
  }, time);
}
