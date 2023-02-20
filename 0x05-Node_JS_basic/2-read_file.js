// A function reaads a file synchronus manner
const fs = require('fs');

function countStudents(path) {
  const data = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
  console.log(data);
  if (data) {
    console.log(`Number of students: ${data}`);
    console.log('Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES');
  }
  Error('Cannot load the database');
}

module.exports = countStudents;
