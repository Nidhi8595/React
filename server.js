const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path for serving static files
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(cors()); // Enable CORS

// Serve the React build files
app.use(express.static(path.join(__dirname, 'dist')));

// Proxy endpoint for fetching Swiggy data
app.get('/api/restaurants', async (req, res) => {
  try {
    const apiUrl = process.env.API_URL_RES; // Fetch from .env file
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ error: 'Failed to fetch restaurant data' });
  }
});

// Proxy for menu API
app.get('/api/menu', async (req, res) => {
  try {
    const { restaurantId } = req.query; // Retrieve restaurantId from query
    if (!restaurantId) {
      return res.status(400).json({ error: 'Restaurant ID is required' });
    }
    const apiUrl = `${process.env.MENU_API}${restaurantId}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch menu');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching menu data:', error);
    res.status(500).json({ error: 'Failed to fetch menu data' });
  }
});


// Fallback to serve React app for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
