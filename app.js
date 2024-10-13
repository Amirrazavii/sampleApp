// Import the express module
const express = require('express');

// Initialize the app
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic route - home
app.get('/', (req, res) => {
  res.send('Welcome to my Node.js Express App!');
});

// Sample route - GET request
app.get('', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Sample route - POST request
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ receivedData: data });
});

// Sample route - dynamic route with parameter
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ID: ${userId}` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
