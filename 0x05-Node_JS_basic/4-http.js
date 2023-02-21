// A script that creates a small HTTP server using Node JS

// import the http module
const http = require('http');

// set the host and port number
const host = 'localhost';
const port = 1245;

// A function to handle incoming HTTP requests and return HTTP response
// req obj: captures all the incoming http requests
// res obj: returns the http response for the server
const requestListner = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
};

// then create the server
const app = http.createServer(requestListner);
// bind it to network address
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
