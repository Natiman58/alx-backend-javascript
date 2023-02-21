// A script that creates a more complex HTTP server using Node JS

// import the http, url modules
const http = require('http');
const url = require('url');

// Import the getStudents and getStudentsFromDB functions from the 3-read_file_async.js file
const { countStudents } = require('./3-read_file_async');

// set the host and port number
const host = 'localhost';
const port = 1245;

// A function to handle incoming HTTP requests and return HTTP response
// req obj: captures all the incoming http requests
// res obj: returns the http response for the server
const requestListner = (req, res) => {
  // parse the requested url
  const parsedUrl = url.parse(req.url, true);
  // extract the path from the parsed url
  const { pathname } = parsedUrl;

  // if the path is ('/') -> send 'Hello Hol...' response
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');

    // if the path is ('/students') -> call the db
  } else if (pathname === '/students') {
    const { db } = parsedUrl.query;
    if (db) {
      countStudents(db, (error, data) => {
        if (error) {
          // send 500 response
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal server error');
        } else {
          // if no error
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(data);
        }
      });
    } else {
      // if no db call the getStudents function
      countStudents((error, data) => {
        if (error) {
          // if there is error -> send 500 response code
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal server error');
        } else {
          // if no error -> 200 response
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(data);
        }
      });
    }

    // if the path is not recognized, send 404 response
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
};

// then create the server
const app = http.createServer(requestListner);
// bind it to network address
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
