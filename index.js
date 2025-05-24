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

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/user', (req, res) => {
    res.json(userData);
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
