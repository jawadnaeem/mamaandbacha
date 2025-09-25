// JavaScript functionality for the Kids Clothing Store website

// Initialize an empty cart
let cart = [];

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    alert(`${product.name} has been added to your cart.`);
    updateCartCount();
}

// Function to update the cart count displayed on the website
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length;
}

// Function to view the cart
function viewCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

// Function to handle checkout process
function checkout() {
    // Here you can implement the checkout logic
    alert('Proceeding to checkout...');
}

// Event listeners for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = {
            name: this.dataset.name,
            price: this.dataset.price,
            image: this.dataset.image
        };
        addToCart(product);
    });
});

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);