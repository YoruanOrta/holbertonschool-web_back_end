// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = {};

    for (const line of lines) {
      const parts = line.split(',');
      if (parts.length >= 4) {
        const firstname = parts[0];
        const field = parts[3];

        if (!students[field]) {
          students[field] = [];
        }

        students[field].push(firstname);
      }
    }

    const total = Object.values(students).reduce((sum, arr) => sum + arr.length, 0);
    console.log(`Number of students: ${total}`);

    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
