const restaurantName = document.getElementById("restaurant-name");
const menuMessage = document.getElementById("menu-message");
const menuList = document.getElementById("menu-list");

function displayMenu() {
  let selectedRestaurant;

  try {
    selectedRestaurant = JSON.parse(
      localStorage.getItem("selectedRestaurant")
    );
  } catch (error) {
    menuMessage.textContent =
      "Unable to read your selection. Please select a restaurant again.";
    return;
  }

  if (!selectedRestaurant || !Number.isInteger(selectedRestaurant.id)) {
    menuMessage.textContent =
      "Please go back and select a restaurant.";
    return;
  }

  const restaurantItems = menuItems.filter(
    (item) => item.restaurantId === selectedRestaurant.id
  );

  restaurantName.textContent = `${selectedRestaurant.name} Menu`;

  if (restaurantItems.length === 0) {
    menuMessage.textContent =
      "No menu items are available for this restaurant.";
    return;
  }

  menuMessage.textContent = "Browse the menu below.";

  restaurantItems.forEach((item) => {
    const itemCard = document.createElement("article");
    itemCard.className = "menu-card";

    const name = document.createElement("h3");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = `Price: $${item.price.toFixed(2)}`;

    const availability = document.createElement("p");
    availability.textContent = item.isAvailable
      ? "Available"
      : "Unavailable";

    const quantityLabel = document.createElement("label");
    quantityLabel.textContent = "Quantity: ";

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = "1";
    quantityInput.value = "1";
    quantityInput.disabled = !item.isAvailable;

    quantityLabel.appendChild(quantityInput);

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Order";
    addButton.disabled = !item.isAvailable;

    addButton.addEventListener("click", () => {
      const quantity = parseInt(quantityInput.value);

      if (quantity < 1 || Number.isNaN(quantity)) {
        alert("Please select a valid quantity.");
        return;
      }

      const cartItem = {
        id: item.id,
        restaurantId: item.restaurantId,
        name: item.name,
        price: item.price,
        quantity: quantity
      };

      cart.push(cartItem);

      alert(
        `${quantity} x ${item.name} added to your order!`
      );
    });

    itemCard.append(
      name,
      price,
      availability,
      quantityLabel,
      addButton
    );

    menuList.appendChild(itemCard);
  });
}

displayMenu();
