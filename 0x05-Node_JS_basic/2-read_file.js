// A function reaads a file synchronous manner
const fs = require('fs'); // Import the 'fs' module for file system operations

function countStudents(path) { // takes a path of a file
  try {
    const data = fs.readFileSync(path, 'utf8'); // read and store in data
    // console.log(data);
    const lines = data.trim().split('\n'); // return a clean array separated by new line
    // console.log(lines);
    const fields = {}; // keeps track of number of students in each field
    for (const line of lines) {
      const values = line.split(','); // iterate through each line and store the array in values
      // console.log(values)
      if (values.length === 4 && values[0] !== 'firstname') {
        const field = values[3].trim(); // the field section
        // console.log(field);
        if (fields[field]) { // if the field exsists
          fields[field].push(values[0]); // add the student name to the field
        } else {
          fields[field] = [values[0]]; // create a new field with a student name
        }
      }
    }
    // console.log(lines.length)
    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in fields) { // iterate through each field in fields
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const list = fields[field]; // get the list of students in the current field
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
