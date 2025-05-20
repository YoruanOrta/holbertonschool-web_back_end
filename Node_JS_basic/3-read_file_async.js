// 3-read_file_async.js

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      // nada, eliminas la línea
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

      resolve();
    });
  });
}

module.exports = countStudents;
