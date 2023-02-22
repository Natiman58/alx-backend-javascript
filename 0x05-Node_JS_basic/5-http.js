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
    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const lines = data;
        const fields = {};
        for (const line of lines) {
          const values = line.split(',');
          if (values.length === 4 && values[0] !== 'firstname') {
            const field = values[3].trim();
            if (fields[field]) {
              fields[field].push(values[0]);
            } else {
              fields[field] = [values[0]];
            }
          }
        }
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${lines.length - 1}\n`);
        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            const list = fields[field];
            res.write(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`);
          }
        }
        res.end();
      });
  }
};

// create the server and bind it to the network address
const app = http.createServer(requestListener);
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

// export the server for testing purposes
module.exports = app;
