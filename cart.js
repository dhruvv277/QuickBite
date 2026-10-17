// Basic cart structure for QuickBite
const cart = [];

// Creates a cart item using the menu item structure
function createCartItem(menuItem, quantity = 1) {
  return {
    id: menuItem.id,
    restaurantId: menuItem.restaurantId,
    name: menuItem.name,
    price: menuItem.price,
    quantity: quantity
  };
}
