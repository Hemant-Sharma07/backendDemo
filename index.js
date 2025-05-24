const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 8080;

const userData = [
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", age: 28, role: "Frontend Developer", location: "New York" },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com", age: 35, role: "Backend Developer", location: "California" },
    { id: 3, name: "Catherine Lee", email: "catherine.lee@example.com", age: 30, role: "UI/UX Designer", location: "Texas" },
    { id: 4, name: "David Kim", email: "david.kim@example.com", age: 26, role: "Full Stack Developer", location: "Washington" },
    { id: 5, name: "Eva Green", email: "eva.green@example.com", age: 31, role: "Project Manager", location: "Florida" }
];

const productData = [
    {
        id: 101,
        name: "Wireless Headphones",
        brand: "Sony",
        price: 129.99,
        rating: 4.5,
        inStock: true,
        category: "Electronics"
    },
    {
        id: 102,
        name: "Smart Watch",
        brand: "Apple",
        price: 249.00,
        rating: 4.7,
        inStock: false,
        category: "Wearables"
    },
    {
        id: 103,
        name: "Electric Toothbrush",
        brand: "Philips",
        price: 39.99,
        rating: 4.3,
        inStock: true,
        category: "Personal Care"
    },
    {
        id: 104,
        name: "Laptop Backpack",
        brand: "Samsonite",
        price: 69.99,
        rating: 4.4,
        inStock: true,
        category: "Accessories"
    },
    {
        id: 105,
        name: "Bluetooth Speaker",
        brand: "JBL",
        price: 89.50,
        rating: 4.6,
        inStock: false,
        category: "Audio"
    }
];


app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/user', (req, res) => {
    res.json(userData);
});

app.get('/products', (req, res) => {
    res.json(productData);
});



app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
