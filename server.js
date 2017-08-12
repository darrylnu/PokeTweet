const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const db = require('./server/db');

// Get our API routes
const api = require('./server/routes/api');

const app = express();
app.use(bodyParser.json());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

db.connect(function (err) {
  if (err) {
    console.log("Unable to connect to database");
  } else {
    // Initialize the app.
    app.listen(process.env.PORT || 3000, function () {
      console.log("App now running");
    });
  }
});



