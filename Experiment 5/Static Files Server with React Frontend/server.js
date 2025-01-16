// Import Express and create an Express server app
const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'))

// Defining base route
app.get('/', function(req, res) {
    res.send(`Welcome to the Static Files Server with React Frontend!`)
});

// Start the server 
app.listen(3550, () => {
    console.log('Running on port: 3550');
});