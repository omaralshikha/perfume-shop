// Sample product data - you can modify this array to add your products
const products = [
    {
        name: "Floral Essence",
        description: "A delicate blend of rose and jasmine",
        price: "$99.99",
        image: "images/perfume1.jpg"
    },
    {
        name: "Ocean Breeze",
        description: "Fresh and invigorating marine scent",
        price: "$89.99",
        image: "images/perfume2.jpg"
    },
    {
        name: "Midnight Mystery",
        description: "Deep and sensual oriental fragrance",
        price: "$119.99",
        image: "images/perfume3.jpg"
    },
    {
        name: "Midnight Mystery",
        description: "Deep and sensual oriental fragrance",
        price: "$119.99",
        image: "images/perfume4.jpg"
    },
    {
        name: "Midnight Mystery",
        description: "Deep and sensual oriental fragrance",
        price: "$119.99",
        image: "images/perfume5.jpg"
    },
    {
        name: "Midnight Mystery",
        description: "Deep and sensual oriental fragrance",
        price: "$119.99",
        image: "images/perfume6.jpg"
    },

];

// Function to create product cards
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span class="price">${product.price}</span>
            </div>
        </div>
    `;
}

// Load products when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.products-grid');
    products.forEach(product => {
        productsGrid.innerHTML += createProductCard(product);
    });
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});