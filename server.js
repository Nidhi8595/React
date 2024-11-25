const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config(); // Ensure environment variables are loaded

const app = express();
app.use(cors());

// Proxy for restaurant API
app.get('/api/restaurants', async (req, res) => {
  try {
    const apiUrl = process.env.API_URL_RES; // Use environment variable for API
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch restaurants');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching restaurant data:', error);
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
