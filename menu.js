const restaurantName = document.getElementById("restaurant-name");
const menuMessage = document.getElementById("menu-message");
const menuList = document.getElementById("menu-list");

const cartItems = document.getElementById("cart-items");
const emptyCartMessage = document.getElementById("empty-cart-message");

// Display the current order
function displayCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    emptyCartMessage.style.display = "block";
    return;
  }

  emptyCartMessage.style.display = "none";

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    const itemName = document.createElement("p");
    itemName.textContent = `${item.name} x ${item.quantity}`;

    const itemPrice = document.createElement("p");
    itemPrice.textContent =
      `$${(item.price * item.quantity).toFixed(2)}`;

    cartItem.append(itemName, itemPrice);
    cartItems.appendChild(cartItem);
  });
}

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

      // Update Current Order
      displayCart();

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
displayCart();
