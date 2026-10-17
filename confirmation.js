
const confirmationTitle = document.getElementById("confirmation-title");
const confirmationMessage = document.getElementById("confirmation-message");
const orderDetails = document.getElementById("order-details");

function displayConfirmation() {
    let order;

    try {
        order = JSON.parse(localStorage.getItem("latestOrder"));
    } catch (error) {
        confirmationMessage.textContent = "Unable to load order details.";
        return;
    }

    if (!order || !order.id) {
        confirmationMessage.textContent =
            "No order has been placed yet.";
        return;
    }

    confirmationTitle.textContent = "Order Placed Successfully!";
    confirmationMessage.textContent =
        "Thank you! Your order has been received.";

    const orderId = document.createElement("p");
    orderId.textContent = `Order Number: ${order.id}`;

    const pickupTime = document.createElement("p");
    pickupTime.textContent = `Pickup Time: ${order.pickupTime}`;

    const status = document.createElement("p");
    status.textContent = `Order Status: ${order.status}`;

    const itemsHeading = document.createElement("h3");
    itemsHeading.textContent = "Your Items";

    const itemsList = document.createElement("ul");

    order.items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent =
            `${item.quantity} × ${item.name || `Item #${item.menuItemId}`}`;
        itemsList.appendChild(listItem);
    });

    orderDetails.append(
        orderId,
        pickupTime,
        status,
        itemsHeading,
        itemsList
    );
}

displayConfirmation();
