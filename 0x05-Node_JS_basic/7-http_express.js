// A script that creates a more complex HTTP server using Express

// import the express module
const express = require('express');

// create an instance of the express application
const app = express();

// extract the function only
const countStudents = require('./3-read_file_async');

// take the databse from terminal
const database = process.argv[2];

// set the port number
const port = 1245;

// define a route that handles GET requests to the root path ('/')
app.get('/', (req, res) => {
  // send a response with the text 'Hello Holberton School!'
  res.send('Hello Holberton School!');
});

// route for '/students'
app.get('/students', (req, res) => {
  if (!database) { // if the name of db not provided in command line
    res.send('This is the list of our students');
    countStudents((error, data) => {
      if (error) {
        res.status(500).send('Cannot load the database');
      } else {
        res.send(data);
      }
    });
  } else { // if name of db provided as command line arg
    res.send(`This is the list of our students in the ${database} database`);
    countStudents(database, (error, data) => {
      if (error) {
        res.status(500).send('Cannot load the database');
      } else {
        res.send(data);
      }
    });
  }
});

// start the server and make it listen for incoming connections on the specified port
app.listen(port, () => {
  // print a message indicating that the server is running and listening on the specified port
  console.log(`Example app listening on port ${port}`);
});

// export the express application for use in other files
module.exports = app;
