const restaurants = [
    {
        id: 1,
        name: "Pizza Palace",
        cuisine: "Italian",
        isOpen: true
    },
    {
        id: 2,
        name: "Burger House",
        cuisine: "Fast Food",
        isOpen: true
    },
    {
        id: 3,
        name: "Sushi Spot",
        cuisine: "Japanese",
        isOpen: true
    }
];
const restaurantList = document.getElementById("restaurant-list");

restaurants.forEach((restaurant) => {
    const restaurantCard = document.createElement("div");

    restaurantCard.innerHTML = `
        <h3>${restaurant.name}</h3>
        <p>Cuisine: ${restaurant.cuisine}</p>
        <p>Status: ${restaurant.isOpen ? "Open" : "Closed"}</p>
    `;

    restaurantList.appendChild(restaurantCard);
});
export default restaurants;
