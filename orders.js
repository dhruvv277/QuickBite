
function saveOrder(order) {
    if (!order || !order.restaurantId ||
        !Array.isArray(order.items) || order.items.length === 0 ||
        !order.pickupTime) {
        return null;
    }

    const orders = JSON.parse(localStorage.getItem("quickbiteOrders") || "[]");

    const newOrder = {
        ...order,
        id: Date.now(),
        status: "Received"
    };

    orders.push(newOrder);

    localStorage.setItem("quickbiteOrders", JSON.stringify(orders));
    localStorage.setItem("latestOrder", JSON.stringify(newOrder));

    return newOrder;
}
