// 5-http.js

const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(database)
      .then(() => {
        // countStudents already logs to console, but we need to return the message manually here
        // We re-read the data to format the response ourselves
        const fs = require('fs');
        fs.readFile(database, 'utf8', (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.end('Cannot load the database');
            return;
          }

          const lines = data.split('\n').filter(line => line.trim() !== '');
          const header = lines.shift();
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
          let response = 'This is the list of our students\n';
          response += `Number of students: ${total}\n`;

          for (const [field, names] of Object.entries(students)) {
            response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
          }

          res.end(response.trim()); // remove final newline
        });
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;