const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

// Function to read and process student data
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim() !== '');

      const total = students.length;
      const fields = {};

      students.forEach((line) => {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      let result = `Number of students: ${total}`;
      for (const [field, names] of Object.entries(fields)) {
        result += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }

      resolve(result);
    });
  });
}

// Root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// /students route
app.get('/students', async (req, res) => {
  const path = process.argv[2]; // passed as argument to the script
  try {
    const studentInfo = await countStudents(path);
    res.set('Content-Type', 'text/plain');
    res.send(`This is the list of our students\n${studentInfo}`);
  } catch (err) {
    res.status(500).send('This is the list of our students\nCannot load the database');
  }
});

// Start server
app.listen(port);

module.exports = app;
