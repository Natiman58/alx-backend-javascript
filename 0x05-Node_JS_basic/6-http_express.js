// A script that creates a small HTTP server using Express
// import the express module
const express = require('express');

// create an instance of the express application
const app = express();

// set the port number
const port = 1245;

// define a route that handles GET requests to the root path ('/')
app.get('/', (req, res) => {
  // send a response with the text 'Hello Holberton School!'
  res.send('Hello Holberton School!');
});

// start the server and make it listen for incoming connections on the specified port
app.listen(port, () => {
  // print a message indicating that the server is running and listening on the specified port
  console.log(`Example app listening on port ${port}`);
});

// export the express application for use in other files
module.exports = app;
