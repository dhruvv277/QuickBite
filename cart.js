// Basic cart structure for QuickBite
window.cart = [];

// Creates a cart item using the menu item structure
window.createCartItem = function (menuItem, quantity = 1) {
  return {
    id: menuItem.id,
    restaurantId: menuItem.restaurantId,
    name: menuItem.name,
    price: menuItem.price,
    quantity: quantity
  };
};
