const PICKUP_TIMES = [
    "11:00", "11:30", "12:00", "12:30",
    "13:00", "13:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30"
  ];
  
  function renderPickupTimes() {
    const select = document.getElementById("pickup-time");
    select.innerHTML = '<option value=""> choose time </option>';
  
    for (let i = 0; i < PICKUP_TIMES.length; i++) {
      const time = PICKUP_TIMES[i];
      select.innerHTML += '<option value="' + time + '">' + time + '</option>';
    }
  }

  function RestorePickupTime(){

  }
  
  document.addEventListener("DOMContentLoaded", function () {
    renderPickupTimes();
  });
  
document.getElementById("place-order-btn").addEventListener("click", function () {
    const pickupTime = document.getElementById("pickup-time").value;
    const pickupError = document.getElementById("pickup-error");

    pickupError.textContent = "";

    if (cart.length === 0) {
        pickupError.textContent = "Please add items to your order.";
        return;
    }

    if (!pickupTime) {
        pickupError.textContent = "Please select a pickup time.";
        return;
    }

    const selectedRestaurant = JSON.parse(
        localStorage.getItem("selectedRestaurant")
    );

    if (!selectedRestaurant) {
        pickupError.textContent = "Please select a restaurant.";
        return;
    }

    const order = {
        restaurantId: selectedRestaurant.id,
        items: cart,
        pickupTime: pickupTime
    };

    const savedOrder = saveOrder(order);

    if (savedOrder) {
        window.location.href = "confirmation.html";
    } else {
        pickupError.textContent = "Unable to place order.";
    }
});
