// A script to read a file in async manner
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');
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
    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const list = fields[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
    return Buffer.from(data);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
