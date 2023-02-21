// import the http and url modules
const http = require('http');
const url = require('url');

// Import the countStudents function from the 3-read_file_async.js file
const countStudents = require('./3-read_file_async');

// set the host and port number
const host = 'localhost';
const port = 1245;

// A function to handle incoming HTTP requests and return HTTP response
const requestListener = (req, res) => {
  // parse the requested url
  const parsedUrl = url.parse(req.url, true);

  // extract the path from the parsed url
  const { pathname } = parsedUrl;

  // if the path is ('/') -> send 'Hello Holberton School!' response
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');

    // if the path is ('/students') -> call the countStudents function
  } else if (pathname === '/students') {
    const db = parsedUrl.query;

    // if db is provided, call the countStudents function with the specified db
    if (db) {
      countStudents(db, (error, data) => {
        if (error) {
          // if there is an error -> send 500 response
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal server error');
        } else {
          // if no error -> 200 response
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`Number of students: ${data.count}. List: ${data.students.join(', ')}`);
        }
      });

      // if db is not provided, call the countStudents function with no arguments
    } else {
      countStudents((error, data) => {
        if (error) {
          // if there is an error -> send 500 response
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal server error');
        } else {
          // if no error -> 200 response
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`Number of students: ${data.count}. List: ${data.students.join(', ')}`);
        }
      });
    }

    // if the path is not recognized, send 404 response
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
};

// create the server and bind it to the network address
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

// export the server for testing purposes
module.exports = server;
