// script.js

// Sample product data (replace this with actual product data)
const products = [
    { id: 1, name: 'Product 1', price: 20.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 15.49, image: 'product2.jpg' },
    // Add more products as needed
];

document.addEventListener('DOMContentLoaded', function () {
    const productListings = document.getElementById('product-listings');
    const productDetails = document.getElementById('product-details');
    const shoppingCart = document.getElementById('shopping-cart');
    const addToCartBtn = document.getElementById('add-to-cart');
    const checkoutBtn = document.getElementById('checkout');
    const cartCount = document.getElementById('cart-count');

    // Display product listings
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="view-details" onclick="showProductDetails(${product.id})">View Details</button>
        `;
        productListings.appendChild(productElement);
    });

    // Show product details
    window.showProductDetails = function (productId) {
        const selectedProduct = products.find(product => product.id === productId);
        productDetails.innerHTML = `
            <img src="${selectedProduct.image}" alt="${selectedProduct.name}">
            <h3>${selectedProduct.name}</h3>
            <p>$${selectedProduct.price.toFixed(2)}</p>
        `;
        productDetails.classList.remove('hidden');
    };

    // Add to cart
    addToCartBtn.addEventListener('click', function () {
        // Implement logic to add the selected product to the shopping cart
        // Update the cart count
        const currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + 1;
        // You may want to update the cart array or perform additional logic here
    });

    // Show shopping cart
    cart.addEventListener('click', function () {
        // Implement logic to display the shopping cart
        shoppingCart.classList.remove('hidden');
    });

    // Checkout
    checkoutBtn.addEventListener('click', function () {
        // Implement logic to process the checkout (e.g., payment processing)
        alert('Checkout completed!');
    });
});
