// Import Express and create an Express server app
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));


/* 
    Handle React routing, return all requests
    to React app
*/
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server 
app.listen(3550, () => {
    console.log('Running on port: 3550');
});